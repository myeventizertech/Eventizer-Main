import React from "react";
import DashboardLinks from "../reUseComponents/DashboardLinks";
import UseOutsideClick from "../../utils/useOutsideClick";
import placeholder from "../../utils/imageBlurLoader";

const Avatar = ({ userTitle, img, alt, isUser_vendor }) => {
  const { isOpen, refOutClick, handleAvatarClick } = UseOutsideClick();

  return (
    <>
      <div
        className="img h-[32px] w-[32px] auth-smallimg cursor-pointer select-none relative"
        onClick={handleAvatarClick}
        ref={refOutClick}
        title={img ? alt : ""}
      >
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt={alt}
            className="absolute object-cover w-full h-full rounded-full"


          />
        ) : (
          <h1
            className="capitalize w-full h-full font-16 sm:font-18 font-medium bg-slate-900 text-center text-white rounded-full flex-center justify-center"
            title={alt}
          >
            {userTitle.substring(0, 1)}
          </h1>
        )}

        {isOpen && (
          <DashboardLinks
            img={img}
            userTitle={userTitle}
            alt={alt}
            isUser_vendor={isUser_vendor}
          />
        )}
      </div>
      <h4
        title={userTitle}
        className="font-medium color4 font-12 sm:font-14 capitalize whitespace-nowrap select-none"
      >
        {userTitle.substring(0, 5)}
        {userTitle.length > 5 ? "..." : ""}
      </h4>
    </>
  );
};

export default React.memo(Avatar);
