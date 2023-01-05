import { createContext } from "react";
const ApoyoCruzadoContext = createContext({});

const initialState = {
  seeds_on_livedata: 10_000,
  apoyo_cruzado_livedata: 50,
  seeds_for_balance: 0,
  seeds_total: 0,
};

export { ApoyoCruzadoContext, initialState };
