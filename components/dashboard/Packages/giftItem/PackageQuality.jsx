import React from "react";
import { FieldArray } from "formik";
import SelectInput from "../../../reUseComponents/SelectInput";
import { optionsTeamMember } from "../../../../utils/options";
import InputError from "../../../reUseComponents/InputError";
import Input from "../../../reUseComponents/Input";
import FileInput from "../../../reUseComponents/FileInput";
import conditionalRendar from "../../../../utils/conditionalRendar";
import services from "../../../../utils/services";
import DropZone from "../../../reUseComponents/dropZone/DropZone";
import { useState } from "react";
const PackageQuality = ({
  props,
  files,
  setFiles,
  fileError,
  addPackAgeInitalValue,
  quality,	filesB,
	setFilesB,
	filesS,
	setFilesS,
	filesP,
	setFilesP,
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
{/* {conditionalRendar(serviceCheck === services.photography) && ( */}

{/* //  )}  */}

        <h1 className="text-center font-20 font-normal color3 mb-5 capitalize">
          {quality}
        </h1>
        {conditionalRendar(fieldProps.values[quality].package==="basic")&&(
  <div className="flex-1 overflow-hidden">
           <DropZone
              label="Basic Package Images"
              files={filesB}
              setFiles={setFilesB}
              fileError={fileError}
              showImage={false}
              fileLimit={5}
              minFileLimit={3}
              dropZoneHeight="h-[140px]"
              dropZoneImgWidth="w-[20px] sm:w-[35px]"
              dropZoneMidText="font-14 md:font-18 mt-[5px]"
              dropZoneEndText="font-12 sm:font-14 mt-[6px]"
            />
</div>
)}
{conditionalRendar(fieldProps.values[quality].package==="standard")&&(
  <div className="flex-1 overflow-hidden">
           <DropZone
              label="Standard Package Images"
              files={filesS}
              setFiles={setFilesS}
              fileError={fileError}
              showImage={false}
              fileLimit={5}
              minFileLimit={3}
              dropZoneHeight="h-[140px]"
              dropZoneImgWidth="w-[20px] sm:w-[35px]"
              dropZoneMidText="font-14 md:font-18 mt-[5px]"
              dropZoneEndText="font-12 sm:font-14 mt-[6px]"
            />
</div>
)}
{conditionalRendar(fieldProps.values[quality].package==="premium")&&(
  <div className="flex-1 overflow-hidden">
           <DropZone
              label="Premium Package Images"
              files={filesP}
              setFiles={setFilesP}
              fileError={fileError}
              showImage={false}
              fileLimit={5}
              minFileLimit={3}
              dropZoneHeight="h-[140px]"
              dropZoneImgWidth="w-[20px] sm:w-[35px]"
              dropZoneMidText="font-14 md:font-18 mt-[5px]"
              dropZoneEndText="font-12 sm:font-14 mt-[6px]"
            />
</div>
)}
        { (
          <>           
            <Input
              label="Price"
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

              {fieldProps.values[quality].customOptionFields.length < 8 ? (
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
