import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if ("serviceWorker" in navigator && window.isSecureContext) {
  window.addEventListener("load", () => {
    let reloadedForNewWorker = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (reloadedForNewWorker) return;
      reloadedForNewWorker = true;
      window.location.reload();
    });

    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((registration) => registration.update())
      .catch((error) => {
        console.warn("BioLab offline rejimi ishga tushmadi:", error);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
