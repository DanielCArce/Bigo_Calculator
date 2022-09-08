import * as Yup from "yup";

export const ExchangeFormSchema = Yup.object({
  quantity: Yup.number("No esta permitido signos o letras,solo numeros.")
    .min(1_00, "El minimo es ${min}.")
    .max(10_000_000, "Lo máximo es ${max}")
    .required("Es necesario para realizar el calculo."),
});
