import "../styles/globals.css";
import React, { useEffect } from "react";
import MetaHead from "../components/MetaHead";
import HeaderPage from "./../components/HeaderPage";
import FooterPage from "./../components/FooterPage";

function MyApp({ Component, pageProps, childen }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    } else {
      console.log("Service Worker is not supported.");
    }
  }, []);
  return (
    <React.Fragment>
      <MetaHead />
      <HeaderPage />
      <Component {...pageProps} />;
      <FooterPage />
    </React.Fragment>
  );
}
export default MyApp;
