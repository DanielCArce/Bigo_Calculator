import React, { useContext } from 'react'
import { CrossSupportContext } from "../contexts/CrossSupport.Context";


function CrossSupportTable() {
    const { state } = useContext(CrossSupportContext);
    return (
      <div className="px-3 flex flex-col justify-items-center">
        <table className="w-80">
          <thead>
            <tr>
              <td className="text-center font-italic" colSpan="4">Resumen Cálculo</td>
            </tr>
            <tr className="border-b-4">
              <td className="font-bold text-center">Detalle</td>
              <td className="font-bold">Monto</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">Semillas Livedata:</td>
              <td>{Intl.NumberFormat('es',{}).format( state.initial_seeds)}</td>
            </tr>
            <tr>
              <td colSpan="2">Porcentaje Apoyo Cruzado:</td>
              <td>{Intl.NumberFormat('es',{style:'percent'}).format(state.cross_percentage/100)}</td>
            </tr>
            <tr>
              <td colSpan="2">Semillas Apoyo Cruzado:</td>
              <td>{Intl.NumberFormat('es',{}).format( Math.ceil(state.initial_seeds * (state.cross_percentage/100)))}</td>
            </tr>
            <tr>
              <td colSpan="2">Semillas Para Nivelar:</td>
              <td>{Intl.NumberFormat('es',{}).format( Math.ceil(state.balance_seeds))}</td>
            </tr>
            <tr>
              <td colSpan="2">Semillas Al Final Meta</td>
              <td>{Intl.NumberFormat('es',{}).format(Math.ceil(state.final_seeds)) }</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default CrossSupportTable