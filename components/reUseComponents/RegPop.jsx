import React from "react";
import Image from "next/image";
import Link from "next/link";
import OutIcon from "./icons/OutIcon";
import placeholder from "../../utils/imageBlurLoader";

const RegPop = ({ handlecloseReg }) => {
  return (
    <div
      className="fixed z-50 bg-[#1a1818d1] inset-0  h-screen  px-4 text-center flex flex-col items-center 
    justify-center"
    >
      <div
        onClick={handlecloseReg}
        className="absolute top-[26px] sm:top-[35px] right-5 cursor-pointer "
      >
        <OutIcon />
      </div>
      <div className="flex justify-center items-center gap-1 max-w-[500px] relative ORelement">
        <div className="bgcolor2 rounded-xl grow w-[10rem] sm:w-[15rem] overflow-hidden">
          <Link href="/user-register">
            <a onClick={handlecloseReg}>
              <span className="h-[9.6875rem] inline-block w-full relative">
                <Image
                  src={
                    "https://res.cloudinary.com/eventizer-store/image/upload/v1655131467/Eventizer_New_Site/user_reg_img.png"
                  }
                  layout="fill"
                  priority
                  alt="user register image"
                  placeholder="blur"
                  blurDataURL={placeholder}
                  objectFit="cover"
                />
              </span>

              <h3 className="py-4 px-2 text-white font-14 sm:font-18">
                Register as a user
              </h3>
            </a>
          </Link>
        </div>
        <div className="bgcolor2 rounded-xl grow w-[10rem] sm:w-[15rem] overflow-hidden">
          <Link href="/vendor-register">
            <a onClick={handlecloseReg}>
              <span className="h-[9.6875rem] inline-block w-full relative">
                <Image
                  src={
                    "https://res.cloudinary.com/eventizer-store/image/upload/v1661620766/Eventizer_New_Site/vendorimage_s84wdj.png"
                  }
                  layout="fill"
                  priority
                  alt="vendor register image"
                  placeholder="blur"
                  blurDataURL={placeholder}
                  objectFit="cover"
                />
              </span>

              <h3 className="py-4 px-2 text-white font-14 sm:font-18">
                Be a vendor
              </h3>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegPop;
