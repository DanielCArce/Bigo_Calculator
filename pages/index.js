import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  // Inputs References
  const totalSeedsRef = useRef(null);
  const exteriorPercentageRef = useRef(null);
  // States
  const [totalSeeds, setTotalSeeds] = useState(0);
  const [exteriorPercentage, setExteriorPercentage] = useState(0.0);
  const [data, setData] = useState(null);
  const onHandleReset = (e) => {
    e.preventDefault();
    setData({ seed_for_balance: 0, final_total_seeds: 0 });
    setTotalSeeds(0);
    setExteriorPercentage(0.0);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();

    const json = {
      total_seeds: totalSeeds,
      exterior_percentage: exteriorPercentage,
    };
    const jsparse = JSON.stringify(json);
    console.log(jsparse);
    // fetch("https://bigo-calculator.vercel.app/api/calculate", {
    fetch("http://localhost:3000/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsparse,
    })
      .then((result) => result.json())
      .then((result) => setData(result));
    console.log({ data });
    totalSeedsRef.current.value = null;
    exteriorPercentageRef.current.value = null;
  };

  return (
    <>
      <Head>
        <title>Calculo de Porcentaje Latam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="grid gap-5 grid-cols-2 leading-10 my-10 mx-4">
        <div>
          <h2>Aclaraciones y descargo de responsabilidades</h2>
          <p>Los calculos tienen sus siguientes condiciones;</p>
          <ol>
            <li>
              Esto es una herramienta de estimación de acuerdo al live data, se
              libera responsabilidades si el live data no esta actualizado o
              ingresan datos erroneos.
            </li>
            <li>
              Esto es una herramienta de terceros, no pertenece a bigo live.
            </li>
            <li>No se realiza ningún almacenamiento de datos en esta web.</li>
            <li>
              Se recomienda pasarse un poco mas del monto para amortiguar
              cualquier decimal.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-center">Calculador de compensación</h2>
          <p>Calculador de Porcentaje de Exterior para convertirlo a % LATAM</p>
          <form onSubmit={onHandleSubmit}>
            <div className="my-8 grid grid-cols-2 gap-2">
              <label>Total de Semillas:</label>
              <input
                className="w-72 text-black pl-2"
                ref={totalSeedsRef}
                type="text"
                id="total_seeds"
                name="total_seeds"
                onChange={() => {
                  setTotalSeeds(Number(totalSeedsRef.current.value));
                }}
              />
            </div>
            <div className="my-8 grid grid-cols-2 gap-2">
              <label>Porcentaje Exterior:</label>
              <input
                className="w-72 text-black pl-2"
                ref={exteriorPercentageRef}
                type="text"
                id="percentage_exterior"
                name="percentage_exterior"
                onChange={() => {
                  setExteriorPercentage(
                    Number(exteriorPercentageRef.current.value) / 100
                  );
                }}
              />
            </div>
            <div>
              <button className="py-2 px-4 bg-emerald-600">
                Calcular Compesanci&otilde;n de semillas
              </button>
            </div>
          </form>
          <div className="mt-8">
            <h2 className="text-center">Resumen de Calculo</h2>
            <p>
              Semillas Iniciales:{" "}
              {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                totalSeeds
              )}
            </p>
            <p>
              Porcentaje Exterior:{" "}
              {new Intl.NumberFormat("en-US", { style: "percent" }).format(
                exteriorPercentage
              )}
              {", equivale a: "}
              {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                Math.ceil(totalSeeds * exteriorPercentage)
              )}
              {" Semillas."}
            </p>
            <p>
              Semillas Para Corregir:{" "}
              {data &&
                new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                  data.seed_for_balance
                )}
            </p>
            <p>
              Semillas Finales:{" "}
              {data &&
                new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                  data.final_total_seeds
                )}
            </p>
            <button className="bg-red-500 py-1 px-3" onClick={onHandleReset}>
              Reiniciar valores
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
