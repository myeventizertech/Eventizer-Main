import React from "react";
import whyEvntizer from "../../data/sectionFourInfo";
import Circle1 from "../reUseComponents/icons/Circle1";

const SectionWhyEventizer = () => {
  return (
    <div className="bg-white relative ">
      <div className="absolute -top-[155px] sm:top-[unset] bottom-[unset] sm:-bottom-[35px] lg:bottom-0 left-[-87px] lg:-left-[45px] z-0 w-[121px] h-[260px]  lg:w-[10%] lg:h-[50%]">
        <Circle1 />
      </div>
      <div className="container py-all relative z-[1]">
        <div className="flex gap-3 flex-col sm:flex-row sm:items-center">
          <div className="flex-1 sm:px-6 ">
            <h1 className="color4 font-18 sm:font-26 lg:font-40 font-semibold mb-5">
              Why Eventizer
            </h1>
            <div className="">
              {whyEvntizer.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex-center gap-3 lg:gap-5 mt-2 sm:mt-4"
                  >
                    <div className=" w-[40px] sm:w-[85px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.img} alt="icon" />
                    </div>
                    <div className="color4">
                      <h1 className="font-16 sm:font-18 lg:font-26 font-medium tracking-wider capitalize">
                        {item.title}
                      </h1>
                      <p className="color1 font-12 lg:font-14 font-light  tracking-wider">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 rounded-[8px] bg-[#DB1B60] px-8">
            <div className="text-white min-h-[250px] sm:min-h-[360px] flex flex-col justify-center gap-3 sm:text-left text-center">
              <div className="w-[80px] sm:w-[106px] mx-auto sm:mx-0 drop-shadow-2xl">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={"/img/quality_icon.svg"} alt="icon" />
              </div>
              <div>
                <h2 className="font-18 sm:font-20 md:font-26 lg:font-40 font-medium">
                  100% Quality Assured
                </h2>
                <p className="font-14 md:font-16 font-light">
                  If you don’t love our service, we will make it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWhyEventizer;
