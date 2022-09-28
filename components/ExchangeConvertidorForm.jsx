import React, { useContext } from "react";
import { ExchangeContext } from "../contexts/ExchangeContext";
import { useFormik } from "formik";
import { ExchangeFormSchema } from "../schemas/ExchangeFormSchema";
function ExchangeConvertidorForm({ className, convertToDiamonds }) {
  const { state, ACTIONS, dispatch } = useContext(ExchangeContext);
  const { values, handleSubmit, handleChange, handleBlur, errors } = useFormik({
    initialValues: {
      quantity: 0,
    },
    validationSchema: ExchangeFormSchema,
    onSubmit: async (values) => {
      let parseBody = JSON.stringify({
        quantity: values.quantity,
        exchangeTo: convertToDiamonds ? "diamonds" : "seeds",
      });
      const request = await fetch(
        "https://bigo-calculator.vercel.app/api/exchangeSeeds",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: parseBody,
        }
      );
      const data = await request.json();
      dispatch({ type: ACTIONS.SET_DIAMONDS_EXCHANGE, payload: data.diamonds });
      dispatch({ type: ACTIONS.SET_SEEDS_EXCHANGE, payload: data.seeds });
    },
  });

  return (
    <React.Fragment>
      <form className="mx-auto mb-4" onSubmit={handleSubmit}>
        <div className=" mb-4">
          <h3 className="font-semibold text-xl">
            {convertToDiamonds
              ? "Semillas a Diamantes"
              : "Diamantes A Semillas"}
          </h3>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2" htmlFor="quantity">
            Cantidad a cambiar
          </label>
          <input
            className="w-52 text-black pl-2 py-1"
            type="text"
            name="quantity"
            id="quantity"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quantity}
          />
          <span>{errors.quantity}</span>
        </div>
        <div>
          <button
            className="py-2 px-3 bg-prymaryBtnBG text-white"
            type="submit"
          >
            Convertir
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
export default ExchangeConvertidorForm;
