import React from "react";
import { useUserOrVendor } from "../../../../authContext/AuthContext";
import { useRouter } from "next/router";
// import ImageViewer from "react-simple-image-viewer/dist/types";
import ImageViewer from "react-simple-image-viewer";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { Storage } from "aws-amplify";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  

  return (
    <div className={className} onClick={onClick}>
      <svg
        className="w-4 ml-[-32px]"
        viewBox="0 0 8 12 "
        fill="#787878"
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
    <div className={`${className} `} onClick={onClick}>
    
     <svg
        className="w-4 ml-8 "
        viewBox="0 0 8 12"
        fill="#787878"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.41003 1.41L2.83003 6L7.41003 10.59L6.00003 12L3.38077e-05 6L6.00003 1.23266e-07L7.41003 1.41Z" />
      </svg>
    </div>
  );
}

const PackageDetails = ({ quality, packageValue,setModal,handleClick }) => {
  // console.log(packageValue[quality])
  let router = useRouter();
  let { verifyUser } = useUserOrVendor();
  let state = verifyUser?.isUser_vendor;
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  const user = storage?.user;
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setimages] = useState([])
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);



    useEffect(() => {
      if (images.length === 0) {
        packageValue[quality].packageImage?.map(async (e) => {
          let signedURL = await Storage.get(e);
  
          const data = await fetch(signedURL);
          if (data.ok) {
            setimages((prev) => [...prev, signedURL]);
            console.log(images)
          } else {
            return;
          }
        });
      }
    }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isViewerOpen);
  }, [isViewerOpen]);

  return (
    <>
        <div className="border-2 mx-auto rounded-md">
        <div className="m-0 p-0 w-full">
        {/* {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: '2px' }}
            alt=""
          />
        ))} */}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>

      <div className="mdx:max-w-[35rem] flex-1 ">
        <Slider {...settings}>
          {images.map((item, i) => {
            return (
              <div key={i} onClick={() => openImageViewer(i)}>
                <div className="h-[15rem] sm:h-[8rem] bg-[#e7e6ea]">
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
      </div>
      <div className="bg-white p-5 lgx:p-[40px] xl:p-[55px] rounded-[4px] ">
        <h1 className="text-center font-20 font-normal color3 mb-5 capitalize">
          {quality}
        </h1>

        {packageValue[quality].pricePerHour && (
          <>
            <h1 className="MyPackageListItemHeading">Price Per Hour</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].pricePerHour}
            </p>
          </>
        )}

        {packageValue[quality].pricePerDay && (
          <>
            <h1 className="MyPackageListItemHeading">Price Per Day</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].pricePerDay}
            </p>
          </>
        )}

        {packageValue[quality].deliveryTime && (
          <>
            <h1 className="MyPackageListItemHeading">Delivery Time</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].deliveryTime.label}
            </p>
          </>
        )}

        {packageValue[quality].minPerson && (
          <>
            <h1 className="MyPackageListItemHeading">Team Member</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].minPerson}
            </p>
          </>
        )}

        {packageValue[quality].editedPhoto && (
          <>
            <h1 className="MyPackageListItemHeading">Edited Photo</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].editedPhoto}
            </p>
          </>
        )}

        {packageValue[quality].printedCopy && (
          <>
            <h1 className="MyPackageListItemHeading">Printed Copy</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].printedCopy}
            </p>
          </>
        )}

        {packageValue[quality].trailerDuration && (
          <>
            <h1 className="MyPackageListItemHeading">Trailer Duration</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].trailerDuration.label}
            </p>
          </>
        )}

        {packageValue[quality].decorationPrice && (
          <>
            <h1 className="MyPackageListItemHeading">Decoration Price</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].decorationPrice}
            </p>
          </>
        )}

        {packageValue[quality].pricePerPiece && (
          <>
            <h1 className="MyPackageListItemHeading">Price Per Piece</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].pricePerPiece}
            </p>
          </>
        )}
        {packageValue[quality].quality && (
          <>
            <h1 className="MyPackageListItemHeading">Quality</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].quality}
            </p>
          </>
        )}

        {packageValue[quality].customOptionFields && (
          <>
            {packageValue[quality].customOptionFields.map((item, i) => {
              return (
                <div key={i}>
                  <h1 className="MyPackageListItemHeading">
                    Service included
                  </h1>
                  <p className="MyPackageListItemvalue ">{item.fieldName}</p>

                  {/* <h1 className="MyPackageListItemHeading">Added value</h1>
                  <p className="MyPackageListItemvalue ">{item.fieldValue}</p> */}
                </div>
              );
            })}
          </>
        )}
        {state === "vendor" ? (
          <div></div>
        ) : (
          <button
            onClick={() => {
              if (!verifyUser.isverified) {
                router.push("/sign-in");
                return;
              }

              if (!user?.phoneNumber) {
                router.push({
                  pathname: "/dashboard/profile",
                  query: {
                    redirect: "true",
                    path: router.asPath,
                  },
                });
                return;
              }

              if (user?.phoneNumber) {
                handleClick(quality);
              }
            }}
            className="text-white bgcolor2 font-18 mt-3 rounded w-full px-2 py-1 font-normal btn-hover"
          >
            Book Now
          </button>
        )}
      </div>
      </div>
    </>
  );
};

export default PackageDetails;