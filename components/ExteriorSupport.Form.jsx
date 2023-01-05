import { useFormik } from "formik";
import React, { useContext } from "react";
import { ExteriorSupportSchema } from "../schemas/ExteriorSupport.Schema";
import { ExteriorSupportContext } from "../contexts/ExteriorSupport.Context";
function ExteriorSupportForm() {
  //     {
  //   exterior_percentage: 0,
  //   initial_seeds: 0,
  //   final_seeds: 0,
  //   balance_seeds:0
  // }
  const { state, ACTIONS, dispatch } = useContext(ExteriorSupportContext);
  const { values, handleSubmit, handleChange, handleBlur, errors } = useFormik({
    initialValues: {
      exterior_percantage_user: state.exterior_percentage,
      total_seeds_user: state.initial_seeds,
    },
    validationSchema: ExteriorSupportSchema,
    onSubmit: async (values) => {
      console.log(
        `Porcentaje Exteior es: ${values.exterior_percantage_user} and Semillas Iniciales es: ${values.total_seeds_user}`
      );
      let bodyContent = JSON.stringify(
        {
          initial_seeds: values.total_seeds_user,
          exterior_percentage: (values.exterior_percantage_user / 100)
        });
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/ExteriorSupport`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: bodyContent,
        });
      const data = await request.json();
      dispatch({ type: ACTIONS.SET_SEEDS_LIVEDATA, payload: values.total_seeds_user })
      dispatch({ type: ACTIONS.SET_PERCENTAGE_LIVEDATA, payload: values.exterior_percantage_user })
      dispatch({ type: ACTIONS.SET_SEEDS_BALANCE, payload: data.balance_seeds })
      dispatch({type:ACTIONS.SET_SEEDS_TOTAL, payload: data.balance_seeds + Number(values.total_seeds_user)})
    },
  });
  return (
    <form
      className="px-3 flex flex-col justify-items-center mb-5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row xsm:flex-col sm:flex-col mb-7">
        <label htmlFor="total_seeds_user">Semillas en Livedata:</label>
        <input
          className="w-80 text-black pl-2 py-1 mt-2"
          onChange={handleChange}
          id="total_seeds_user"
          onBlur={handleBlur}
          value={values.total_seeds_user}
          name="total_seeds_user"
          type="text"
          placeholder="Monto mayor o igual a la meta de 10k"
        />
        <span>{errors.total_seeds_user}</span>
      </div>
      <div className="flex flex-row xsm:flex-col sm:flex-col mb-7">
        <label htmlFor="exterior_percantage_user">
          Porcentaje Apoyo Cruzado en Livedata:
        </label>
        <input
          className="w-80 text-black pl-2 py-1 mt-2"
          onChange={handleChange}
          id="exterior_percantage_user"
          onBlur={handleBlur}
          value={values.exterior_percantage_user}
          name="exterior_percantage_user"
          type="text"
          placeholder="Porcentaje Mayor o igual a 40%"
        />
        <span>{errors.exterior_percantage_user}</span>
      </div>
      <div>
        <button className="py-2 px-3 bg-prymaryBtnBG text-white" type="submit">
          Estimar Cálculo
        </button>
      </div>
    </form>
  );
}

export default ExteriorSupportForm;
