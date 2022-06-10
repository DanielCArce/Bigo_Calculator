import { useContext } from "react";
import { Formik } from "formik";
import { CalculateContext } from "./../contexts/CalculateContext";

function FormComponent() {
  const { state, dispatch } = useContext(CalculateContext);
  return (
    <>
      <Formik
        initialValues={{
          initial_seeds: state.initial_seeds,
          exterior_percentage: state.exterior_percentage,
        }}
        onSubmit={async (values) => {
          let json = JSON.stringify({
            initial_seeds: Number(values.initial_seeds),
            exterior_percentage: Number(values.exterior_percentage),
          });
          console.log(json);
          dispatch({
            type: "SET_INITIAL_SEEDS",
            payload: values.initial_seeds,
          });
          dispatch({
            type: "SET_EXTERMAL_PERCENTAGE",
            payload: values.exterior_percentage,
          });
          fetch("http://localhost:3000/api/calculate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: json,
          })
            .then((res) => {
              res.json();
            })
            .then((data) => {
              dispatch({
                type: "SET_COMPENSATION_SEED",
                payload: data.compensation,
              });
              dispatch({
                type: "SET_FINAL_SEEDS",
                payload: data.final_seeds,
              });
              console.log({ state });
            });
          //End de onsubmit
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-14">
              <h2>Calculadora de Compensación</h2>
              <h3>% Exterior Bigo</h3>
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-4">Total Semillas:</label>
              <input
                className="text-black w-60 py-2 pl-2"
                id="totalSeeds"
                type="text"
                name="initial_seeds"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.initial_seeds}
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-4">Porncentage Exterior:</label>
              <input
                className="text-black w-60 py-2 pl-2"
                id="exteriorPerncentage"
                type="text"
                name="exterior_percentage"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.exterior_percentage}
              />
            </div>
            <div>
              <button
                className="px-4 py-2 bg-blue-500 text-white"
                type="submit"
              >
                Calcular compensación
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default FormComponent;
