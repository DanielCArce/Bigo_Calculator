import React, { useReducer } from "react";
import { CalculateContext, initialState } from "../contexts/CalculateContext";
import { ACTIONS, CalculateReducer } from "../reducer/CalculateReducerFunction";
import LatamPercentageForm from "../components/LatamPercentageForm";
import TableCalculateLatam from "../components/TableLatam";
import HeaderPage from "../components/HeaderPage";
import Head from "next/head";
export default function LatamPercentageCalculate() {
  const [state, dispatch] = useReducer(CalculateReducer, initialState);
  return (
    <React.Fragment>
      <Head>
        <title>Bigo Calculador - Calculadora de Porcentaje Latam</title>
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
      <h2 className="text-center sm:text-xl lg:text-2xl md:text-2xl font-semibold mb-5 uppercase">
        Balance meta latam
      </h2>
      <CalculateContext.Provider value={{ state, ACTIONS, dispatch }}>
        <div className="cotainer mx-auto flex xsm:flex-col sm:flex-col md:flex-row lg:flex-row lg:w-3/4 md:w-3/4 sm:w-screen xsm:w-full px-1 py-1 justify-between">
          <div className="xsm:mx-auto sm:mx-auto md:mx-auto xsm:mt-4 sm:mt-4">
            <LatamPercentageForm />
          </div>
          <div className="xsm:mx-auto sm:mx-auto xsm:pl-3 sm:pl-3 xsm:mb-4 sm:mb-4 flex flex-row sm:flex-col xsm:flex-col">
            <TableCalculateLatam />
          </div>
        </div>
      </CalculateContext.Provider>
    </React.Fragment>
  );
}
