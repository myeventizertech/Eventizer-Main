import React from "react";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Loader from "../../reUseComponents/Loader";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        className="profile-slider"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        className="profile-slider"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.41003 1.41L2.83003 6L7.41003 10.59L6.00003 12L3.38077e-05 6L6.00003 1.23266e-07L7.41003 1.41Z" />
      </svg>
    </div>
  );
}
const ProfileInfo = ({
  slideImg,
  openImageViewer,
  data,
  rating,
  sLocation,
  specializedIn,
}) => {
  const Data = data;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 639,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let years = !Data?.yearsOfExperience
    ? 0
    : JSON.parse(Data?.yearsOfExperience);


  return (
    <>
      <h1 className="text-[#141414] mdx:text-white font-18 sm:font-32 font-medium">
        {Data?.title || ""}
      </h1>
      <h4 className="test-profile-sm">{years?.value || "0"} experienced</h4>
      <h4 className="test-profile-sm">Based in {sLocation || ""}</h4>
      <div className="flex items-center test-profile-sm">
        <div>
          <ReactStars
            classNames="mr-2"
            size={24}
            edit={false}
            color={"#adb5bd"}
            activeColor={"#ef0d5e"}
            isHalf={true}
            value={rating}
          />
        </div>
        <div>
          <span>{rating}</span>
          <span>({Data?.Reviews?.items?.length || 0} ratings)</span>
        </div>
      </div>
      {specializedIn ? (
        <p className="test-profile-sm">Specialized in {specializedIn}</p>
      ) : (
        <p></p>
      )}
      {slideImg.length !== 0 ? (
        <div className="mdx:max-w-[35rem] flex-1 mt-5">
          <Slider {...settings}>
            {slideImg.map((item, i) => {
              return (
                <div key={i} onClick={() => openImageViewer(i)}>
                  <div className="mx-1 h-[15rem] sm:h-[8rem] bg-[#e7e6ea]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item}
                      alt={"profile-image"}
                      className="mx-auto block h-full"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>

          <button
            className="test-profile-sm ml-auto block btn-hover"
            onClick={() => openImageViewer(0)}
          >
            Show All
          </button>
        </div>
      ) :
        (

          <Loader center={true} colorDefault={false} />
        )


      }
    </>
  );
};

export default ProfileInfo;
