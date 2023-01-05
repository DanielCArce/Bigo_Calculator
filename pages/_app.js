import "../styles/globals.css";
import React, { useEffect } from "react";
import HeaderPage from './../components/HeaderPage';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker.register("/sw.js");
  //   } else {
  //     console.log("Service Worker is not supported.");
  //   }
  // }, []);
  return (
    <React.Fragment>
      <HeaderPage/>
      <Component {...pageProps} />;
    </React.Fragment>
  );
}
export default MyApp;
