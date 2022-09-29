import React, { useContext, useEffect } from "react";
import { PercentageFormSchema } from "../schemas/LatamFormSchema";
import { useFormik } from "formik";
import { CalculateContext } from "../contexts/CalculateContext";
function LatamPercentageForm() {
  const { state, ACTIONS, dispatch } = useContext(CalculateContext);
  const { values, handleSubmit, handleChange, handleBlur, errors } = useFormik({
    initialValues: {
      seeds_livedata_user: state.seeds_on_livedata,
      percentage_exterior_user: state.percentage_exterior_livedata,
    },
    validationSchema: PercentageFormSchema,
    onSubmit: async (values) => {
      let bodyContent = JSON.stringify({
        seeds_on_livedata: values.seeds_on_livedata_user,
        exterior_percentage_on_livedata: values.percentage_exterior_user / 100,
      });
      const request = await fetch(
        "https://bigo-calculator.vercel.app/api/calculate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: bodyContent,
        }
      );
      const data = await request.json();
      dispatch({
        type: ACTIONS.SET_SEEDS_LIVEDATA,
        payload: values.seeds_livedata_user,
      });
      dispatch({
        type: ACTIONS.SET_PERCENTAGE_LIVEDATA,
        payload: values.percentage_exterior_user,
      });
      dispatch({
        type: ACTIONS.SET_SEEDS_BALANCE,
        payload: data.seeds_balance,
      });
      dispatch({ type: ACTIONS.SET_SEEDS_TOTAL, payload: data.seeds_total });
    },
  });
  return (
    <form className="lg:mr-4 xsm:mr-0 xsm:mb-6" onSubmit={handleSubmit}>
      <div className="flex flex-row xsm:flex-col sm:flex-col mb-7">
        <label htmlFor="seeds_livedata_user">Semillas en Livedata:</label>
        <input
          className="w-55 text-black pl-2 py-1 mt-2"
          onChange={handleChange}
          id="seeds_livedata_user"
          onBlur={handleBlur}
          value={values.seeds_livedata_user}
          name="seeds_livedata_user"
          type="text"
          placeholder="Monto mayor o igual a la meta de 10k"
        />
        <span>{errors.seeds_livedata_user}</span>
      </div>
      <div className="flex flex-row xsm:flex-col sm:flex-col mb-7">
        <label htmlFor="percentage_exterior_user">
          Porcentaje Exterior en Livedata:
        </label>
        <input
          className="w-55 text-black pl-2 py-1 mt-2"
          onChange={handleChange}
          id="percentage_exterior_user"
          onBlur={handleBlur}
          value={values.percentage_exterior_user}
          name="percentage_exterior_user"
          type="text"
          placeholder="Porcentaje Mayor o igual a 40%"
        />
        <span>{errors.percentage_exterior_user}</span>
      </div>
      <div>
        <button className="py-2 px-3 bg-prymaryBtnBG text-white" type="submit">
          Calcular
        </button>
      </div>
    </form>
  );
}
export default LatamPercentageForm;
