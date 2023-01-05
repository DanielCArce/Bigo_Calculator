import React from 'react'
import { ExteriorSupportProvider } from "../contexts/ExteriorSupport.Context";
import HeaderPage from '../components/HeaderPage'
import Head from 'next/head'
import ExteriorSupportForm from '../components/ExteriorSupport.Form'
import ExteriorSupportTable from '../components/ExteriorSupport.Table';
function ApoyoExtranjero() {
  return (
    <div>
      <Head>
        <title>Bigo Tools - Apoyo Extranjero</title>
      </Head>
          <HeaderPage/>
      <ExteriorSupportProvider>
        <React.Fragment>

        <ExteriorSupportForm />
        <ExteriorSupportTable/>
        </React.Fragment>
          </ExteriorSupportProvider>
      </div>
  )
}

export default ApoyoExtranjero