import React from "react";
import DrawlineSvg from "../reUseComponents/DrawlineSvg";
import partner_logo from "../../data/partnerLogo";
import { useKeenSlider } from "keen-slider/react";

const SectionColabWithUs = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      drag: false,
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 4, spacing: 5 },
        },
        "(min-width: 900px)": {
          slides: { perView: 5, spacing: 10 },
        },
      },
      slides: { perView: 3 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div className="bg-white">
        <div className="container py-all pb-10 sm:pb-0">
          <h1 className="font-22 sm:font-48 color4 text-center font-medium mb-3">
            Collaborating with us
          </h1>
          <DrawlineSvg />

          <div ref={sliderRef} className="keen-slider">
            {partner_logo.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`keen-slider__slide number-slide${i + 1}`}
                >
                  <div className="min-h-[10rem] flex items-center">
                    <div className="w-[80px] md:w-[130px] mx-auto">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item?.name} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionColabWithUs;
