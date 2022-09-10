import * as Yup from "yup";

export const ExchangeFormSchema = Yup.object({
  quantity: Yup
    .number()
    .typeError('Solo digitos númericos.')
    .min(1_00, "El monto minimo para el calculo es ${min}.")
    .max(10_000_000, "El monto maximo para el calculo es ${max}.")
    .required("Es necesario un valor entre 100 y 10 millones para el calculo.")
});
