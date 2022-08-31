import { parse } from "dotenv";
import { useEffect, useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";
export default function useFetch(uri, rawData) {
  const { state, dispatch } = useContext(CalculateContext);
  const call_api = async () => {
    let parseBody = JSON.stringify({
      seeds_on_livedata: state.seeds_on_livedata,
      exterior_percentage_on_livedata: state.percentage_exterior_livedata / 100,
    });
    const data = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: parseBody,
    });
    let formatData = data.json();
    dispatch({
      type: ACTIONS.SET_SEEDS_BALANCE,
      payload: formatData.seeds_balance,
    });
    dispatch({
      type: ACTIONS.SET_SEEDS_TOTAL,
      payload: formatData.seeds_total,
    });
  };
  useEffect(() => {
    call_api();
  }, [call_api, state]);

  return { call_api };
}
