import * as Yup from "yup";

export const CrossSupportSchema = Yup.object({
  total_seeds_user: Yup
    .number()
    .typeError('Solo digitos númericos.')
    .min(10_000, "El minimo es ${min} meta minima")
    .max(10_000_000, "Lo máximo es ${max}")
    .required("Es necesario para realizar el cálculo."),
  cross_percentage_user: Yup
    .number()
    .typeError("Solo digitos númericos.")
    .min(50, "El minimo es ${min}%, siendocorrecto sisi es inferior")
    .max(100, "Lo máximo es ${max}")
    .round('ceil')
    .required("Es necesario para realizar el balance"),
});

//10_000_000
