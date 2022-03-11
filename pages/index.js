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

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const json = {
      total_seeds: totalSeeds,
      exterior_percentage: exteriorPercentage,
    };
    const jsparse = JSON.stringify(json);
    console.log(jsparse);
    fetch("https://bigo-calculator.vercel.app/api/calculate", {
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
      </Head>
      <div className="container">
        <h1>Calculador de compensación</h1>
        <p>Calculador de Porcentaje de Exterior para convertirlo a % LATAM</p>
        <form onSubmit={onHandleSubmit}>
          <div className="input-field">
            <label>Total de Semillas:</label>
            <input
              ref={totalSeedsRef}
              type="text"
              id="total_seeds"
              name="total_seeds"
              onChange={() => {
                setTotalSeeds(Number(totalSeedsRef.current.value));
              }}
            />
          </div>
          <div className="input-field">
            <label>Porcentaje Exterior:</label>
            <input
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
            <button>Generar C&atilde;lcular</button>
          </div>
        </form>
        <div>
          <h2>Resumen de Calculo</h2>
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
              Math.round(totalSeeds * exteriorPercentage)
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
        </div>
      </div>
    </>
  );
}
