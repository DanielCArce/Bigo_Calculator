import {CrossSupportProvider} from '../../contexts/CrossSupport.Context'
import CrossSupportForm from '../../components/CrossSupport.Form'
import CrossSupportTable from '../../components/CrossSupport.Table';
import React  from 'react';
export const metadata = {
  title:'Bigo Calculador - Apoyo Cruzado'
}
function ApoyoCruzado() {

  return (
    <div>
      <CrossSupportProvider>
        <React.Fragment>
          <h2 className="text-2xl text-center mb-3">Apoyo Cruzado (De Emisores)</h2>
          <CrossSupportForm />
          <div className="px-2 mb-5">
            <h3 className="font-bold text-xl text-center mb-2">Consideraciones a tomar en cuenta:</h3>
            <ul className="list-inside list-disc">
              <li>Revisar la fecha de actualización de los datos ingresados.</li>
              <li>La herramienta ayuda a estimar los diamantes (semillas) para llegar y nivelar al 50.00% el porcentaje de apoyo cruzado proveniente de emisores.</li>
              <li>Los datos suministrados son responsabilidad de quien los digita.</li>
              <li>No se aceptan porcentajes con decimales se recomienda redondear para arriba para no inducir a errores.</li>
            </ul>
          </div>
        <CrossSupportTable />
        </React.Fragment>
      </CrossSupportProvider>
      </div>
  )
}

export default ApoyoCruzado