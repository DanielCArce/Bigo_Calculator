import "../styles/globals.css";
import React, { useEffect } from "react";
import HeaderPage from './../components/layout/HeaderPage';
import FooterPage from "./../components/layout/FooterPage";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    } else {
      console.log("Service Worker is not supported.");
    }
  }, []);
  return (
    <React.Fragment>
      <HeaderPage/>
      <Component {...pageProps} />
      <FooterPage/>
    </React.Fragment>
  )
}
export default MyApp;
