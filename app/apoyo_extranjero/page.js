import React from "react";
import Head from "next/head";
import { ExteriorSupportProvider } from "../../contexts/ExteriorSupport.Context";
import ExteriorSupportForm from "../../components/ExteriorSupport.Form";
import ExteriorSupportTable from "../../components/ExteriorSupport.Table";
export const metadata = {
  title:'Bigo Calculador - Apoyo Cruzado'
}
function ApoyoExtranjero() {
  return (
    <React.Fragment>
      <ExteriorSupportProvider>
        <React.Fragment>
          <h2 className="text-2xl text-center mb-3">Apoyo Extranjero</h2>
          <ExteriorSupportForm />
          <div className="px-2 mb-5">
            <h3 className="font-bold text-xl text-center mb-2">Consideraciones a tomar en cuenta:</h3>
            <ul className="list-inside list-disc">
              <li>Revisar la fecha de actualización de los datos ingresados.</li>
              <li>La herramienta ayuda a estimar los diamantes (semillas) para llegar y nivelar al 40.00% el porcentaje de apoyo extranjero.</li>
              <li>Los datos suministrados son responsabilidad de quien los digita.</li>
              <li>No se aceptan porcentajes con decimales se recomienda redondear para arriba para no inducir a errores.</li>
            </ul>
          </div>
          <ExteriorSupportTable />
        </React.Fragment>
      </ExteriorSupportProvider>
    </React.Fragment>
  );
}

export default ApoyoExtranjero;
