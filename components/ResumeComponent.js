import React, { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";
function ResumeComponent() {
  const { state } = useContext(CalculateContext);
  return (
    <div className="flex flex-row">
      <ul className="basic2/4">
        <li>
          Semillas del Live Data:{" "}
          {Intl.NumberFormat("es-ES", {
            style: "decimal",
          }).format(state.initial_seeds)}
        </li>
        <li>
          Porcentaje Semillas Exterior:{" "}
          {Intl.NumberFormat("es-ES", {
            style: "percent",
          }).format(state.exterior_percentage)}
        </li>
        <li>
          Semillas Para Compensar:{" "}
          {Intl.NumberFormat("es-ES", {
            style: "decimal",
          }).format(state.compensation_seed)}
        </li>
        <li>
          Semillas al Final:{" "}
          {Intl.NumberFormat("es-ES", {
            style: "decimal",
          }).format(state.final_seed)}
        </li>
      </ul>
    </div>
  );
}
export default ResumeComponent;
