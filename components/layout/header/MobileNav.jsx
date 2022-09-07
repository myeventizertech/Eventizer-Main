import React from "react";
import navbar from "../../../data/navbar";
import Link from "next/link";
import SignInIcon from "../../reUseComponents/icons/SignInIcon";
import Avatar from "../../reUseComponents/Avatar";
import HamburgerIcon from "../../reUseComponents/icons/HamburgerIcon";
import OutIcon from "../../reUseComponents/icons/OutIcon";
import ButtonLinkOrClick from "../../reUseComponents/ButtonLinkOrClick";
import mobileLogo from "../../../public/img/mobileLogo.png";
import { useRouter } from "next/router";
import Loader from "../../reUseComponents/Loader";

const MobileNav = ({
  isverified,
  isUser_vendor,
  userTitle,
  handleClickNav,
  handlecutNav,
  toggle,
  handleRegisterBtn,
  profileImage,
  authLoader,
  service,
}) => {
  const router = useRouter();

  return (
    <>
      <div className=" flex-center gap-2 sm:hidden mobileNavAuthentications">
        <div>
          {!authLoader && !isverified && (
            <Link href="/sign-in">
              <a className="flex-center gap-1 font-medium color1 font-14 whitespace-nowrap btn-hover">
                <SignInIcon />
              </a>
            </Link>
          )}
          {/* avatar of userInfo & vendorInfo */}

          <div className=" flex-center gap-2 ">
            {authLoader ? (
              <Loader colorDefault={false} />
            ) : (
              <>
                {isUser_vendor === "user" && isverified && (
                  <Avatar
                    img={profileImage}
                    userTitle={userTitle}
                    alt="user"
                    isUser_vendor={isUser_vendor}
                  />
                )}

                {isUser_vendor === "vendor" && isverified && (
                  <Avatar
                    img={profileImage}
                    userTitle={userTitle}
                    alt="vendor"
                    isUser_vendor={isUser_vendor}
                  />
                )}
              </>
            )}
          </div>
        </div>
        <div>
          <button onClick={handleClickNav} className="hamburger-icon mt-2">
            <HamburgerIcon />
          </button>
        </div>

        <div
          className={`menubar z-50 w-full fixed top-0 left-0 bottom-0 h-screen ease-out ${
            !toggle && "pointer-events-none"
          }`}
        >
          <div
            className={`bg-[#000] transition-opacity duration-500 fixed z-[-1] ${
              toggle ? "w-full h-full opacity-30" : "w-0 h-0 opacity-0"
            }`}
            onClick={handlecutNav}
          ></div>
          <div
            className={`menu-body  bg-[#191b1c] fixed w-80 h-full transition-transform duration-300 top-0 right-0 bottom-0 ${
              toggle ? "translate-x-0" : "translate-x-[200%]"
            } `}
          >
            <div className="flex py-3 px-3 justify-between items-center border-[#131313] border-b">
              <div className="logo w-40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={"/img/mobileLogo.png"} alt="Eventizer Logo" />
              </div>
              <button className="cross " onClick={handlecutNav}>
                <OutIcon />
              </button>
            </div>

            <div className="menu-items capitalize ">
              <div className="mt-4 mb-8 px-5">
                {!isverified && (
                  <ButtonLinkOrClick
                    isLink={false}
                    text="Register"
                    handleBtn={handleRegisterBtn}
                  />
                )}

                {isUser_vendor === "vendor" && isverified && (
                  <>
                    {service !== "rental" && (
                      <ButtonLinkOrClick
                        goto="/dashboard/add-packages"
                        text="Add package"
                      />
                    )}
                  </>
                )}
              </div>

              <nav>
                <ul>
                  {navbar.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={`menuitem ${
                          router.pathname == item.path && "color2"
                        }`}
                      >
                        <Link href={item.path}>
                          <a
                            className="flex-center gap-2"
                            onClick={handlecutNav}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.img}
                              width={17}
                              height={17}
                              alt="icon"
                            />
                            <span>{item.name}</span>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
