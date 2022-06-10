import Head from "next/head";
import FormComponent from "./../components/FormComponent";
import ResumeComponent from "./../components/ResumeComponent";
import { useReducer } from "react";
import { CalculateContext, initialState } from "../contexts/CalculateContext";
import ReducerFunction from "../reducer/ReducerFunction";
export default function Home() {
  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  return (
    <>
      <Head>
        <title>Calculo de Porcentaje Latam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CalculateContext.Provider value={{ state, dispatch }}>
        <div className="flex flex-row gap-7 px-10 py-4 justify-center">
          <FormComponent />
          <ResumeComponent />
        </div>
      </CalculateContext.Provider>
    </>
  );
}
