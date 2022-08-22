import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from "../../../utils/useMediaQuery";
import { useRouter } from "next/router";
import RegPop from "../../reUseComponents/RegPop";
import { CSSTransition } from "react-transition-group";
import Logo from "../../reUseComponents/Logo";
import MobileNav from "./MobileNav";
import DekstopNav, { DekstopNavItems } from "./DekstopNav";
import BottomNavMbl from "../../reUseComponents/BottomNavMbl";
import { useUserOrVendor } from "../../../authContext/AuthContext";
const Header = () => {
  const { verifyUser, authLoader, profileImage } = useUserOrVendor();
  const { isverified, isUser_vendor, userTitle } = verifyUser;
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let service = attributes?.["custom:service"] || "";

  const router = useRouter();
  const isMobile = useMediaQuery("(min-width: 640px)");
  const nodeRef = useRef(null);
  const [stickyClass, setStickyClass] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showRegPop, setShowRegPop] = useState(false);
  const handleClickNav = () => {
    setToggle(true);
    setIsOpen(true);
  };
  const handlecutNav = () => {
    setToggle(false);
    setIsOpen(false);
  };

  const handleRegisterBtn = () => {
    setToggle(false);
    setShowRegPop(true);
    setIsOpen(true);
  };
  let handlecloseReg = () => {
    setShowRegPop(false);
    setIsOpen(false);
  };
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);
  useEffect(() => {
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 0 ? setStickyClass(true) : setStickyClass(false);
      }
    };

    isMobile && window.addEventListener("scroll", stickNavbar);

    return () => {
      isMobile && window.removeEventListener("scroll", stickNavbar);
    };
  }, [isMobile]);
  return (
    <>
   
      <header
        className={`fixy absolute  top-0 left-0 right-0 mobile-nav z-50  ${
          stickyClass && "navbar-sticky"
        }  ${router.pathname === "/" ? "null" : "navunHomeshadow bg-white"}`}
      >
        <div className="container relative">
          <div className="flex-center gap-3 justify-between py-3 pb-2 ">
            <div className="logo_navbar flex-center gap-3">
              <div className={`${stickyClass && "logo-sticky"}`}>
                <Logo />
              </div>
              {/* dekstop nav */}
              {isMobile && <DekstopNavItems />}
            </div>
            {isMobile && (
              <DekstopNav
                isverified={isverified}
                handleRegisterBtn={handleRegisterBtn}
                isUser_vendor={isUser_vendor}
                userTitle={userTitle}
                profileImage={profileImage}
                authLoader={authLoader}
                service={service}
              />
            )}

            {/* mobile nav */}
            {!isMobile && (
              <MobileNav
                isverified={isverified}
                isUser_vendor={isUser_vendor}
                userTitle={userTitle}
                profileImage={profileImage}
                authLoader={authLoader}
                handleClickNav={handleClickNav}
                handlecutNav={handlecutNav}
                toggle={toggle}
                handleRegisterBtn={handleRegisterBtn}
                service={service}
              />
            )}
          </div>
        </div>

        <CSSTransition
          in={showRegPop}
          timeout={150}
          classNames="fade"
          unmountOnExit
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
            <RegPop handlecloseReg={handlecloseReg} />
          </div>
        </CSSTransition>
      </header>

      {/* {!isMobile && <BottomNavMbl />} */}
    </>
  );
};

export default React.memo(Header);
