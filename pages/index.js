import Head from "next/head";
import React, { useReducer } from "react";
import FormComponent from "../components/FormComponent";
import { CalculateContext, initialState } from "../contexts/CalculateContext";
import ReducerFunction from "../reducer/ReducerFunction";
import DisplayInfoComponent from "./../components/DisplayInfoComponent";
export default function Home() {
  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  return (
    <React.Fragment>
      <Head>
        <title>Calculo de Porcentaje Latam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CalculateContext.Provider value={{ state, dispatch }}>
        <React.Fragment>
          <div className="flex flex-col sm:flex-row md:flex-row font-base justify-center w-3/4 container mx-auto py-8 px-3 ">
            <div className="w-3/6 mr-8">
              <div className="mb-6">
                <h1 className="font-bold text-4xl">Calculadora de Bigo</h1>
                <h2 className="font-light text-2xl">Balance de % Exterior</h2>
              </div>
              <h3 className="font-semibold text-3xl mb-3">
                Aclaración del calculador
              </h3>
              <ul className="list-disc list-inside">
                <li className="mb-4">
                  Este calculador no esta asociado de ninguna manera con Bigo
                  Live ni ninguna empresa asociada.
                </li>
                <li>
                  Los calculos se realizan de acuerdo a la información
                  suministrada por el usuario, por lo tanto solo se es
                  responsable por cualquier dato errado de margen de error.
                </li>
                <li>
                  Se recomienda pasarse del monto calculado para compensar
                  cualquier factor de redondeo o milecimas.
                </li>
              </ul>
            </div>
            <div className="w-3/6">
              <FormComponent />
              <DisplayInfoComponent />
            </div>
          </div>
          <footer className="font-base justify-center w-2/4 container mx-auto py-8 px-3 text-center">
            <span>
              Hecho con amor por{" "}
              <a href="https://twitter.com/danielcarce">@DanielCArce</a>
            </span>
          </footer>
        </React.Fragment>
      </CalculateContext.Provider>
    </React.Fragment>
  );
}
