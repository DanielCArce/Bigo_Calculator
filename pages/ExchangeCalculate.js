import React, { useState, useReducer } from "react";
import { ExchangeContext, initialState } from "../contexts/ExchangeContext";
import { ACTIONS, ReducerFunction } from "../reducer/ExchangeReducerFunction";
import ExchangeConvertidorForm from "../components/ExchangeConvertidorForm";
import TableExchange from "../components/TableExchange";
import RulesDisplay from "../components/RulesDisplay";
import HeaderPage from "../components/HeaderPage";
import Head from "next/head";
export default function ExchangeCalculate() {
  const [isDiamond, setIsDiamond] = useState(false);
  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  const handleConversor = () => {
    setIsDiamond(!isDiamond);
  };
  return (
    <React.Fragment>
      <Head>
        <title>Bigo Calculador - Intercambios de Diamantes y Semillas</title>
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
        Intercambio de Semillas y Diamantes{" "}
      </h2>
      <ExchangeContext.Provider value={{ state, ACTIONS, dispatch }}>
        <React.Fragment>
          <div className="container mx-auto w-1/2 flex flex-row  py-4 justify-center sm:flex-row xsm:flex-row">
            <div className="mr-4">
              <TableExchange />
            </div>
            <div className="flex flex-row sm:flex-col xsm:flex-col">
              <ExchangeConvertidorForm convertToDiamonds={false} />
              <ExchangeConvertidorForm convertToDiamonds={true} />
            </div>
          </div>
        </React.Fragment>
      </ExchangeContext.Provider>
    </React.Fragment>
  );
}
