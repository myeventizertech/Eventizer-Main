import React, { useEffect } from "react";
import Main from "../../components/dashboard/add-packages/Main";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { vendorProtectRoute } from "../../utils/vendorProtectRoute";

import { useUserOrVendor } from "../../authContext/AuthContext";
import { useRouter } from "next/router";
import Loader from "../../components/reUseComponents/Loader";

const AddPackages = () => {
  let router = useRouter();
  const { verifyUser } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let serviceCheck = attributes?.["custom:service"];

  useEffect(() => {
    try {
      if (serviceCheck === "rental") {
        router.push("/dashboard/profile");
      }
    } catch (error) {
      console.log(error);
    }
  }, [router, serviceCheck]);

  if (serviceCheck === "rental") {
    return (
      <div className="h-[75vh] m-all">
        <Loader
          center={true}
          colorDefault={false}
          loaderWidht="w-[44px] h-[44px]"
          bdrWidth="4px"
        />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Eventizer | Add Packages</title>
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
export default AddPackages;
