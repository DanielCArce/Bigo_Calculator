import { Formik } from "formik";
import React, { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";
import { ACTIONS } from "../reducer/ReducerFunction";
function FormComponent() {
  const { state, dispatch } = useContext(CalculateContext);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          seeds_livedata_user: state.seeds_on_livedata,
          percentage_exterior_user: state.percentage_exterior_livedata,
        }}
        onSubmit={(values) => {
          dispatch({
            type: ACTIONS.SET_SEEDS_LIVEDATA,
            payload: values.seeds_livedata_user,
          });
          dispatch({
            type: ACTIONS.SET_PERCENTAGE_LIVEDATA,
            payload: values.percentage_exterior_user,
          });
          const bodyContent = JSON.stringify({
            seeds_on_livedata: values.seeds_livedata_user,
            exterior_percentage_on_livedata:
              values.percentage_exterior_user / 100,
          });
          fetch("https://bigo-calculator.vercel.app/api/calculate/", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: bodyContent,
          })
            .then((rawResponse) => {
              return rawResponse.json();
            })
            .then((data) => {
              dispatch({
                type: ACTIONS.SET_SEEDS_BALANCE,
                payload: data.seeds_balance,
              });
              dispatch({
                type: ACTIONS.SET_SEEDS_TOTAL,
                payload: data.seeds_total,
              });
            });
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="px-4 py-4 mb-6">
            <div className="mb-4 flex flex-row">
              <label forhml="seeds_livedata_user">Semillas en Livedata:</label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="seeds_livedata_user"
                value={values.seeds_livedata_user}
                className="text-black pl-2 py-1 w-52 ml-3"
              />
            </div>
            <div className="mb-4 flex flex-row">
              <label forhml="percentage_exterior_user">
                Porcentaje Exterior:
              </label>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="percentage_exterior_user"
                value={values.percentage_exterior_user}
                className="text-black pl-2 py-1 w-52 ml-3"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-yellow-400 px-3 py-2 border-2 border-zinc-400"
              >
                Realizar Calculo
              </button>
            </div>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
}
export default FormComponent;
// {
//   seeds_on_livedata: 0,
//   percentage_exterior_livedata: 0.42,
//   seeds_for_balance: 0,
//   seeds_total: 0,
// }
