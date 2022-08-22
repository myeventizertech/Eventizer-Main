import React from "react";
import navbar from "../../../data/navbar";
import Link from "next/link";
import SignInIcon from "../../reUseComponents/icons/SignInIcon";
import Avatar from "../../reUseComponents/Avatar";
import ButtonLinkOrClick from "../../reUseComponents/ButtonLinkOrClick";
import { useRouter } from "next/router";
import Loader from "../../reUseComponents/Loader";

export const DekstopNavItems = () => {
  const router = useRouter();

  return (
    <>
      <div className="navbar pl-3 py-2 border-l border-[#b4b4b4] hidden sm:block">
        <nav>
          <ul className="flex-center font-medium color1 font-14 gap-3">
            {navbar.map((item, i) => {
              return (
                <li
                  key={i}
                  className={
                    router.pathname == item.path
                      ? "underline underline-offset-4 decoration-[#da1674] color2"
                      : ""
                  }
                >
                  <Link href={item.path}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
const DekstopNav = ({
  isverified,
  handleRegisterBtn,
  isUser_vendor,
  userTitle,
  profileImage,
  authLoader,
  service,
}) => {
  return (
    <>
      <div className="dekstopNavAuthentications hidden sm:block">
        {!authLoader && !isverified && (
          <div className="singin_register flex-center gap-2">
            <div>
              <Link href="/sign-in">
                <a className="flex-center gap-1 font-medium color1 font-14 whitespace-nowrap btn-hover">
                  <SignInIcon />
                  <span>Sign in</span>
                </a>
              </Link>
            </div>
            <div>
              <ButtonLinkOrClick
                isLink={false}
                text="Register"
                handleBtn={handleRegisterBtn}
              />
            </div>
          </div>
        )}
        {/* avatar of userInfo & vendorInfo */}

        <div className="isUser_vendor flex-center gap-2 ">
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
                <>
                  <Avatar
                    img={profileImage}
                    userTitle={userTitle}
                    alt="vendor"
                    isUser_vendor={isUser_vendor}
                  />
                  {service !== "rental" && (
                    <div>
                      <ButtonLinkOrClick goto="/dashboard/add-packages" text="Add package" />
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DekstopNav;
