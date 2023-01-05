import { useFormik } from "formik";
import React, { useContext } from "react";
import { CrossSupportSchema } from "../schemas/CrossSupport.Schema";
import { CrossSupportContext } from "../contexts/CrossSupport.Context";

function CrossSupportForm() {
    const { state, ACTIONS, dispatch } = useContext(CrossSupportContext);
  const { values, handleSubmit, handleChange, handleBlur, errors } = useFormik({
    initialValues: {
      cross_percentage_user: state.cross_percentage,
      total_seeds_user: state.initial_seeds,
    },
    validationSchema: CrossSupportSchema,
    onSubmit: async (values) => {
      let bodyContent = JSON.stringify(
        {
          initial_seeds: values.total_seeds_user,
          cross_percentage: (values.cross_percentage_user / 100)
        });
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/CrossSupport`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: bodyContent,
        });
      const data = await request.json();
      dispatch({ type: ACTIONS.SET_SEEDS_LIVEDATA, payload: values.total_seeds_user })
      dispatch({ type: ACTIONS.SET_CROSS_LIVEDATA, payload: values.cross_percentage_user })
      dispatch({ type: ACTIONS.SET_SEEDS_BALANCE, payload: data.balance_seeds })
      dispatch({type:ACTIONS.SET_SEEDS_TOTAL, payload: data.balance_seeds + Number(values.total_seeds_user)})
    },
  })
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
        <label htmlFor="cross_percentage_user">
          Porcentaje Apoyo Cruzado en Livedata:
        </label>
        <input
          className="w-80 text-black pl-2 py-1 mt-2"
          onChange={handleChange}
          id="cross_percentage_user"
          onBlur={handleBlur}
          value={values.cross_percentage_user}
          name="cross_percentage_user"
          type="text"
          placeholder="Porcentaje Mayor o igual a 50%"
        />
        <span>{errors.cross_percentage_user}</span>
      </div>
      <div>
        <button className="py-2 px-3 bg-prymaryBtnBG text-white" type="submit">
          Estimar Cálculo
        </button>
      </div>
    </form>
  )
}

export default CrossSupportForm