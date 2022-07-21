import React, { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";

function DisplayInfoComponent() {
  const { state } = useContext(CalculateContext);
  return (
    <div>
      <p>
        Semillas Livedata:{" "}
        {Intl.NumberFormat("en-US").format(state.seeds_on_livedata)}
      </p>
      <p>
        Porcentage Exterior Livedata:{" "}
        {Intl.NumberFormat("en-US", { style: "percent" }).format(
          state.percentage_exterior_livedata / 100
        )}
        {", equivale a ("}
        {Intl.NumberFormat("en-US").format(
          state.seeds_on_livedata * (state.percentage_exterior_livedata / 100)
        )}
        {" ) "}
        Semillas.
      </p>
      <p>
        Semillas Para compensar:{" "}
        {Intl.NumberFormat("en-US").format(state.seeds_for_balance)}
      </p>
      <p>
        Semillas al final:{" "}
        {Intl.NumberFormat("en-US").format(state.seeds_total)}
      </p>
    </div>
  );
}

export default DisplayInfoComponent;
