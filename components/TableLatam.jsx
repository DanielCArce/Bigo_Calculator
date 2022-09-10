import React, { useContext, useRef } from "react";
import { CalculateContext } from "../contexts/CalculateContext";
import { GiSeedling } from "react-icons/gi";

function TableCalculateLatam() {
  const { state } = useContext(CalculateContext);
  const handleShare = () => {
    let sharedData = {
      title: "Bigo Calculador - Porcentaje Latam",
      url: "https://bigo-calculator.vercel.app",
      text: `Los diamantes para compensar es un total de ${Intl.NumberFormat(
        "en-US"
      ).format(state.seeds_for_balance)}`,
    };
    navigator.share(sharedData);
  };
  return (
    <React.Fragment>
      <table className="border-separate">
        <thead>
          <tr>
            <td
              colSpan="3"
              className="text-center font-semibold text-2xl border-b-2"
            >
              Resumen de Cálculo
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-right">Semillas en livedata:</td>
            <td className="text-right">
              {Intl.NumberFormat("en-US").format(state.seeds_on_livedata)}
            </td>
            <td>
              <GiSeedling />
            </td>
          </tr>
          <tr>
            <td className="text-right">Porcentage Exterior en livedata:</td>
            <td className="text-right">
              {Intl.NumberFormat("en-US", { style: "percent" }).format(
                state.percentage_exterior_livedata / 100
              )}{" "}
              Equivale a{" "}
              {Intl.NumberFormat("en-US").format(
                state.seeds_on_livedata *
                  (state.percentage_exterior_livedata / 100)
              )}
            </td>
            <td>
              <GiSeedling />
            </td>
          </tr>
          <tr>
            <td className="text-right">Semillas Para Balancear Porcentaje:</td>
            <td className="text-right">
              {Intl.NumberFormat("en-US").format(state.seeds_for_balance)}{" "}
            </td>
            <td>
              <GiSeedling />
            </td>
          </tr>
          <tr>
            <td className="text-right">Semillas Total:</td>
            <td className="text-right">
              {Intl.NumberFormat("en-US").format(state.seeds_total)}
            </td>
            <td>
              <GiSeedling />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-center ">
              <button
                className="py-2 px-3 bg-prymaryShareButton text-white"
                onClick={handleShare}
              >
                Compartir Calculo{" "}
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </React.Fragment>
  );
}
export default TableCalculateLatam;
