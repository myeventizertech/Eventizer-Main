import React from "react";
import howItsWorkType from "../../data/HowItsWorkType";
import DrawlineSvg from "../reUseComponents/DrawlineSvg";
const SectionHowItsWork = () => {
  return (
    <div className="bg-white">
      <div className="container py-all sectionSix">
        <h1 className="font-22 sm:font-48 color4 text-center font-medium">
          How it works
        </h1>
        <DrawlineSvg />
        <ul className="SectionTwoSixBox sm:justify-center lg:justify-between">
          <li className="snap-center inline-block sm:hidden">
            <span className="w-4 inline-block"></span>
          </li>
          {howItsWorkType.map((item, i) => {
            return (
              <li key={i} className="snap-center ">
                <span className="flex flex-col gap-2 sectionSixMW">
                  <span className="flex justify-center w-[60px] sm:w-[75px] lg:w-[106px] h-[48px] sm:h-[63px]  lg:h-[88px] mx-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt="icon" />
                  </span>
                  <span className="block colo4 font-14 sm:font-18 lg:font-20">
                    {item.name}
                  </span>
                </span>
              </li>
            );
          })}
          <li className="snap-center inline-block sm:hidden">
            <span className="w-4 inline-block"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionHowItsWork;
