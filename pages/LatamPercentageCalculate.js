import React, { useReducer } from "react";
import { CalculateContext, initialState } from "../contexts/CalculateContext";
import { ACTIONS, CalculateReducer } from "../reducer/CalculateReducerFunction";
import LatamPercentageForm from "../components/LatamPercentageForm";
import TableCalculateLatam from "../components/TableLatam";
import HeaderPage from "./../components/HeaderPage";
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
      <h2 className="text-center text-3xl font-semibold mb-5 uppercase">
        Balance meta latam
      </h2>
      <CalculateContext.Provider value={{ state, ACTIONS, dispatch }}>
        <div className="container mx-auto w-1/2 flex flex-row  sm:flex-row xms:flex-col justify-between">
          <div className="mr-6 xsm:mr-0 xsm:mb-6">
            <LatamPercentageForm />
          </div>
          <div>
            <TableCalculateLatam />
          </div>
        </div>
      </CalculateContext.Provider>
    </React.Fragment>
  );
}
