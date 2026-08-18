const CACHE_VERSION = "biolab-offline-v1";
const APP_CACHE = `${CACHE_VERSION}-app`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const APP_SHELL = ["/", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(APP_CACHE)
      .then((cache) => Promise.allSettled(APP_SHELL.map((url) => cache.add(url))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => !key.startsWith(CACHE_VERSION)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

function notifyClient(client, message) {
  if (client && typeof client.postMessage === "function") {
    client.postMessage(message);
  }
}

async function downloadOfflinePack(urls, client) {
  const uniqueUrls = [...new Set(urls.filter((url) => typeof url === "string" && url.startsWith("/")))];
  const cache = await caches.open(IMAGE_CACHE);
  let nextIndex = 0;
  let completed = 0;
  let failed = 0;
  const workerCount = Math.min(6, uniqueUrls.length);

  const worker = async () => {
    while (nextIndex < uniqueUrls.length) {
      const url = uniqueUrls[nextIndex++];
      try {
        const response = await fetch(new Request(url, { cache: "reload" }));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        await cache.put(url, response.clone());
      } catch {
        failed += 1;
      } finally {
        completed += 1;
        notifyClient(client, {
          type: "OFFLINE_PACK_PROGRESS",
          completed,
          total: uniqueUrls.length,
          failed,
        });
      }
    }
  };

  await Promise.all(Array.from({ length: workerCount }, worker));

  notifyClient(client, {
    type: "OFFLINE_PACK_COMPLETE",
    completed,
    total: uniqueUrls.length,
    failed,
  });
}

self.addEventListener("message", (event) => {
  const client = event.source;
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }

  if (event.data?.type === "DOWNLOAD_OFFLINE_PACK") {
    event.waitUntil(downloadOfflinePack(event.data.urls || [], client));
    return;
  }

  if (event.data?.type === "CLEAR_OFFLINE_PACK") {
    event.waitUntil(caches.delete(IMAGE_CACHE).then(() => notifyClient(client, { type: "OFFLINE_PACK_CLEARED" })));
  }
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(IMAGE_CACHE);
    await cache.put(request, response.clone());
  }
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(APP_CACHE);
  const cached = await cache.match(request);
  const networkResponse = fetch(request)
    .then(async (response) => {
      if (response.ok) await cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached || Response.error());
  return cached || networkResponse;
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(APP_CACHE);
    await cache.put("/", response.clone());
    return response;
  } catch {
    return (await caches.match(request)) || (await caches.match("/")) || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (url.pathname.startsWith("/manus-storage/") || request.destination === "image") {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (["script", "style", "font", "manifest"].includes(request.destination)) {
    event.respondWith(staleWhileRevalidate(request));
  }
});
