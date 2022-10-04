import React, { useReducer } from "react";
import { ApoyoCruzadoContext, initialState } from "../contexts/ApoyoContext";
import { ACTIONS, ApoyoReducer } from "../reducer/ApoyoReducerFunction";
import ApoyoCruzadoForm from "../components/ApoyoCruzadoForm";
import TableApoyoCruzado from "../components/TableApoyoCruzado";
import HeaderPage from "../components/HeaderPage";
import FooterPage from '../components/FooterPage';
import Head from "next/head";
export default function ApoyoCruzadoCalculate() {
  const [state, dispatch] = useReducer(ApoyoReducer, initialState);
  return (
    <React.Fragment>
      <Head>
        <title>Bigo Calculador - Calculadora de Apoyo Cruzado</title>
      </Head>
      <HeaderPage />
      <h2 className="text-center sm:text-xl lg:text-2xl md:text-2xl font-semibold mb-5 uppercase">
        Balance apoyo cruzado o de emisor
      </h2>
      <ApoyoCruzadoContext.Provider value={{ state, ACTIONS, dispatch }}>
        <div className="cotainer mx-auto flex xsm:flex-col sm:flex-col md:flex-row lg:flex-row lg:w-3/4 md:w-3/4 sm:w-screen xsm:w-full px-1 py-1 justify-between">
          <div className="xsm:mx-auto sm:mx-auto md:mx-auto xsm:mt-4 sm:mt-4">
            <ApoyoCruzadoForm />
          </div>
          <div className="xsm:mx-auto sm:mx-auto xsm:pl-3 sm:pl-3 xsm:mb-4 sm:mb-4 flex flex-row sm:flex-col xsm:flex-col">
            <TableApoyoCruzado />
          </div>
        </div>
      </ApoyoCruzadoContext.Provider>
      <FooterPage />
    </React.Fragment>
  );
}
