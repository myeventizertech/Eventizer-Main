import React from "react";
import { useUserOrVendor } from "../../authContext/AuthContext";
import { useRouter } from "next/router";
const PackageDetails = ({ quality, packageValue, handleClick }) => {
  let router = useRouter();
  let { verifyUser } = useUserOrVendor();
  let state = verifyUser?.isUser_vendor;
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  const user = storage?.user;
  return (
    <>
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
    </>
  );
};

export default PackageDetails;
