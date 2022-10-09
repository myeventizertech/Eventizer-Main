import React from "react";
import ButtonLinkOrClick from "../reUseComponents/ButtonLinkOrClick";
const SectionBusiness = () => {
  return (
    <div className="container py-all relative">
      <div className="max-w-[768px] md:max-w-[600px] lg:max-w-[650px] flex flex-col gap-4 md:gap-8 relative md:z-10 md:mr-[28rem] lg:mr-[30rem]">
        <div className="mr-20">
          <div className="flex-1 relative rounded-[8px] max-w-[500px] md:max-w-[400px] lg:max-w-[470px] ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                "https://res.cloudinary.com/eventizer-store/image/upload/v1654711252/business_image_kj49ym.png"
              }
              alt="Book now image"

            />
          </div>
        </div>
        <div className="ml-20">
          <div className="flex-1 relative rounded-[8px] ml-auto max-w-[500px] md:max-w-[400px] lg:max-w-[470px] ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                "https://res.cloudinary.com/eventizer-store/image/upload/v1654711252/business_image2_wgdmip.png"
              }

              alt="Book now image"

            />
          </div>
        </div>
      </div>
      <div
        className="bg-white shadow-[0px_4px_4px_0px_#00000014] py-8 lg:py-16 rounded-[8px] md:w-[80%] lg:w-[70%]
      md:absolute top-[49%] md:left-[58%] lg:left-[63.5%] md:-translate-x-1/2 -translate-y-1/2 
      px-4 md:px-0 
      "
      >
        <div className="md:max-w-[600px] lg:max-w-[545px] md:ml-auto md:pr-[30px] md:pl-[7rem] lg:pl-0">
          <h1 className="color4 font-18 sm:font-20 md:font-26 lg:font-40 mb-2 leading-none">
            Eventizer for Corporates
          </h1>
          <p className="font-12 sm:font-16 lg:font-18 color1 md:mb-4 font-light">
            Book your personal virtual event planner for your business events.
            Such as conference, printing,logistics etc.
          </p>

          <div className="ml-auto mt-4 md:mt-10 text-center md:max-w-[225px]">
            <ButtonLinkOrClick
              isLink={true}
              text="Get started"
              font="font-14 sm:font-16 md:font-22 font-normal "
              goto="/corporate-event"
              radius="rounded-[6px]"
              otherCss="block md:inline w-full"
              px="px-[50px]"
              py=" py-[8px] md:py-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBusiness;