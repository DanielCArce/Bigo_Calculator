import "../styles/globals.css";
import React, { useEffect } from "react";

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
      <Component {...pageProps} />;
    </React.Fragment>
  );
}
export default MyApp;
