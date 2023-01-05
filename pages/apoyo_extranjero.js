import React from "react";
import Head from "next/head";
import { ExteriorSupportProvider } from "../contexts/ExteriorSupport.Context";
import ExteriorSupportForm from "../components/ExteriorSupport.Form";
import ExteriorSupportTable from "../components/ExteriorSupport.Table";
function ApoyoExtranjero() {
  return (
    <div>
      <Head>
        <title>Bigo Tools - Apoyo Extranjero</title>
      </Head>
      <ExteriorSupportProvider>
        <React.Fragment>
          <ExteriorSupportForm />
          <ExteriorSupportTable />
        </React.Fragment>
      </ExteriorSupportProvider>
    </div>
  );
}

export default ApoyoExtranjero;
