import React, { useState } from "react";
import FormIcon from "../../reUseComponents/icons/FormIcon";
import ThreeDotIcon from "../../reUseComponents/icons/ThreeDotIcon";
import RepliedIcon from "../../reUseComponents/icons/RepliedIcon";
import UseOutsideClick from "../../../utils/useOutsideClick";

const BriefItem = ({ item }) => {
  //   const { isOpen, refOutClick, handleAvatarClick } = UseOutsideClick();
  //   const [modalNoneIsOpen, setNoneIsOpen] = React.useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        {item.id === 1 && (
          <div className="w-8">
            <FormIcon />
          </div>
        )}
        {item.id === 2 && (
          <div className="w-8">
            <RepliedIcon />
          </div>
        )}

        {/* <div className="relative">
          {isOpen && (
            <div className="bgcolor2 shadow-lg p-2 absolute right-7 -top-2 rounded-md font-16 font-normal text-white flex gap-4">
              <button className="btn-hover" onClick={() => setNoneIsOpen(true)}>
                None
              </button>
            </div>
          )}

          <button
            className="btn-hover"
            onClick={handleAvatarClick}
            ref={refOutClick}
          >
            <ThreeDotIcon />
          </button>
        </div> */}
      </div>

      <h4 className="color1 font-16 sm:font-18 font-medium tracking-wider ">
        {item.title}
      </h4>

      <h1 className="font-26 sm:font-32 color3 font-semibold leading-none">
        {item.totalBrief}
      </h1>
    </>
  );
};

export default BriefItem;
