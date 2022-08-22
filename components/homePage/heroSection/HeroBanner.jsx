import React from "react";
import Slideshow from "./Slider";
import Image from "next/image";
import placeholder from "../../../utils/imageBlurLoader";
import finger_icon from "../../../public/img/finger_icon.svg";

const HeroBanner = () => {
  return (
    <>
      <div className="hero-banner-image ">
        <div
          className="bg-[#19E3B3]  top-32 lgx:top-36 xl:top-44 -left-12 lgx:-left-14  
               toolTop"
        >
          <div>
            <Slideshow slideItem={["Photography", "Gift Items"]} />
          </div>
        </div>
        <div className="bg-[#B368EE]  top-0 -right-[4%] lgx:right-4 xl:right-14  toolTop ">
          <div>
            <Slideshow slideItem={["Decoration", "Makeup Artist"]} />
          </div>
        </div>

        <div className="bg-[#FE71B5]  bottom-28 xl:bottom-36 right-[4%] lgx:right-4 xl:right-0  tool-flex toolTop py-2">
          <div className="flex-center ">
            <Image src={finger_icon} width={17} height={17} alt="icon" />
          </div>
          <div>
            <h3>We are now in</h3>
            <div className="font-12">
              {/* <Slideshow
                width="6"
                isimage={false}
                height="16"
                slideItem={["Dhaka"]}
              /> */}
              Dhaka
            </div>
          </div>
        </div>

        <div className="bg-[#FFDCB4]  bottom-8 -left-40 tool-flex py-2 toolTop ">
          <div className="flex-center w-[17px]">
            <Image src={finger_icon} width={17} height={17} alt="icon" />
          </div>
          <div>
            <h3>Partner</h3>
            <p className="text-[12px] text-[#6f6f6f]">
              10 partner joined with us.
            </p>
          </div>
        </div>
        <Image
          src={
            "https://res.cloudinary.com/eventizer-store/image/upload/v1657650088/Eventizer_New_Site/Only_png_njdl_ox9g58.png"
          }
          priority
          alt="eventizer-brand"
          width={680}
          height={821}
          layout="responsive"
          placeholder="blur"
          blurDataURL={placeholder}
          quality={100}
        />
      </div>
    </>
  );
};

export default HeroBanner;
