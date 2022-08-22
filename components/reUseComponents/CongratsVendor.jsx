import React from "react";
import Logo from "./Logo";

const CongratsVendor = () => {
  return (
    <div className=" text-center  h-screen flex flex-col justify-center">
      <div className={`drop-shadow-[0px_9px_15px_#bfb6b6] drawn w-12 sm:w-28 h-12 sm:h-28 mx-auto`}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 37 37"
          style={{ enableBackground: "new 0 0 37 37" }}
          xmlSpace="preserve"
        >
          <path
            
            style={{
              fill: "#ef0d5e",
              stroke: "#771337",
              strokeWidth: 3,
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            d="
	M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
          />
          <polyline
            style={{
              fill: "none",
              stroke: "#fff",
              strokeWidth: 3,
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
            points="
	11.6,20 15.9,24.2 26.4,13.8 "
          />
        </svg>
      </div>
      <h1 className="font-20 color3 sm:font-48 font-normal text-center">
        Congratulations
      </h1>
      <p className="color4 font-14 sm:font-18 font-normal">
        Your account is now verified
      </p>
      <h3 className="color4 font-16 sm:font-22 font-normal mt-1">
        We are redirecting to “<span className="color3">Getting more info</span>
        ” page in 5 sec
      </h3>
      <div className="progress01">
        <div className="progress-value"></div>
      </div>

      <div className="mx-auto mt-4">
        <Logo />
      </div>
    </div>
  );
};

export default CongratsVendor;
