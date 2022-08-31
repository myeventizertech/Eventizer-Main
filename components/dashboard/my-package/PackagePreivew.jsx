import services from "../../../utils/services";
import conditionalRendar from "../../../utils/conditionalRendar";
import S3ImagesConverter from "../../reUseComponents/S3ImagesConverter";

const PackageQuality = ({ quality, packageValue }) => {
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

        {packageValue[quality].decorationImage && (
          <>
            <h1 className="MyPackageListItemHeading">Decoration Image</h1>
            <div>
              <S3ImagesConverter
                imgCode={packageValue[quality].decorationImage}
              />
            </div>
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
                    Extra service included
                  </h1>
                  <p className="MyPackageListItemvalue ">{item.fieldName}</p>

                  {/* <h1 className="MyPackageListItemHeading">Added value</h1>
                  <p className="MyPackageListItemvalue ">{item.fieldValue}</p> */}
                </div>
              );
            })}
          </>
        )}

        {packageValue[quality].overTimePricePerDay && (
          <>
            <h1 className="MyPackageListItemHeading">Overtime Price Per Day</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].overTimePricePerDay}
            </p>
          </>
        )}
        {packageValue[quality].overTimePricePerHour && (
          <>
            <h1 className="MyPackageListItemHeading">
              Overtime Price Per Hour
            </h1>
            <p className="MyPackageListItemvalue ">
              {packageValue[quality].overTimePricePerHour}
            </p>
          </>
        )}
      </div>
    </>
  );
};

const PackagePreivew = ({ packageValue, serviceCheck }) => {
  let checkIsHave = (quality) => {
    if (
      packageValue?.[quality].pricePerHour ||
      packageValue?.[quality].pricePerDay
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="mt-5 lgx:flex gap-5">
        <div className="flex-1">
          {packageValue.packageName && (
            <>
              <h1 className="MyPackageListItemHeading">
                {serviceCheck === services.giftItems
                  ? "Item Name"
                  : "Package Name" && serviceCheck === services.brandPromoter
                  ? "Promoter Name"
                  : "Package Name"}
              </h1>
              <p className="MyPackageListItemvalue break-all">
                {packageValue.packageName}
              </p>
            </>
          )}

          {packageValue.packageDetails && (
            <>
              <h1 className="MyPackageListItemHeading">
                {serviceCheck === services.giftItems
                  ? "Item Details"
                  : "Package Details" && serviceCheck === services.brandPromoter
                  ? "Promoter Experience"
                  : "Package Details"}
              </h1>
              <p className="MyPackageListItemvalue break-all">
                {packageValue.packageDetails}
              </p>
            </>
          )}

          {packageValue.packageDemoLink && (
            <>
              <h1 className="MyPackageListItemHeading">Package Demo Link</h1>
              <p className="MyPackageListItemvalue ">
                {packageValue.packageDemoLink}
              </p>
            </>
          )}

          {packageValue.itemPricing && (
            <>
              <h1 className="MyPackageListItemHeading">Item Pricing</h1>
              <p className="MyPackageListItemvalue ">
                {packageValue.itemPricing}
              </p>
            </>
          )}

          {packageValue.pricePerHour && (
            <>
              <h1 className="MyPackageListItemHeading">Price Per Hour</h1>
              <p className="MyPackageListItemvalue ">
                {packageValue.pricePerHour}
              </p>
            </>
          )}
          {packageValue.pricePerDay && (
            <>
              <h1 className="MyPackageListItemHeading">Price Per Day</h1>
              <p className="MyPackageListItemvalue ">
                {packageValue.pricePerDay}
              </p>
            </>
          )}
        </div>

        {/* image -========================= */}
        <div className="flex-1 overflow-hidden">
          {packageValue.packageImage && (
            <>
              <h1 className="MyPackageListItemHeading">
                {serviceCheck === services.giftItems
                  ? "Item Image"
                  : "Package Image" && serviceCheck === services.brandPromoter
                  ? "Promoter Image"
                  : "Package Image"}
              </h1>

              <div>
                <div className="overflow-x-auto p-5 flex gap-3 bar-thin">
                  {packageValue.packageImage.map((item, i) => {
                    return (
                      <div key={i}>
                        <div className="w-[130px] inline-block">
                          <div className="w-full h-full">
                            <S3ImagesConverter imgCode={item} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-1 mdx:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {/* ====================== */}
          {checkIsHave("basic") && (
            <div>
              <PackageQuality quality="basic" packageValue={packageValue} />
            </div>
          )}
          {/* ====================== */}
          {checkIsHave("standard") && (
            <div>
              <PackageQuality quality="standard" packageValue={packageValue} />
            </div>
          )}

          {/* ========================= */}
          {checkIsHave("premium") && (
            <div>
              <PackageQuality quality="premium" packageValue={packageValue} />
            </div>
          )}
        </div>
      </div>

      {/* ============================= */}
      <div className="mt-5">
        {conditionalRendar(
          packageValue.overtimePricePerHour || packageValue.overtimePricePerDay
        ) && (
          <h3 className="font-16  sm:font-18 color1 mb-2">Overtime Price :</h3>
        )}

        {packageValue.overtimePricePerHour && (
          <>
            <h1 className="MyPackageListItemHeading">
              Overtime Price Per Hour
            </h1>
            <p className="MyPackageListItemvalue ">
              {packageValue.overtimePricePerHour}
            </p>
          </>
        )}
        {packageValue.overtimePricePerDay && (
          <>
            <h1 className="MyPackageListItemHeading">Overtime Price Per Day</h1>
            <p className="MyPackageListItemvalue ">
              {packageValue.overtimePricePerDay}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default PackagePreivew;
