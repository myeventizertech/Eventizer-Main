import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Auth } from "aws-amplify";
import {
  dashboardlinkUser,
  dashboardlinkVendor,
} from "../../data/dashbordLinks";
import { useUserOrVendor } from "../../authContext/AuthContext";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import ButtonLinkOrClick from "../reUseComponents/ButtonLinkOrClick";
import HamburgerDashboard from "../reUseComponents/icons/HamburgerDashboard";
import Loader from "../reUseComponents/Loader";
const LayoutSSRfalse = ({ children }) => {
  const { setAuthLoader, setVeifyUser, verifyUser, dispatch } =
    useUserOrVendor();
  const { isUser_vendor } = verifyUser;
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  let visitProfile = storage?.vendor?.status
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickNav = () => {
    setToggle(!toggle);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="relative">
        <div
          className={`block lg:hidden bg-[#000] transition-opacity duration-500 fixed z-[1] ${
            toggle ? "w-full h-full opacity-30" : "w-0 h-0 opacity-0"
          }`}
          onClick={handleClickNav}
        ></div>
        <div
          className={`fixed w-[250px] bg-[#191b1c] bottom-0 top-0 text-white transition-transform duration-300 z-[2] min-h-[21rem] ${
            toggle ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
          }`}
        >
          <button
            onClick={handleClickNav}
            className="absolute -right-[2rem] top-[1.5rem] bgcolor1 p-2 block lg:hidden"
          >
            <HamburgerDashboard />
          </button>

          <div className=" py-4 border-[#131313] border-b pl-8 pt-7 w-48">
            <Link href="/">
              <a>
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={"/img/mobileLogo.png"} alt="Eventizer Logo" />
              </a>
            </Link>
          </div>

          <div>
            <ul className="py-3">
              {isUser_vendor === "vendor" && (
                <>
{
  visitProfile ==="Accepted" ?                   <li className="pl-3">
                    <Link
                      href={`/products/${attributes?.["custom:service"]}/${attributes?.sub}`}
                    >
                      <a onClick={handleClickNav}>
                        <span className={`dashBoardPageLink`}>
                          <span>Visit Profile</span>
                        </span>
                      </a>
                    </Link>
                  </li>: <li></li>
}
                </>
              )}

              {isUser_vendor === "user" && (
                <li className="pl-3">
                  <Link href={`/products`}>
                    <a onClick={handleClickNav}>
                      <span className={`dashBoardPageLink`}>
                        <span>Product & Services</span>
                      </span>
                    </a>
                  </Link>
                </li>
              )}

              {isUser_vendor === "user" &&
                dashboardlinkUser.map((item, i) => {
                  return (
                    <li key={i} className="pl-3">
                      <Link href={item.path}>
                        <a onClick={handleClickNav}>
                          <span
                            className={`dashBoardPageLink ${
                              router.pathname == item.path ? "bgcolor2" : ""
                            }`}
                          >
                            <span>{item.name}</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              {isUser_vendor === "vendor" &&
                dashboardlinkVendor.map((item, i) => {
                  return (
                    <li key={i} className="pl-3">
                      <Link href={item.path}>
                        <a onClick={handleClickNav}>
                          <span
                            className={`dashBoardPageLink ${
                              router.pathname == item.path ? "bgcolor2" : ""
                            }`}
                          >
                            <span>{item.name}</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          <>
            <button
              onClick={async () => {
                setAuthLoader(true);
                try {
                  router.push("/sign-in");
                  await Auth.signOut();
                  dispatch({
                    type: "LOGOUT",
                  });
                  toast.success("Log Out successful", {
                    duration: 2000,
                  });
                  setVeifyUser({});
                  setAuthLoader(false);
                } catch (err) {
                  toast.error(err.message, {
                    duration: 3000,
                  });
                }
              }}
              className="hover:opacity-75 py-2 border-t pl-8 font-14 font-
              light border-[#131313] w-full text-left"
            >
              Logout
            </button>
          </>
        </div>

        <div className="lg:ml-[250px] bg-[#F2F3F4] min-h-screen relative">
          {!verifyUser?.isverified ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <Loader
                center={true}
                colorDefault={false}
                loaderWidht="w-[44px] h-[44px]"
                bdrWidth="4px"
              />
            </div>
          ) : (
            <>
              {isUser_vendor === "vendor" && (
                <>
                  <div className="p-6 lg:p-10 pt-6 lg:pt-6 pl-12 lg:pl-10 bg-white lg:bg-transparent pb-6 lg:pb-0">
                    <div className="lg:border-[#C4C4C4] lg:border-b flex items-center justify-between lg:pb-6 px-0 lg:px-5">
                      <div>
                        <h1 className="color3 capitalize  font-normal font-16 lg:font-18">
                          {attributes?.["custom:service"] || ""}
                        </h1>
                      </div>

                      {attributes?.["custom:service"] !== "rental" && (
                        <div>
                          <ButtonLinkOrClick
                            text="Add Package"
                            font="font-14 font-light"
                            goto="/dashboard/add-packages"
                            radius="rounded-[5px]"
                            py="py-[5px]"
                            px="px-[15px]"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              <div className="p-9 lg:p-10">{children}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LayoutSSRfalse;
