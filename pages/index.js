import Head from "next/head";
import React from "react";
import HeaderPage from "../components/HeaderPage";
import RulesDisplay from "./../components/RulesDisplay";

function index() {
  return (
    <React.Fragment>
      <Head>
        <title>Bigo Calculador - Gestión Simple</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Un calculador para aprender a compensar la meta de exteriorr  y aprender a hacer intercambios"
        />
        <meta name="author" content="DanielCArce" />
        <meta name="copyright" content="DanielCArce" />
        <meta name="robots" content="index,nofollow" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderPage />
      <div>index</div>
      <RulesDisplay
        rules={[
          {
            id: 1,
            body: "Todo calculo se realiza con un monto bastante cerca a la realidad, el margen de error es minimo.",
          },
          { id: 2, body: "" },
        ]}
        title="Reglas de Intercambios 
        y Balance Porcentaje Latam"
      />
    </React.Fragment>
  );
}

export default index;
