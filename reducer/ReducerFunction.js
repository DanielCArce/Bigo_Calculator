export const ACTION = {};
export default function ReducerFunction(state, action) {
  switch (action.type) {
    case "SET_INITIAL_SEEDS":
      return {
        ...state,
        initial_seeds: action.payload,
      };
    case "SET_EXTERMAL_PERCENTAGE":
      return {
        ...state,
        exterior_percentage: action.payload,
      };
    case "SET_COMPENSATION_SEED":
      return {
        ...state,
        compensation_seed: action.payload,
      };
    case "SET_FINAL_SEED":
      return {
        ...state,
        final_seed: action.payload,
      };
    default:
      return state;
  }
}
