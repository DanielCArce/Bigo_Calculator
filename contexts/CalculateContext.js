import { createContext } from "react";
const CalculateContext = createContext({});

const initialState = {
  seeds_on_livedata: 10_000,
  percentage_exterior_livedata: 40,
  seeds_for_balance: 0,
  seeds_total: 0,
};

export { CalculateContext, initialState };
