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
        <div className="flex flex-row justify-center">
          <div>
            <h1>Calculadora de Bigo</h1>
            <h2>Balance de % Exterior</h2>
            <h3>Aclaración del calculador</h3>
            <ul>
              <li>
                Este calculador no esta asoaciado de ninguna manera con Bigo
                Live ni ninguna empresa asociada.
              </li>
              <li>
                Los calculos se realizan de acuerdo a la información
                suministrada por el usuario, por lo tanto solo se es responsable
                por cualquier dato errado de margen de error.
              </li>
            </ul>
          </div>
          <div>
            <FormComponent />
            <DisplayInfoComponent />
          </div>
        </div>
      </CalculateContext.Provider>
    </React.Fragment>
  );
}
