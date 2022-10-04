import React from "react";
import Head from "next/head";
export default function MetaHead({ metadata }) {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta charset="utf-8" />
      <meta name="application-name" content="Bigo Calculador" />
      <meta
        name="description"
        content="Un calculador para aprender a compensar la meta de exterior  y aprender a hacer intercambios en la plataforma de bigoLive."
      />
      <meta name="author" content="DanielCArce" />
      <meta name="copyright" content="DanielCArce" />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="fb:app_id" content="123456789" />
      <meta property="og:url" content="https://bigo-calculator.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bigo Calculador" />
      <meta
        property="og:description"
        content="Un calculador para aprender a compensar la meta de exterior  y aprender a hacer intercambios en la plataforma de bigoLive."
      />
      <meta property="og:site_name" content="Bigo Calculador" />
      <meta name="twitter:creator" content="@danielcarce" />
      <meta name="twitter:url" content="https://bigo-calculator.vercel.app" />
      <meta name="twitter:title" content="Bigo Calculador" />
      <meta
        name="twitter:description"
        content="Un calculador para aprender a compensar la meta de exterior  y aprender a hacer intercambios en la plataforma de bigoLive."
      />
    </Head>
  );
}
