import React from "react";
import feedBack from "../../data/feedBack";
import placeholder from "../../utils/imageBlurLoader";
import Slider from "react-slick";
import useMediaQuery from "../../utils/useMediaQuery";
import FeedbackRatingStar from "../../components/homePage/FeedbackRatingStar";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="mt-[3px] inline-block"> Next </span>
      <div className="w-[9px] h-[9px]">
        <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z"
            fill="#EF0D5E"
          />
        </svg>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="w-[9px] h-[9px]">
        <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.41003 1.41L2.83003 6L7.41003 10.59L6.00003 12L3.38077e-05 6L6.00003 1.23266e-07L7.41003 1.41Z"
            fill="#EF0D5E"
          />
        </svg>
      </div>
      <span className="mt-[3px] inline-block"> Previous</span>
    </div>
  );
}

const SectionFeedBack = () => {
  const isMobile = useMediaQuery("(min-width: 640px)");

  let settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="bg-[#FBF1F3] bg-[url('../public/img/feedBackBg.svg')] bg-no-repeat bg-cover
"
      >
        <div className="container py-all text-[#133240] ">
          <div>
            <h1 className=" font-20 sm:font-32  font-bold">
              Our Customer Feedback
            </h1>
            <p className="  font-16 sm:font-22 font-normal">
              Don’t take our word for it. Trust our customers
            </p>
          </div>

          <div className="mt-12 sectionFeedback pb-6 sm:pb-0">
            <Slider {...settings}>
              {feedBack.map((item, i) => {
                return (
                  <div key={i} style={{ width: !isMobile && 300 }}>
                    <div className="mx-2 pt-[6rem] lg:pt-[9rem]">
                      <div className="bg-white rounded-[12px] px-3 md:px-5 py-5">
                        <div className="flex justify-between gap-4">
                          <div className="relative w-full">
                            <div className="absolute w-[8rem]  lg:w-[10rem] -left-3 lg:-left-6 -top-[7rem] lg:-top-[10rem]">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.img}
                                alt="feed back"
                                width={item.imgWidth}
                                height={item.imgHeight}
                              />
                            </div>
                          </div>

                          <div className="w-[260px]">
                              <FeedbackRatingStar rating={item.rating} />
                          </div>
                        </div>
                        <div>
                          <p className="font-12 font-normal mt-10 h-[5.5rem] overflow-auto hide">
                            {item.feedBack}
                          </p>
                        </div>
                        <div className="flex flex-col mt-4">
                          <div className="mt-2  ml-auto ">
                            <h3 className="font-18 font-medium">{item.name}</h3>
                            <h4 className="font-14  font-normal">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFeedBack;
