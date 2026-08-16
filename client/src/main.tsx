import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if ("serviceWorker" in navigator && window.isSecureContext) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch((error) => {
      console.warn("BioLab offline rejimi ishga tushmadi:", error);
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
