'use client'
import { createContext, useReducer } from "react";
import {ACTIONS, Reducer} from '../reducer/CrossSupport.Reducer'
const CrossSupportContext = createContext({});

const initialState = {
  initial_seeds: 0,
  cross_percentage: 50,
  balance_seeds: 0,
  final_seeds: 0,
};
const CrossSupportProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <CrossSupportContext.Provider value={{state, ACTIONS, dispatch}}>
    {children}
  </CrossSupportContext.Provider>
}
export { CrossSupportContext, CrossSupportProvider };
