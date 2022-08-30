import { useFormik } from "formik";
import { PercentageFormSchema } from "../schemas/LatamFormSchema";
import React, { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";
import { ACTIONS } from "../reducer/ReducerFunction";
function FormComponent() {
  const { state, dispatch } = useContext(CalculateContext);
  const handleReset = () => {
    dispatch({ type: ACTIONS.SET_RESET_VALUES });
  };
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      seeds_livedata_user: state.seeds_on_livedata,
      percentage_exterior_user: state.percentage_exterior_livedata,
    },
    validationSchema: PercentageFormSchema,
    onSubmit: (values) => {
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
        exterior_percentage_on_livedata: values.percentage_exterior_user / 100,
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
    },
  });
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="px-4 py-4 mb-6">
        <div className="mb-4 flex flex-col">
          <label forhml="seeds_livedata_user">Semillas en Livedata:</label>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            name="seeds_livedata_user"
            value={values.seeds_livedata_user}
            className="text-black pl-2 py-1 w-52 mt-3 mb-2"
          />
          <p className="text-red-600">{errors?.seeds_livedata_user}</p>
        </div>
        <div className="mb-4 flex flex-col">
          <label forhml="percentage_exterior_user">Porcentaje Exterior:</label>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            name="percentage_exterior_user"
            value={values.percentage_exterior_user}
            className="text-black pl-2 py-1 w-52 mt-3 mb-2"
          />
          <p className="text-red-600">{errors?.percentage_exterior_user}</p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 px-3 py-2 hover:border-2 border-zinc-400"
          >
            Calcula
          </button>
        </div>
      </form>
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
