import React from "react";
import { useUserOrVendor } from "../../../authContext/AuthContext";
import MyPackageList from "./MyPackageList";

const Main = () => {
  const { verifyUser } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let serviceCheck = attributes?.["custom:service"];
  return (
    <>
      <MyPackageList serviceCheck={serviceCheck} />
    </>
  );
};

export default Main;
