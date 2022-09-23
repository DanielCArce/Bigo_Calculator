import React, { useContext, useRef } from "react";
import { ApoyoCruzadoContext } from "../contexts/ApoyoContext";
import { GiSeedling } from "react-icons/gi";

function TableCalculateLatam() {
  const { state } = useContext(ApoyoCruzadoContext);
  const handleShare = () => {
    const sharedData = {
      title:'Bigo Calculador - Balance Porcentaje Apoyo Cruzado',
      text:`Para Compensar ${state.seeds_on_livedata} con un porcentaje cruzado de ${state.apoyo_cruzado_livedata}% se necesita recibir ${state.seeds_for_balance} diamantes no emisor.`,
      url:'https://bigo-calculator.vercel.app/'
    }
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
            <td className="text-right">Porcentage Apoyo Cruzado en livedata:</td>
            <td className="text-right">
              {Intl.NumberFormat("en-US", { style: "percent" }).format(
                state.apoyo_cruzado_livedata / 100
              )}{" "}
              Equivale a{" "}
              {Intl.NumberFormat("en-US").format(
                state.seeds_on_livedata *
                  (state.apoyo_cruzado_livedata / 100)
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
                Compartir Cálculo
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </React.Fragment>
  );
}
export default TableCalculateLatam;