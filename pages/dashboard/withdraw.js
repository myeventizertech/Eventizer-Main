import React from "react";
import Main from "../../components/dashboard/withdraw/Main";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { vendorProtectRoute } from "../../utils/vendorProtectRoute";

const Withdraw = () => {
  return (
    <>
     <Head>
        <title>Eventizer | Withdraw</title>
      </Head>
      <Layout>
        <Main />
      </Layout>
    </>
  );
};
export const getServerSideProps = vendorProtectRoute((context) => {
  return {
    props: {},
  };
});
export default Withdraw;
