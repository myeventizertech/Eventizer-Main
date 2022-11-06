import React, { useEffect } from "react";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { vendorProtectRoute } from "../../utils/vendorProtectRoute";

import { useUserOrVendor } from "../../authContext/AuthContext";
import { useRouter } from "next/router";
import Loader from "../../components/reUseComponents/Loader";
import PhotographyMain from "../../components/dashboard/Packages/photography/add-packages/Main"
import CinematographyMain from "../../components/dashboard/Packages/cinematography/add-packages/Main"
import DjMain from "../../components/dashboard/Packages/dj-musician/add-packages/Main"
import MehediMain from "../../components/dashboard/Packages/mehedi-artist/add-packages/Main"
import MakeupMain from "../../components/dashboard/Packages/makeup-artist/add-packages/Main"
import GiftMain from "../../components/dashboard/Packages/giftItem/Main";
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
      <GiftMain/>
       {/* {serviceCheck === "photography" && <PhotographyMain/>}
					{serviceCheck === "cinematography" && <CinematographyMain />}
					{serviceCheck === "dj-musician" && <DjMain />}
					{serviceCheck === "mehedi-artist" && <MehediMain />}
					{serviceCheck === "makeup-artist" && <MakeupMain />} */}
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
