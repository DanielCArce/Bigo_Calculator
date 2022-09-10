import * as Yup from "yup";

export const PercentageFormSchema = Yup.object({
  seeds_livedata_user: Yup
    .number()
    .typeError('Solo digitos númericos.')
    .min(10_000, "El minimo es ${min} meta minima")
    .max(10_000_000, "Lo máximo es ${max}")
    .required("Es necesario para realizar el calculo."),
  percentage_exterior_user: Yup
    .number()
    .typeError("Solo digitos númericos.")
    .min(40, "El minimo es ${min}%, siendo meta latam si es inferior")
    .max(100, "Lo máximo es ${max}")
    .round('ceil')
    .required("Es necesario para realizar el balance"),
});

//10_000_000
