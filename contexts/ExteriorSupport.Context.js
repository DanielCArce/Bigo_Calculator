'use client'
import { createContext, useReducer } from "react";
import {ACTIONS, Reducer}from '../reducer/ExteriorSupport.Reducer'
const ExteriorSupportContext = createContext({});

const initialState = {
  exterior_percentage: 40,
  initial_seeds: 10_000,
  final_seeds: 0,
  balance_seeds:0
};
const ExteriorSupportProvider = ({children}) => {
   const [state, dispatch] = useReducer(Reducer, initialState);
  return <ExteriorSupportContext.Provider value={{ state, ACTIONS, dispatch }}>
    {children}
  </ExteriorSupportContext.Provider>
}
export { ExteriorSupportContext, ExteriorSupportProvider };
