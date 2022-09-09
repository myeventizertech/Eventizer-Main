import React from "react";
import { FieldArray } from "formik";
import SelectInput from "../../reUseComponents/SelectInput";
import { optionsTeamMember } from "../../../utils/options";
import InputError from "../../reUseComponents/InputError";
import Input from "../../reUseComponents/Input";
import FileInput from "../../reUseComponents/FileInput";
import conditionalRendar from "../../../utils/conditionalRendar";
import services from "../../../utils/services";

const PackageQuality = ({
  quality,
  inputdesign = "font-16 rounded-[4px] px-[10px] h-[35px] ",
  labelDesign = "font-16",
  fieldProps,
  serviceCheck,
  isOptional
}) => {
  return (
    <>
      <div
        className="bg-white p-5 lgx:p-[40px] xl:p-[55px] rounded-[4px] "
        id="packageQuality"
      >
        <h1 className="text-center font-20 font-normal color3 mb-5 capitalize">
          {quality}
        </h1>

        {conditionalRendar(
          serviceCheck === services.photography ||
            serviceCheck === services.cinematography ||
            serviceCheck === services.djMusician ||
            serviceCheck === services.mehediArtist ||
            serviceCheck === services.makeupArtist
        ) && (
          <>
            <Input
              label="Price Per hour"
              type="text"
              name={`${quality}.pricePerHour`}
              isMust={isOptional}
              placeholder="৳300"
              inputdesign={inputdesign}
              labelDesign={labelDesign}
              value={fieldProps.values[quality].pricePerHour}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched[quality]?.pricePerHour &&
                fieldProps.errors[quality]?.pricePerHour
                  ? fieldProps.errors[quality]?.pricePerHour
                  : ""
              }
            />
            <Input
              label="Price Per day"
              type="text"
              name={`${quality}.pricePerDay`}
              placeholder="৳5000"
              inputdesign={inputdesign}
              labelDesign={labelDesign}
              value={fieldProps.values[quality].pricePerDay}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched[quality]?.pricePerDay &&
                fieldProps.errors[quality]?.pricePerDay
                  ? fieldProps.errors[quality]?.pricePerDay
                  : ""
              }
            />
          </>
        )}
       {conditionalRendar(
          serviceCheck === services.photography ||
            serviceCheck === services.cinematography ||
            serviceCheck === services.djMusician ||
            serviceCheck === services.mehediArtist ||
            serviceCheck === services.makeupArtist
        ) && (
          <>
            <Input
              label="Team Member"
              type="text"
              name={`${quality}.minPerson`}
              isMust={isOptional}
              placeholder="5"
              inputdesign={inputdesign}
              labelDesign={labelDesign}
              value={fieldProps.values[quality].minPerson}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched[quality]?.minPerson &&
                fieldProps.errors[quality]?.minPerson
                  ? fieldProps.errors[quality]?.minPerson
                  : ""
              }
            />
          </>
        )}
        {conditionalRendar(
          serviceCheck === services.photography ||
            serviceCheck === services.cinematography ||
            serviceCheck !== services.djMusician &&
            serviceCheck !== services.mehediArtist &&
            serviceCheck !== services.makeupArtist
        ) && (
          <SelectInput
            handleChange={fieldProps.setFieldValue}
            value={fieldProps.values[quality].deliveryTime}
            options={optionsTeamMember}
            label="Delivery time"
            placeholder="Select day"
            name={`${quality}.deliveryTime`}
            isMust={isOptional}
            handleBlur={fieldProps.setFieldTouched}
            error={
              fieldProps.touched[quality]?.deliveryTime &&
              fieldProps.errors[quality]?.deliveryTime &&
              !fieldProps.values[quality].deliveryTime
                ? fieldProps.errors[quality]?.deliveryTime
                : ""
            }
          />
        )}
        {conditionalRendar(serviceCheck === services.photography) && (
          <>
            <Input
              label="Edited Photo"
              type="text"
              name={`${quality}.editedPhoto`}
              isMust={isOptional}
              placeholder="60"
              inputdesign={inputdesign}
              labelDesign={labelDesign}
              value={fieldProps.values[quality].editedPhoto}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched[quality]?.editedPhoto &&
                fieldProps.errors[quality]?.editedPhoto
                  ? fieldProps.errors[quality]?.editedPhoto
                  : ""
              }
            />

            <Input
              label="Printed Copy"
              type="text"
              name={`${quality}.printedCopy`}
              isMust={isOptional}
              placeholder="60"
              inputdesign={inputdesign}
              labelDesign={labelDesign}
              value={fieldProps.values[quality].printedCopy}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched[quality]?.printedCopy &&
                fieldProps.errors[quality]?.printedCopy
                  ? fieldProps.errors[quality]?.printedCopy
                  : ""
              }
            />
          </>
        )}

        {conditionalRendar(serviceCheck === services.cinematography) && (
          <SelectInput
            handleChange={fieldProps.setFieldValue}
            value={fieldProps.values[quality].trailerDuration}
            options={optionsTeamMember}
            label="Trailer Duration"
            placeholder="Trailer Duration"
            name={`${quality}.trailerDuration`}
            isMust={isOptional}
            handleBlur={fieldProps.setFieldTouched}
            error={
              fieldProps.touched[quality]?.trailerDuration &&
              fieldProps.errors[quality]?.trailerDuration &&
              !fieldProps.values[quality].trailerDuration
                ? fieldProps.errors[quality]?.trailerDuration
                : ""
            }
          />
        )}

        {conditionalRendar(serviceCheck === services.decoration) && (
          <>
            <Input
              label="Decoration Price"
              type="text"
              name={`${quality}.decorationPrice`}
              isMust={isOptional}
              placeholder="৳400"
              inputdesign={inputdesign}
              labelDesign={labelDesign}
              value={fieldProps.values[quality].decorationPrice}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched[quality]?.decorationPrice &&
                fieldProps.errors[quality]?.decorationPrice
                  ? fieldProps.errors[quality]?.decorationPrice
                  : ""
              }
            />
            <FileInput
              label="Decoration Image"
              name={`${quality}.decorationImage`}
              title="Select image"
              labelDesign={labelDesign}
              showImageName={false}
              value={fieldProps.values[quality].decorationImage}
              handleChange={fieldProps.setFieldValue}
              handleBlur={fieldProps.handleBlur}
              isMust={isOptional}
              error={
                fieldProps.touched[quality]?.decorationImage &&
                fieldProps.errors[quality]?.decorationImage
                  ? fieldProps.errors[quality]?.decorationImage
                  : null
              }
            />

            {fieldProps.values[quality].decorationImage && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={URL.createObjectURL(
                    fieldProps.values[quality].decorationImage
                  )}
                  className="w-full"
                  alt="image of decoration"
                />
              </>
            )}
          </>
        )}

        {conditionalRendar(serviceCheck === services.printingPress) && (
          <>
            <Input
              label="Price Per Piece"
              type="text"
              name={`${quality}.pricePerPiece`}
              isMust={isOptional}
              placeholder="৳200"
              inputdesign={inputdesign}
              labelDesign={labelDesign}
              value={fieldProps.values[quality].pricePerPiece}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched[quality]?.pricePerPiece &&
                fieldProps.errors[quality]?.pricePerPiece
                  ? fieldProps.errors[quality]?.pricePerPiece
                  : ""
              }
            />

            <Input
              label="Quality"
              type="text"
              name={`${quality}.quality`}
              isMust={isOptional}
              placeholder="Quality"
              inputdesign={inputdesign}
              labelDesign={labelDesign}
              value={fieldProps.values[quality].quality}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched[quality]?.quality &&
                fieldProps.errors[quality]?.quality
                  ? fieldProps.errors[quality]?.quality
                  : ""
              }
            />
          </>
        )}
        {/* ================================================================== */}
        <Input
          label="Overtime Price Per hour"
          type="text"
          name={`${quality}.overTimePricePerHour`}
          placeholder="৳300"
          inputdesign={inputdesign}
          labelDesign={labelDesign}
          value={fieldProps.values[quality].overTimePricePerHour}
          handleChange={fieldProps.handleChange}
          handleBlur={fieldProps.handleBlur}
          error={
            fieldProps.touched[quality]?.overTimePricePerHour &&
            fieldProps.errors[quality]?.overTimePricePerHour
              ? fieldProps.errors[quality]?.overTimePricePerHour
              : ""
          }
        />
        <Input
          label="Overtime Price Per day"
          type="text"
          name={`${quality}.overTimePricePerDay`}
          placeholder="৳300"
          inputdesign={inputdesign}
          labelDesign={labelDesign}
          value={fieldProps.values[quality].overTimePricePerDay}
          handleChange={fieldProps.handleChange}
          handleBlur={fieldProps.handleBlur}
          error={
            fieldProps.touched[quality]?.overTimePricePerDay &&
            fieldProps.errors[quality]?.overTimePricePerDay
              ? fieldProps.errors[quality]?.overTimePricePerDay
              : ""
          }
        />
        {/* ================================================ */}
        <FieldArray
          name={`${quality}.customOptionFields`}
          render={({ remove, push }) => (
            <div>
              {fieldProps.values[quality].customOptionFields.map((_, index) => (
                <div key={index}>
                  <div className=" border p-5 mt-4">
                    <Input
                    istextArea={true}
                      label="Service included"
                      type="text"
                      name={`${quality}.customOptionFields.${index}.fieldName`}
                      placeholder="Ex: anything"
                      inputdesign={inputdesign}
                      labelDesign={labelDesign}
                      value={
                        fieldProps.values[quality].customOptionFields[index]
                          .fieldName
                      }
                      handleChange={fieldProps.handleChange}
                      handleBlur={fieldProps.handleBlur}
                      error={
                        fieldProps.errors[quality]?.customOptionFields &&
                        fieldProps.errors[quality]?.customOptionFields[index] &&
                        fieldProps.touched[quality]?.customOptionFields &&
                        fieldProps.errors[quality]?.customOptionFields[index]
                          .fieldName
                          ? fieldProps.errors[quality]?.customOptionFields[
                              index
                            ].fieldName
                          : ""
                      }
                    />
                    {/* <Input
                      label="Add value"
                      type="text"
                      name={`${quality}.customOptionFields.${index}.fieldValue`}
                      placeholder="Ex: 3"
                      inputdesign={inputdesign}
                      labelDesign={labelDesign}
                      value={
                        fieldProps.values[quality].customOptionFields[index]
                          .fieldValue
                      }
                      handleChange={fieldProps.handleChange}
                      handleBlur={fieldProps.handleBlur}
                      error={
                        fieldProps.errors[quality]?.customOptionFields &&
                        fieldProps.errors[quality]?.customOptionFields[index] &&
                        fieldProps.touched[quality]?.customOptionFields &&
                        fieldProps.errors[quality]?.customOptionFields[index]
                          .fieldValue
                          ? fieldProps.errors[quality]?.customOptionFields[
                              index
                            ].fieldValue
                          : ""
                      }
                    /> */}
                    <button
                      type="button"
                      className="font-14 text-white bgcolor2 px-3 py-.5  rounded-[4px] hover:opacity-75 mt-2 block ml-auto"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {fieldProps.values[quality].customOptionFields.length < 3 ? (
                <button
                  type="button"
                  className="font-14 font-normal text-white bgcolor2 rounded-[4px] flex justify-center items-center hover:opacity-75 mt-3 px-2 py-1 ml-auto"
                  onClick={() => push({ fieldName: "", fieldValue: "" })}
                >
                  Add Extra +
                </button>
              ) : (
                <InputError text="Reach limit of Extra Service" />
              )}
            </div>
          )}
        />
      </div>
    </>
  );
};

export default React.memo(PackageQuality);
