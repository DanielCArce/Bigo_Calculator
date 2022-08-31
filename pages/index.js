import Head from "next/head";
import React, { useReducer } from "react";
import LatamPercentageFormComponent from "../components/LatamPercentageFormComponent";
import RulesComponent from "../components/RulesComponent";
import { CalculateContext, initialState } from "../contexts/CalculateContext";
import ReducerFunction from "../reducer/ReducerFunction";
import DisplayInfoComponent from "./../components/DisplayInfoComponent";
export default function Home() {
  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  return (
    <React.Fragment>
      <Head>
        <title>Calculo de Porcentaje Latam</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <CalculateContext.Provider value={{ state, dispatch }}>
        <React.Fragment>
          <div
            className="flex flex-col sm:flex-row px-2 py-6
           container mx-auto"
          >
            <RulesComponent className="w-1/2 mr-4 pl-4 xsm:w-auto xsm:mb-4" />
            <div className="w-1/2 xsm:w-auto">
              <LatamPercentageFormComponent />
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
