import React from "react";
import Link from "next/link";
import eventType from "../../data/eventType";
import Circle2 from "../reUseComponents/icons/Circle2";
const SectionEventType = () => {
  return (
    <>
      <div className="bg-white relative">
        <div className="absolute top-0 right-0 hidden sm:block w-[7%]">
        <Circle2 />
        </div>
        <div className="container py-all sectionTwo ">
          <ul className="SectionTwoSixBox  sm:justify-center">
            <li className="snap-center inline-block sm:hidden">
              <span className="w-6 inline-block"></span>
            </li>
            {eventType.map((item, i) => {
              return (
                <li key={i} className="snap-center ">
                  <Link href={item.path}>
                    <a className="sectionTwo-box">
                      <span className=" w-[140px] sm:w-[155px] lg:w-[165px] flex flex-col gap-1">
                        <span className=" w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] flex justify-center  mx-auto">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.img} alt="icon" />
                        </span>
                        <span className="block ">{item.name}</span>
                      </span>
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className="snap-center inline-block sm:hidden">
              <div className="w-6"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionEventType;
