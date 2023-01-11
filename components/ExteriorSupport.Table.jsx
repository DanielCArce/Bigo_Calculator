import React, { useContext, useRef } from 'react'
import { ExteriorSupportContext } from "../contexts/ExteriorSupport.Context";
import ShareButton from './ShareButton';

function ExteriorSupportTable() {
  const resultRef = useRef();
    const { state } = useContext(ExteriorSupportContext);
    return (
      <div className="px-3 flex flex-col justify-items-center">
        <table className="w-80" ref={resultRef}>
          <thead>
            <tr>
              <td className="text-center font-italic" colSpan="4">Resumen Cálculo</td>
            </tr>
            <tr className="border-b-4">
              <td className="font-bold text-center">Detalle</td>
              <td className="font-bold text-right">Monto</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">Semillas Livedata:</td>
              <td>{Intl.NumberFormat('es',{}).format( state.initial_seeds)}</td>
            </tr>
            <tr>
              <td colSpan="2">Porcentaje Exterior:</td>
              <td>{Intl.NumberFormat('es',{style:'percent'}).format(state.exterior_percentage/100)}</td>
            </tr>
            <tr>
              <td colSpan="2">Semillas Exterior:</td>
              <td>{Intl.NumberFormat('es',{minimumIntegerDigits:3}).format( Math.ceil(state.initial_seeds * (state.exterior_percentage/100)))}</td>
            </tr>
            <tr>
              <td colSpan="2">Semillas Para Nivelar:</td>
              <td>{Intl.NumberFormat('es',{}).format( Math.ceil(state.balance_seeds))}</td>
            </tr>
            <tr>
              <td colSpan="2">Semillas Al Final Meta</td>
              <td>{Intl.NumberFormat('es',{}).format(Math.ceil(state.final_seeds)) }</td>
            </tr>
            <tr colSpan="2">
              <td>
                <ShareButton data={{ type: 'Apoyo Exterior / Latam', balance_seeds: state.balance_seeds, percentage: `${state.cross_percentage}%` }} img={resultRef } />
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
  )
}

export default ExteriorSupportTable