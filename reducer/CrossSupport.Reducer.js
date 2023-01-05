export const ACTIONS = {
  SET_SEEDS_LIVEDATA: "SET_SEEDS_LIVEDATA",
  SET_CROSS_LIVEDATA: "SET_APOYO_CRUZADO_LIVEDATA",
  SET_SEEDS_BALANCE: "SET_SEEDS_BALANCE",
  SET_SEEDS_TOTAL: "SET_SEEDS_TOTAL",
  SET_RESET_VALUES: "SET_RESET_VALUES",
};
export function Reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_SEEDS_LIVEDATA:
      return {
        ...state,
        initial_seeds: action.payload,
      };
    case ACTIONS.SET_CROSS_LIVEDATA:
      return {
        ...state,
        cross_percentage: action.payload,
      };
    case ACTIONS.SET_SEEDS_BALANCE:
      return {
        ...state,
        balance_seeds: action.payload,
      };
    case ACTIONS.SET_SEEDS_TOTAL:
      return {
        ...state,
        final_seeds: action.payload,
      };
    case ACTIONS.SET_RESET_VALUES:
      return {
        initial_seeds: 0,
        cross_percentage: 0.4,
        balance_seeds: 0,
        final_seeds: 0,
      };

    default:
      return state;
  }
}