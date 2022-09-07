import React, { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";
import { useUserOrVendor } from "../../authContext/AuthContext";

const Layout = ({ children }) => {
  const router = useRouter();
  const { verifyUser, isVendorDetailConfrimed } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let [verifyModel, setVerifyModel] = useState(false);
  function checkRoute() {
    return (
      router.pathname !== "/vendor-register" &&
      router.pathname !== "/dashboard/add-packages" &&
      router.pathname !== "/dashboard/my-booking" &&
      router.pathname !== "/dashboard/order-list" &&
      router.pathname !== "/dashboard/my-package" &&
      router.pathname !== "/dashboard/profile" &&
      router.pathname !== "/dashboard/my-plans" &&
      router.pathname !== "/dashboard/withdraw" 

    );
  }

  return (
    <>
      {attributes?.["custom:userOrvendor"] === "vendor" &&
        !isVendorDetailConfrimed &&
        router.pathname !== "/dashboard/profile" &&
        router.pathname !== "/vendor-register" &&
        router.pathname !== "/sign-in" &&
        !verifyModel && (
          <div className="inset-0 fixed bg-gray-800 bg-opacity-70 z-[999] flex-center items-center">
            <div className="container">
              <div className="bgcolor2 text-white border border-gray-500 p-3 font-normal font-16 shadow max-w-[20rem] mx-auto">
                Hey there! please submit your vendor-details
                <div className="flex gap-3 justify-end mt-4">
                  <div>
                    <button
                      className="btn-hover"
                      onClick={() => setVerifyModel(true)}
                    >
                      Later
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn-hover"
                      onClick={() => {
                        router.push("/dashboard/profile");
                        setVerifyModel(true);
                      }}
                    >
                      Go
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {checkRoute() && <Header />}
      {children}
      {checkRoute() && <Footer />}
    </>
  );
};

export default Layout;
