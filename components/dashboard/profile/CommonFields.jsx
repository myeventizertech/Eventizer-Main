import React from "react";
import SelectInput from "../../reUseComponents/SelectInput";
import MultiSelect from "../../reUseComponents/MultiSelect";
import { FieldArray } from "formik";
import InputError from "../../reUseComponents/InputError";
import Input from "../../reUseComponents/Input";
import services from "../../../utils/services";
import {
  optionsYearsOfExperience,
  optionsPresentLocation,
  optionsServiceLoction,
} from "../../../utils/options";

const CommonFieldShareLink = ({ fieldProps, serviceCheck }) => {
  return (
    <>
        {serviceCheck !== services.rental && (
            <FieldArray
              name="portfolioLink"
              render={({ remove, push }) => (
                <div>
                  {fieldProps.values.portfolioLink.length > 0 &&
                    fieldProps.values.portfolioLink.map((_, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <div className="grow">
                          <Input
                            label="Share your work link"
                            type="text"
                            name={`portfolioLink.${index}.url`}
                            placeholder="Youtube, facebook, vimeo etc link"
                            value={fieldProps.values.portfolioLink[index].url}
                            handleChange={fieldProps.handleChange}
                            handleBlur={fieldProps.handleBlur}
                            error={
                              fieldProps.errors.portfolioLink &&
                              fieldProps.errors.portfolioLink[index] &&
                              fieldProps.touched.portfolioLink &&
                              fieldProps.errors.portfolioLink[index].url
                                ? fieldProps.errors.portfolioLink[index].url
                                : ""
                            }
                          />
                        </div>

                        {fieldProps.values.portfolioLink.length !== 1 && (
                          <div className="flex-none">
                            <button
                              type="button"
                              className="font-30 text-white bgcolor2 w-[30px] h-[30px] rounded-full flex justify-center items-center hover:opacity-75 mt-3"
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              <svg
                                width="15"
                                height="4"
                                viewBox="0 0 15 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.316406"
                                  y="0.845703"
                                  width="13.8462"
                                  height="2.30769"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    ))}

                  {fieldProps.values.portfolioLink.length < 3 ? (
                    <button
                      type="button"
                      className="font-14 font-normal text-white bgcolor2 rounded-full flex justify-center items-center hover:opacity-75 mt-3 px-2 py-1 ml-auto"
                      onClick={() => push({ url: "" })}
                    >
                      Add more +
                    </button>
                  ) : (
                    <InputError text="Reach limit of links" />
                  )}
                </div>
              )}
            />
        )}
    </>
  );
};

export { CommonFieldShareLink };

const CommonFields = ({ fieldProps }) => {
  return (
    <>
      <div>
        <SelectInput
          handleChange={fieldProps.setFieldValue}
          value={fieldProps.values.yearsOfExp}
          options={optionsYearsOfExperience}
          label="Years of experience"
          placeholder="Select year"
          name="yearsOfExp"
          handleBlur={fieldProps.setFieldTouched}
          error={
            fieldProps.touched.yearsOfExp &&
            fieldProps.errors.yearsOfExp &&
            !fieldProps.values.yearsOfExp
              ? fieldProps.errors.yearsOfExp
              : ""
          }
        />
      </div>

      <div>
        <SelectInput
          handleChange={fieldProps.setFieldValue}
          value={fieldProps.values.presentLocation}
          options={optionsPresentLocation}
          label="Present location"
          placeholder="Select location"
          name="presentLocation"
          handleBlur={fieldProps.setFieldTouched}
          error={
            fieldProps.touched.presentLocation &&
            fieldProps.errors.presentLocation &&
            !fieldProps.values.presentLocation
              ? fieldProps.errors.presentLocation
              : ""
          }
        />
      </div>
      <div>
        <MultiSelect
          handleChange={fieldProps.setFieldValue}
          value={fieldProps.values.serviceLocation}
          options={optionsServiceLoction}
          label="Service loction"
          placeholder="Select your area"
          name="serviceLocation"
          handleBlur={fieldProps.setFieldTouched}
          error={
            fieldProps.touched.serviceLocation &&
            fieldProps.errors.serviceLocation &&
            fieldProps.values.serviceLocation.length < 1
              ? fieldProps.errors.serviceLocation
              : ""
          }
        />
      </div>
    </>
  );
};

export default React.memo(CommonFields);
