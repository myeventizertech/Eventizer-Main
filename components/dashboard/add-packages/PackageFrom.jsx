import React from "react";
import Input from "../../reUseComponents/Input";
import DropZone from "../../reUseComponents/dropZone/DropZone";
import conditionalRendar from "../../../utils/conditionalRendar";
import services from "../../../utils/services";
import PackageQuality from "./PackageQuality";
import S3ImagesConverter from "../../reUseComponents/S3ImagesConverter";
const PackageFrom = ({
  props,
  files,
  setFiles,
  fileError,
  serviceCheck,
  addPackAgeInitalValue,
  iseEDit,
}) => {
  return (
    <>
      <div>
        <div className="lgx:flex gap-5">
          <div className="flex-1">
            <Input
              label={
                serviceCheck === services.giftItems
                  ? "Item Name"
                  : "Package Name" && serviceCheck === services.brandPromoter
                  ? "Promoter Name"
                  : "Package Name"
              }
              type="text"
              name="packageName"
              placeholder={"Enter Name"}
              value={props.values.packageName}
              handleChange={props.handleChange}
              handleBlur={props.handleBlur}
              error={
                props.touched.packageName && props.errors.packageName
                  ? props.errors.packageName
                  : ""
              }
            />

            <Input
              istextArea={true}
              textareaHeight={"10"}
              label={
                serviceCheck === services.giftItems
                  ? "Item Details"
                  : "Package Details" && serviceCheck === services.brandPromoter
                  ? "Promoter Experience"
                  : "Package Details"
              }
              name="packageDetails"
              placeholder={"Enter Details"}
              value={props.values.packageDetails}
              handleChange={props.handleChange}
              handleBlur={props.handleBlur}
              error={
                props.touched.packageDetails && props.errors.packageDetails
                  ? props.errors.packageDetails
                  : ""
              }
            />

            {conditionalRendar(
              serviceCheck === services.cinematography ||
                serviceCheck === services.djMusician ||
                serviceCheck === services.decoration
            ) && (
              <Input
                label="Package Demo Link"
                type="text"
                name="packageDemoLink"
                placeholder="Ex: www.youtube.com/watch?v=cbEHL"
                value={props.values.packageDemoLink}
                handleChange={props.handleChange}
                handleBlur={props.handleBlur}
                error={
                  props.touched.packageDemoLink && props.errors.packageDemoLink
                    ? props.errors.packageDemoLink
                    : ""
                }
              />
            )}

            {conditionalRendar(serviceCheck === services.giftItems) && (
              <Input
                label="Item pricing"
                type="text"
                name="itemPricing"
                placeholder="৳300"
                value={props.values.itemPricing}
                handleChange={props.handleChange}
                handleBlur={props.handleBlur}
                error={
                  props.touched.itemPricing && props.errors.itemPricing
                    ? props.errors.itemPricing
                    : ""
                }
              />
            )}

            {conditionalRendar(serviceCheck === services.brandPromoter) && (
              <>
                <Input
                  label="Price Per hour"
                  type="text"
                  name={`pricePerHour`}
                  isMust={true}
                  placeholder="৳300"
                  value={props.values.pricePerHour}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.pricePerHour && props.errors.pricePerHour
                      ? props.errors.pricePerHour
                      : ""
                  }
                />
                <Input
                  label="Price Per day"
                  type="text"
                  name={`pricePerDay`}
                  placeholder="৳5000"
                  value={props.values.pricePerDay}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.pricePerDay && props.errors.pricePerDay
                      ? props.errors.pricePerDay
                      : ""
                  }
                />
              </>
            )}
          </div>
          <div className="flex-1 overflow-hidden">
            <DropZone
              label={
                serviceCheck === services.giftItems
                  ? "Item Image"
                  : "Package Image" && serviceCheck === services.brandPromoter
                  ? "Promoter Image"
                  : "Package Image"
              }
              files={files}
              setFiles={setFiles}
              fileError={fileError}
              fileLimit={10}
              minFileLimit={3}
              dropZoneHeight="h-[140px]"
              dropZoneImgWidth="w-[20px] sm:w-[35px]"
              dropZoneMidText="font-14 md:font-18 mt-[5px]"
              dropZoneEndText="font-12 sm:font-14 mt-[6px]"
            />
            {/* {files.length <= 0 && (
              <>
                {iseEDit && (
                  <div className=" overflow-hidden">
                    {addPackAgeInitalValue?.packageImage && (
                      <>
                        <div>
                          <div className="overflow-x-auto p-5 flex gap-3 bar-thin">
                            {addPackAgeInitalValue?.packageImage.map(
                              (item, i) => {
                                return (
                                  <div key={i}>
                                    <div className="w-[130px] inline-block">
                                      <div className="w-full h-full">
                                        <S3ImagesConverter imgCode={item} />
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </>
            )} */}
          </div>
        </div>
      </div>
      {conditionalRendar(serviceCheck !== services.giftItems) &&
        conditionalRendar(serviceCheck !== services.brandPromoter) && (
          <div className="grid grid-cols-1 mdx:grid-cols-2 xl:grid-cols-3 gap-8 my-5">
            <div>
              <PackageQuality
                quality="basic"
                fieldProps={props}
                serviceCheck={serviceCheck}
                isOptional={false}
              />
            </div>
            <div>
              <PackageQuality
                quality="standard"
                fieldProps={props}
                serviceCheck={serviceCheck}
                isOptional={true}
              />
            </div>
            <div>
              <PackageQuality
                quality="premium"
                fieldProps={props}
                serviceCheck={serviceCheck}
                isOptional={false}
              />
            </div>
          </div>
        )}

      {/* {conditionalRendar(
        serviceCheck === services.photography ||
          serviceCheck === services.cinematography ||
          serviceCheck === services.djMusician ||
          serviceCheck === services.mehediArtist ||
          serviceCheck === services.makeupArtist ||
          serviceCheck === services.brandPromoter
      ) && (
        <div>
          <div>
            <h3 className=" font-16  sm:font-18 md:font-22 color1 mb-2">
              Overtime Price :
            </h3>
          </div>

          <div className="flex gap-3 max-w-[300px]">
            <div className="flex-1">
              <Input
                label="Price Per hour"
                type="text"
                name="overtimePricePerHour"
                placeholder={"৳200"}
                value={props.values.overtimePricePerHour}
                handleChange={props.handleChange}
                handleBlur={props.handleBlur}
                error={
                  props.touched.overtimePricePerHour &&
                  props.errors.overtimePricePerHour
                    ? props.errors.overtimePricePerHour
                    : ""
                }
              />
            </div>
            <div className="flex-1">
              <Input
                label="Price Per day"
                type="text"
                name="overtimePricePerDay"
                placeholder={"৳1200"}
                value={props.values.overtimePricePerDay}
                handleChange={props.handleChange}
                handleBlur={props.handleBlur}
                error={
                  props.touched.overtimePricePerDay &&
                  props.errors.overtimePricePerDay
                    ? props.errors.overtimePricePerDay
                    : ""
                }
              />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default React.memo(PackageFrom);
