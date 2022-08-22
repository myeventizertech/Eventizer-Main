import React from "react";
import Link from "next/link";
import UseOutsideClick from "../../utils/useOutsideClick"
const SignUpToolTip = () => {
  const {isOpen,refOutClick,handleAvatarClick} = UseOutsideClick()
  return (
    <>
      <div
        className={`shadow-lg bg-white inline-block px-5 py-2 rounded-[8px] absolute top-1/2 right-1/2  translate-x-1/2 translate-y-1/2 min-w-[16rem]
        transition-color ${
          isOpen
            ? "opacity-none pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
      
      >
        <div className="flex gap-8  color3 font-14 sm:font-16 justify-center items-center">
          <div>
            <Link href="/user-register">
              <a className="btn-hover">
                <span>As User</span>
              </a>
            </Link>
          </div>
          <div className="color4">Or</div>
          <div>
            <Link href="/vendor-register">
              <a className="btn-hover">
                <span>As vendor</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <p className="color4 font-14 sm:font-18">
        Don’t have any account?
        <span
          role="button"
          onClick={handleAvatarClick}
          ref={refOutClick}
          className="color3 hover:opacity-75 select-none"
        >
          {" "}
          Sign up
        </span>
      </p>
    </>
  );
};

export default SignUpToolTip;
