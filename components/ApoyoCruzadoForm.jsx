import React, { useContext } from "react";
import { PercentageFormSchema } from "../schemas/ApoyoCruzadoSchema";
import { useFormik } from "formik";
import { ApoyoCruzadoContext } from "../contexts/ApoyoContext";
function ApoyoCruzadoForm() {
  const { state, ACTIONS, dispatch } = useContext(ApoyoCruzadoContext);
  const { values, handleSubmit, handleChange, handleBlur, errors } = useFormik({
    initialValues: {
      seeds_livedata_user: state.seeds_on_livedata,
      apoyo_cruzado_user: state.apoyo_cruzado_livedata,
    },
    validationSchema: PercentageFormSchema,
    onSubmit: async (values) => {
      let bodyContent = JSON.stringify({
        seeds_on_livedata: state.seeds_on_livedata,
        apoyo_cruzado_on_livedata: state.apoyo_cruzado_livedata / 100,
      });
      const request = await fetch(
        "https://bigo-calculator.vercel.app/api/apoyoCruzado/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: bodyContent,
        }
      );
      const data = await request.json();
      console.log({ data });
      dispatch({
        type: ACTIONS.SET_SEEDS_LIVEDATA,
        payload: values.seeds_livedata_user,
      });
      dispatch({
        type: ACTIONS.SET_APOYO_CRUZADO_LIVEDATA,
        payload: values.apoyo_cruzado_user,
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
          Porcentaje Apoyo Cruzado en Livedata:
        </label>
        <input
          className="w-55 text-black pl-2 py-1 mt-2"
          onChange={handleChange}
          id="apoyo_cruzado_user"
          onBlur={handleBlur}
          value={values.apoyo_cruzado_user}
          name="apoyo_cruzado_user"
          type="text"
          placeholder="Porcentaje Mayor o igual a 40%"
        />
        <span>{errors.apoyo_cruzado_user}</span>
      </div>
      <div>
        <button className="py-2 px-3 bg-prymaryBtnBG text-white" type="submit">
          Calcular
        </button>
      </div>
    </form>
  );
}
export default ApoyoCruzadoForm;
