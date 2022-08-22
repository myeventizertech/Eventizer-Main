import React from "react";

const ShowPass = ({ handleShowClick, isShow }) => {
  return (
    <button
      type="button"
      onClick={handleShowClick}
      className="font-12 sm:font-14 color4 hover:text-[#141414]/[.6] select-none absolute top-[2.77rem] sm:top-[3.1rem] md:top-[3.3rem] -right-[19px] sm:-right-[22px] -translate-x-1/2 -translate-y-1/2 bg-white py-1 sm:py-2 px-2"
    >
      {isShow ? "Hide" : "Show"}
    </button>
  );
};

export default ShowPass;
