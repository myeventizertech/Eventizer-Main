import React from "react";
import Head from "next/head";

import CorporateForm from "../../components/corporate-event/CorporateForm";
import { userProtectRoute } from "../../utils/userProtectRoute";

const CorporateEventForm = () => {
  return (
    <>
      <Head>
        <title>Eventizer | Corporate Event Form</title>
      </Head>
      <main>
        <CorporateForm />
      </main>
    </>
  );
};
export const getServerSideProps = userProtectRoute((context) => {
  return {
    props: {},
  };
});
export default CorporateEventForm;
