import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps, childen }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    } else {
      console.log("Service Worker is not supported.");
    }
  }, []);
  return <Component {...pageProps} />;
}
export default MyApp;
