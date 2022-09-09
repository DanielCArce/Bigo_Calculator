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
      <div className="cotainer mx-auto lg:w-3/4 md:w-3/4 sm:w-screen xsm:w-full px-1 py-1">
        <RulesDisplay
          rules={[
            {
              id: 1,
              body: "Revisar las montos ingresados y las fechas de la actualización.",
            },
            {
              id: 2,
              body: "Las herramientras no estan asociadas de ninguna manera con BigoLive ni ninguna empresa asociada.",
            },
            {
              id: 3,
              body: "Aunque los calculos estan hechos contemplando un margen de error muy pequeño, se recomienda pasar un poco mas arriba del calculo.",
            },
          ]}
          title="Consideraciones para las herramientas"
        />
      </div>
    </React.Fragment>
  );
}

export default index;
