import React from "react";
import Image from "next/image";
import ButtonLinkOrClick from "../reUseComponents/ButtonLinkOrClick";
import placeholder from "../../utils/imageBlurLoader";
import Script from "next/script";

const SectionBookNow = () => {
  return (
    <>
      <Script
        id="setmore_script"
        src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
      ></Script>

      <div className="bg-white ">
        <div className="container py-all relative z-[1]">
          <div className="flex gap-4 sm:gap-10 justify-between min-h-[240px] sm:min-h-[330px] lg:min-h-[360px]">
            <div className="w-[80%] relative rounded-[8px] overflow-hidden">
              <Image
                src={
                  "https://res.cloudinary.com/eventizer-store/image/upload/v1654711252/consultancy_image_wnzkms.png"
                }
                layout="fill"
                objectFit="cover"
                alt="Book now image"
                sizes="50vw"
                quality={100}
                placeholder="blur"
                blurDataURL={placeholder}
              />
            </div>
            <div className=" flex flex-col justify-center gap-2 min-w-[15rem] sm:min-w-0">
              <div>
                <h2 className="font-18 sm:font-30 md:font-40 font-medium lg:font-48 color4 leading-[1.2] sm:leading-none">
                  <span className="block"> Book </span>
                  <span className="block"> a free consultancy </span>
                  <span className="block"> for planning an event</span>
                </h2>
              </div>
              <div>
                <p className="font-12 sm:font-16 lg:font-18 color1 mb-4 font-light">
                  We make it easy for you to schedule your events. Request a
                  free consultation and receive event planning suggestions.
                </p>
              </div>
              <div className="">
                <ButtonLinkOrClick
                  isLink={true}
                  text="Book now"
                  font="font-14 sm:font-20 font-normal"
                  goto="https://booking.setmore.com/scheduleappointment/84da232f-ba6c-429b-ba9e-8aa9510db87b"
                  radius="rounded-[6px]"
                  py="py-[10px]"
                  px=" px-[30px] sm:px-[60px]"
                  id="Setmore_button_iframe"
                  otherCss="w-full block text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionBookNow;
