import React, { useContext } from "react";
import { CalculateContext } from "../contexts/CalculateContext";

function DisplayInfoComponent() {
  const { state } = useContext(CalculateContext);
  const handleShare = () => {
    let sharedData = {
      title: "Calculo Para Compensar Porcentage",
      url: "https://bigo-calculator.vercel.app",
      text: `Los diamantes para compensar es un total de ${Intl.NumberFormat(
        "en-US"
      ).format(state.seeds_for_balance)}`,
    };
    navigator.share(sharedData);
  };
  return (
    <div>
      <table className="border-separate">
        <thead>
          <tr>
            <td colSpan="2" className="text-center border-b-2">
              Resumen de Cálculo
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Semillas Livedata:</td>
            <td>
              {Intl.NumberFormat("en-US").format(state.seeds_on_livedata)}
            </td>
          </tr>
          <tr>
            <td>Porcentage Exterior Livedata:</td>
            <td>
              {Intl.NumberFormat("en-US", { style: "percent" }).format(
                state.percentage_exterior_livedata / 100
              )}
              {", equivale a ("}
              {Intl.NumberFormat("en-US").format(
                state.seeds_on_livedata *
                  (state.percentage_exterior_livedata / 100)
              )}
              {" ) "}
            </td>
          </tr>
          <tr>
            <td>Semillas Para compensar:</td>
            <td>
              {Intl.NumberFormat("en-US").format(state.seeds_for_balance)}{" "}
            </td>
          </tr>
          <tr>
            <td>Semillas al final:</td>
            <td>{Intl.NumberFormat("en-US").format(state.seeds_total)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="text-center border-b-2">
              <button onClick={handleShare}>Compartir Calculo </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DisplayInfoComponent;
