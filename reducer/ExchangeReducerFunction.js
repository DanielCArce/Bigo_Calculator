export const ACTIONS = {
  SET_SEEDS_EXCHANGE: "SET_SEEDS_TO_EXCHANGE",
  SET_DIAMONDS_EXCHANGE: "SET_DIAMONDS_TO_EXCHANGE",
};
export function ReducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.SET_SEEDS_EXCHANGE:
      return {
        ...state,
        seeds_convert_exchange: action.payload,
      };
    case ACTIONS.SET_DIAMONDS_EXCHANGE:
      return {
        ...state,
        diamonds_convert_exchange: action.payload,
      };
    default:
      return state;
  }
}

/* {
  seeds_convert_exchange: 1_000,
  diamonds_convert_exchange: 1_000,
} */
