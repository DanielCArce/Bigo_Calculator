export const ACTIONS = {
  SET_SEEDS_LIVEDATA: "SET_SEEDS_LIVEDATA",
  SET_PERCENTAGE_LIVEDATA: "SET_PERCENTAGE_LIVEDATA",
  SET_SEEDS_BALANCE: "SET_SEEDS_BALANCE",
  SET_SEEDS_TOTAL: "SET_SEEDS_TOTAL",
  SET_RESET_VALUES: "SET_RESET_VALUES",
};
export default function ReducerFunction(state, action) {
  switch (action.type) {
    case ACTIONS.SET_SEEDS_LIVEDATA:
      return {
        ...state,
        seeds_on_livedata: action.payload,
      };
    case ACTIONS.SET_PERCENTAGE_LIVEDATA:
      return {
        ...state,
        percentage_exterior_livedata: action.payload,
      };
    case ACTIONS.SET_SEEDS_BALANCE:
      return {
        ...state,
        seeds_for_balance: action.payload,
      };
    case ACTIONS.SET_SEEDS_TOTAL:
      return {
        ...state,
        seeds_total: action.payload,
      };
    case ACTIONS.SET_RESET_VALUES:
      return {
        seeds_on_livedata: 0,
        percentage_exterior_livedata: 0.4,
        seeds_for_balance: 0,
        seeds_total: 0,
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
