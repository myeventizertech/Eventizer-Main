import React from "react";
import Main from "../components/vendorRegisterPage/Main";
import Head from "next/head";
import { checkPublicRoute } from "../utils/checkPublicRoute";

const VendorRegister = () => {
  return (
    <>
      <Head>
        <title>Eventizer | Vendor registration</title>
      </Head>

      <Main />
    </>
  );
};
export const getServerSideProps = checkPublicRoute((context) => {
  return { props: {} };
});

export default VendorRegister;
