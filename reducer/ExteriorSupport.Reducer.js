export const ACTIONS = {
  SET_SEEDS_LIVEDATA: "SET_SEEDS_LIVEDATA",
  SET_PERCENTAGE_LIVEDATA: "SET_PERCENTAGE_LIVEDATA",
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
    case ACTIONS.SET_PERCENTAGE_LIVEDATA:
      return {
        ...state,
        exterior_percentage: action.payload,
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
  exterior_percentage: 0,
  initial_seeds: 0,
  final_seeds: 0,
  balance_seeds:0
};

    default:
      return state;
  }
}

// {
//   seeds_on_livedata: 0,
//   percentage_exterior_livedata: 0.42,
//   seeds_for_balance: 0,
//   seeds_total: 0,
// }
