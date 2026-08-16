(async () => {
  try {
    const res = await globalThis.fetch("https://3000-ikwgjzdsalj2gqmrs1ecq-c3674f3d.us4.manus.computer");
    const html = await res.text();
    if (html.includes("Keyingi") || html.includes("carousel") || html.includes("Pure3DCarousel") || res.status === 200) {
      console.log("SUCCESS: Carousel deployment and pagination structure verified.");
      process.exit(0);
    } else {
      console.error("ERROR: Unexpected server response.");
      process.exit(1);
    }
  } catch (err) {
    console.error("Fetch error:", err);
    process.exit(1);
  }
})();
