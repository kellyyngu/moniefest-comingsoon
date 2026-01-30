import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure favicon is loaded
const setFavicon = () => {
  const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
  link.type = 'image/svg+xml';
  link.rel = 'icon';
  link.href = '/monie-black.svg?v=4';
  if (!document.querySelector("link[rel*='icon']")) {
    document.head.appendChild(link);
  }
};

setFavicon();

createRoot(document.getElementById("root")!).render(<App />);
