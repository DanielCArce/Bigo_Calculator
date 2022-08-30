import * as Yup from "yup";

export const PercentageFormSchema = Yup.object({
  seeds_livedata_user: Yup.number()
    .min(10_000, "El minimo es ${min}")
    .max(10_000_000, "Lo máximo es ${max}")
    .required("Es necesario para realizar el calculo."),
  percentage_exterior_user: Yup.number()
    .min(40, "El minimo es ${min}")
    .max(100, "Lo máximo es ${max}")
    .required(),
});

//10_000_000
