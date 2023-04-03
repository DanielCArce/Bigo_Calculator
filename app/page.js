import React from 'react'

export const metadata ={
  title:'Bigo Calculador'
}
function Index() {
  return (
    <React.Fragment>
      <section>
        <div className="px-2 md:w-3/4 md:flex md:flex-col md:place-items-center md:justify-items-center">
          <h2 className="font-bold text-2xl mb-4">Condiciones de uso:</h2>
          <ul className="list-decimal list-inside">
            <li>Todo cálculo se realiza bajo una estimación matematica que permite reducir el margen
              de error, pero aun asi se recomienda agregar 125 semillas para compensar el margen.
            </li>
            <li>
              Ninguna de las herramientas suministradas aqui esta ligada con la empresa Bigo Live o sus filiales, es una herramienta independiente que se creo para colaborar con los emisores e emisoras de la región Latinoamerica para obtener una mejor meta.
            </li>
            <li>Ningún cálculo es almacenado en el servidor y son realizados al momento de ser solicitados.</li>
            <li>Bigo Tools es una herramienta de libre uso y no se cobra ningún tipo de comisión para su uso.</li>
            <li>La herramienta esta pensada para ser usada en celulares con uso de internet, sin necesitar de ningún tipo de instalador.</li>
          </ul>
        </div>
      </section>
      </React.Fragment>
  )
}

export default Index