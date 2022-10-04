import Head from "next/head";
import React from "react";
import RulesDisplay from "./../components/RulesDisplay";

function index() {
  return (
    <React.Fragment>
      <Head>
        <title>Bigo Calculador - Gestión Simple</title>
      </Head>
      <div className="cotainer mx-auto">
        <RulesDisplay
          rules={[
            {
              id: 1,
              body: "Revisar las montos ingresados y las fechas de la actualización.",
            },
            {
              id: 2,
              body: "Las herramientras no están asociadas de ninguna manera con BigoLive ni ninguna empresa asociada.",
            },
            {
              id: 3,
              body: "Los cálculos son bajo un margen muy mínimo de error, aun así para evitar cualquier mínimo error se recomienda pasarse algo del monto suministrado.",
            },
            {
              id: 4,
              body: "Recuerda que si lo recibes de un emisor el porcentaje  de apoyo cruzado sube porporcional al monto de semillas dado.",
            },
            {
              id: 5,
              body: "Premisa del cálculo, 40% maximo extranjero y a considerar maximo de 50% apoyo cruzado de emisor.",
            },
          ]}
          title="Consideraciones para las herramientas"
        />
      </div>
    </React.Fragment>
  );
}

export default index;
