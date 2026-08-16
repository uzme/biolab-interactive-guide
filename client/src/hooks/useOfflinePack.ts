import { useCallback, useEffect, useState } from "react";

type OfflineStatus = "tekshirilmoqda" | "tayyor" | "yuklanmoqda" | "xatolik";

type OfflineProgress = {
  completed: number;
  total: number;
  failed: number;
};

const READY_KEY = "biolab:offline-pack:v1";

export function useOfflinePack() {
  const [isOnline, setIsOnline] = useState(() => typeof navigator === "undefined" || navigator.onLine);
  const [isSupported, setIsSupported] = useState(false);
  const [status, setStatus] = useState<OfflineStatus>("tekshirilmoqda");
  const [progress, setProgress] = useState<OfflineProgress>({ completed: 0, total: 0, failed: 0 });

  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    const supported = "serviceWorker" in navigator && window.isSecureContext;
    setIsSupported(supported);
    if (localStorage.getItem(READY_KEY) === "true") setStatus("tayyor");
    else if (!supported) setStatus("xatolik");
    else setStatus("tekshirilmoqda");

    const onMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data?.type === "OFFLINE_PACK_PROGRESS") {
        setProgress({ completed: data.completed, total: data.total, failed: data.failed });
        setStatus("yuklanmoqda");
      }
      if (data?.type === "OFFLINE_PACK_COMPLETE") {
        setProgress({ completed: data.completed, total: data.total, failed: data.failed });
        if (data.failed === 0) {
          localStorage.setItem(READY_KEY, "true");
          setStatus("tayyor");
        } else {
          localStorage.removeItem(READY_KEY);
          setStatus("xatolik");
        }
      }
      if (data?.type === "OFFLINE_PACK_CLEARED") {
        localStorage.removeItem(READY_KEY);
        setProgress({ completed: 0, total: 0, failed: 0 });
        setStatus("tekshirilmoqda");
      }
    };

    navigator.serviceWorker?.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
      navigator.serviceWorker?.removeEventListener("message", onMessage);
    };
  }, []);

  const sendMessage = useCallback(async (message: Record<string, unknown>) => {
    if (!isSupported) return false;
    const registration = await navigator.serviceWorker.ready;
    const worker = registration.active || registration.waiting || registration.installing;
    if (!worker) return false;
    worker.postMessage(message);
    return true;
  }, [isSupported]);

  const downloadPack = useCallback(async (urls: string[]) => {
    if (!isOnline || !isSupported) return false;
    setProgress({ completed: 0, total: urls.length, failed: 0 });
    setStatus("yuklanmoqda");
    return sendMessage({ type: "DOWNLOAD_OFFLINE_PACK", urls });
  }, [isOnline, isSupported, sendMessage]);

  const clearPack = useCallback(async () => {
    const sent = await sendMessage({ type: "CLEAR_OFFLINE_PACK" });
    if (!sent) {
      localStorage.removeItem(READY_KEY);
      setStatus("tekshirilmoqda");
    }
    return sent;
  }, [sendMessage]);

  return {
    isOnline,
    isSupported,
    status,
    progress,
    downloadPack,
    clearPack,
  };
}
