import React, { useContext } from "react";
import { ExchangeContext } from "../contexts/ExchangeContext";
import { GiCutDiamond, GiSeedling } from "react-icons/gi";

export default function TableExchange() {
  const { state } = useContext(ExchangeContext);

  //   seedsToExchange: 0,
  //   diamondsToExchange: 0,
  //   seedsFromExchange: 0,
  //   diamondsFromExchange: 0,
  return (
    <div>
      <table className="border-separate">
        <thead>
          <tr>
            <td
              colSpan="3"
              className="text-center font-semibold text-2xl border-b-2"
            >
              Detalle de Conversión
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left">Semillas:</td>
            <td className="text-right">
              {Intl.NumberFormat("en-US").format(state.seeds_convert_exchange)}
            </td>
            <td>
              <GiSeedling />
            </td>
          </tr>
          <tr>
            <td className="text-left">Diamantes:</td>
            <td className="text-right">
              {Intl.NumberFormat("en-US").format(
                state.diamonds_convert_exchange
              )}
            </td>
            <td>
              <GiCutDiamond />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
