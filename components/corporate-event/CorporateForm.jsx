import React, { useState, useEffect } from "react";
import Input from "../reUseComponents/Input";
import { Formik, Form, FieldArray } from "formik";
import InputError from "../reUseComponents/InputError";
import DatePicker from "react-datepicker";
import moment from "moment";
import ButtonClick from "../reUseComponents/ButtonClick";
import ButtonLinkOrClick from "../reUseComponents/ButtonLinkOrClick";
import Loader from "../reUseComponents/Loader";
import * as yup from "yup";
import { API } from "aws-amplify";
import * as mutations from "../../src/graphql/mutations";
import { useUserOrVendor } from "../../authContext/AuthContext";
import { v4 as uuid } from "uuid";

let EventDate = ({ fieldProps, error }) => {
  let [rawDate, setRawDatw] = useState("");
  return (
    <>
      <DatePicker
        selected={rawDate}
        name={"eventDate"}
        onChange={(value) => {
          setRawDatw(value);
          fieldProps.setFieldValue(
            "eventDate",
            moment(value).format("DD/MM/YYYY") === "Invalid date"
              ? null
              : moment(value).format("DD/MM/YYYY")
          );
        }}
        showPopperArrow={false}
        className={`inputdesign w-full font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px]
                      ${error ? "border-[#f30303]" : "inpBorderColor"}`}
        placeholderText="dd/MM/yyyy"
        minDate={moment().toDate()}
        onFocus={(e) => (e.target.readOnly = true)}
        dateFormat="dd/MM/yyyy"
      />
      {error && <InputError text={error} />}
    </>
  );
};
const BDNUM = /^01[23456789][0-9]{8}\b/g;
let cmnSchema = yup
  .string()
  .min(2, "Minimum 2 letter required")
  .max(1000, "Maximum 1000 letter required")
  .required("Company Name is required");
let validationSchema = yup.object().shape({
  corporateService: yup.array().of(
    yup.object().shape({
      requiredService: yup
        .string()
        .min(2, "Minimum 2 letter required")
        .max(1000, "Maximum 1000 letter required")
        .required("Required"),
      targetBudget: yup
        .number()
        .typeError("Must be a number")
        .positive("Must be greater than zero")
        .notRequired("Not required"),
      qdhValue: yup
        .number()
        .typeError("Must be a number")
        .positive("Must be greater than zero")
        .notRequired("Not required"),
    })
  ),

  name: yup
    .string()
    .min(2, "Minimum 2 letter required")
    .max(1000, "Maximum 1000 letter required")
    .required("Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),

  companyName: cmnSchema,

  phoneNumber: yup
    .string()
    .matches(BDNUM, "Enter valid BD Number")
    .required("Required field"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required field"),
  eventTitle: cmnSchema,
  eventLocation: cmnSchema,
  eventDate: yup.mixed().nullable().required("Required field"),
  description: yup
    .string()
    .min(5, "Minimum 5 letter required")
    .max(500, "Maximum 500 letter required")
    .required("Required field"),
});

let intVal = {
  corporateService: [
    { requiredService: "", targetBudget: "", qdh: "days", qdhValue: "" },
  ],
  name: "",
  companyName: "",
  phoneNumber: "",
  email: "",
  eventTitle: "",
  eventLocation: "",
  eventDate: "",
  description: "",
};
const CorporateForm = () => {
  let [isDOne, setisDone] = useState(false);
  const { verifyUser } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let onSubmit = async (values) => {
    let totalBudget = values.corporateService.reduce(
      (partialSum, a) => partialSum + Number(a.targetBudget),
      0
    );
    try {
      const createMyplan = {
        id: uuid(),
        brief: values.corporateService.map((item) =>
          JSON.stringify({ ...item })
        ),
        name: values.name,
        companyName: values.companyName,
        phoneNumber: values.phoneNumber,
        email: values.email,
        eventTitle: values.eventTitle,
        eventLocation: values.eventLocation,
        eventDate: values.eventDate,
        status: "Pending",
        userID: attributes.sub,
        description: values.description,
        totalBudget,
        fileLink: "",
      };
      await API.graphql({
        query: mutations.createPlan,
        variables: { input: createMyplan },
      });
      console.log(createMyplan);
      setisDone(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container m-all">
        <h2 className="multiStepHeader">Share your Brief</h2>

        <Formik
          initialValues={intVal}
          validationSchema={validationSchema}
          validateOnBlur={true}
          onSubmit={onSubmit}
        >
          {(fieldProps) => (
            <Form>
              <div className="multistepeer">
                <FieldArray
                  name={`corporateService`}
                  render={({ remove, push }) => (
                    <div>
                      {fieldProps.values.corporateService.map((_, index) => (
                        <div key={index}>
                          <div className="gap-x-5 grid sm:grid-cols-2">
                            <div>
                              <Input
                                label="Required Service"
                                type="text"
                                name={`corporateService.${index}.requiredService`}
                                placeholder="Ex: anything"
                                value={
                                  fieldProps.values.corporateService[index]
                                    .requiredService
                                }
                                handleChange={fieldProps.handleChange}
                                handleBlur={fieldProps.handleBlur}
                                error={
                                  fieldProps.errors.corporateService &&
                                    fieldProps.errors.corporateService[index] &&
                                    fieldProps.touched.corporateService &&
                                    fieldProps.errors.corporateService[index]
                                      .requiredService
                                    ? fieldProps.errors.corporateService[index]
                                      .requiredService
                                    : ""
                                }
                              />
                            </div>
                            <div>
                              <Input
                                label="Target Budget"
                                type="number"
                                name={`corporateService.${index}.targetBudget`}
                                placeholder="Ex: 1000000"
                                value={
                                  fieldProps.values.corporateService[index]
                                    .targetBudget
                                }
                                handleChange={fieldProps.handleChange}
                                handleBlur={fieldProps.handleBlur}
                                error={
                                  fieldProps.errors.corporateService &&
                                    fieldProps.errors.corporateService[index] &&
                                    fieldProps.touched.corporateService &&
                                    fieldProps.errors.corporateService[index]
                                      .targetBudget
                                    ? fieldProps.errors.corporateService[index]
                                      .targetBudget
                                    : ""
                                }
                              />
                            </div>
                            <div className="relative">
                              <Input
                                otherCSS="pr-[7.25rem]"
                                label="Quantity/Days/Hours"
                                type="number"
                                name={`corporateService.${index}.qdhValue`}
                                placeholder="Number"
                                value={
                                  fieldProps.values.corporateService[index]
                                    .qdhValue
                                }
                                handleChange={fieldProps.handleChange}
                                handleBlur={fieldProps.handleBlur}
                                error={
                                  fieldProps.errors.corporateService &&
                                    fieldProps.errors.corporateService[index] &&
                                    fieldProps.touched.corporateService &&
                                    fieldProps.errors.corporateService[index]
                                      .qdhValue
                                    ? fieldProps.errors.corporateService[index]
                                      .qdhValue
                                    : ""
                                }
                              />

                              <select
                                name={`corporateService.${index}.qdh`}
                                value={
                                  fieldProps.values.corporateService[index].qdh
                                }
                                onChange={fieldProps.handleChange}
                                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 -right-10 pl-1  block color1 font-normal capitalize outline-[#ef0d5e]  border-l border-gray-400 h-[35px] mt-[2px] sm:mt-1 md:mt-1.5"
                              >
                                {["quantity", "days", "hour"].map((item, i) => {
                                  return (
                                    <option value={item} label={item} key={i}>
                                      {item}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          {fieldProps.values.corporateService.length !== 1 && (
                            <button
                              type="button"
                              className="font-14 color3 border border-[#ef0d5e] px-3 py-.5  rounded-[4px] hover:opacity-75 mt-2 block ml-auto"
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      ))}

                      {fieldProps.values.corporateService.length < 10 ? (
                        <button
                          type="button"
                          className="font-14 font-normal text-white bgcolor2 rounded-[4px] flex justify-center items-center hover:opacity-75 px-2 py-1 ml-auto mt-5"
                          onClick={() =>
                            push({ requiredService: "", targetBudget: "", qdh: "days", qdhValue: "" })
                          }
                        >
                          Add More +
                        </button>
                      ) : (
                        <InputError text="Reach limit of Extra Service" />
                      )}
                    </div>
                  )}
                />

                <h2 className="coolor4 font-18 sm:font-22 font-normal my-4">
                  Contact info
                </h2>
                <div className="gap-x-5 grid sm:grid-cols-2">
                  <div>
                    <Input
                      label="Name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={fieldProps.values.name}
                      handleChange={fieldProps.handleChange}
                      handleBlur={fieldProps.handleBlur}
                      error={
                        fieldProps.touched.name && fieldProps.errors.name
                          ? fieldProps.errors.name
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Input
                      label="Company Name"
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={fieldProps.values.companyName}
                      handleChange={fieldProps.handleChange}
                      handleBlur={fieldProps.handleBlur}
                      error={
                        fieldProps.touched.companyName &&
                          fieldProps.errors.companyName
                          ? fieldProps.errors.companyName
                          : ""
                      }
                    />
                  </div>
                </div>

                <div className="gap-x-5 grid sm:grid-cols-2">
                  <div>
                    <Input
                      label="Phone Number"
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={fieldProps.values.phoneNumber}
                      handleChange={fieldProps.handleChange}
                      handleBlur={fieldProps.handleBlur}
                      error={
                        fieldProps.touched.phoneNumber &&
                          fieldProps.errors.phoneNumber
                          ? fieldProps.errors.phoneNumber
                          : ""
                      }
                    />
                  </div>
                  <div>
                    <Input
                      label="Email"
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={fieldProps.values.email}
                      handleChange={fieldProps.handleChange}
                      handleBlur={fieldProps.handleBlur}
                      error={
                        fieldProps.touched.email && fieldProps.errors.email
                          ? fieldProps.errors.email
                          : ""
                      }
                    />
                  </div>
                </div>

                <h2 className="coolor4 font-18 sm:font-22 font-normal my-4">
                  Event Info
                </h2>
                <div className="gap-x-5 grid sm:grid-cols-2">
                  <div>
                    <Input
                      label="Event Title"
                      type="text"
                      name="eventTitle"
                      placeholder="Event Title"
                      value={fieldProps.values.eventTitle}
                      handleChange={fieldProps.handleChange}
                      handleBlur={fieldProps.handleBlur}
                      error={
                        fieldProps.touched.eventTitle &&
                          fieldProps.errors.eventTitle
                          ? fieldProps.errors.eventTitle
                          : ""
                      }
                    />
                  </div>

                  <div>
                    <Input
                      label="Event Location"
                      type="text"
                      name="eventLocation"
                      placeholder="Event Location"
                      value={fieldProps.values.eventLocation}
                      handleChange={fieldProps.handleChange}
                      handleBlur={fieldProps.handleBlur}
                      error={
                        fieldProps.touched.eventLocation &&
                          fieldProps.errors.eventLocation
                          ? fieldProps.errors.eventLocation
                          : ""
                      }
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="inputLabel font-14 sm:font-16 md:font-18  color4">
                    Event Date
                  </label>

                  <EventDate
                    fieldProps={fieldProps}
                    error={
                      fieldProps.touched.eventDate &&
                        fieldProps.errors.eventDate
                        ? fieldProps.errors.eventDate
                        : ""
                    }
                  />
                </div>
                <div>
                  <Input
                    label="Description"
                    istextArea={true}
                    name="description"
                    placeholder="Write something"
                    value={fieldProps.values.description}
                    handleChange={fieldProps.handleChange}
                    handleBlur={fieldProps.handleBlur}
                    error={
                      fieldProps.touched.description &&
                        fieldProps.errors.description
                        ? fieldProps.errors.description
                        : ""
                    }
                  />
                </div>

                <ButtonClick
                  type="submit"
                  css={
                    "bgcolor2 text-white rounded-full ml-auto block mt-8 tracking-wider"
                  }
                  width="w-full"
                  text={
                    fieldProps.isSubmitting ? (
                      <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                    ) : (
                      "Submit"
                    )
                  }
                  padding="px-6 sm:px-10"
                  disable={fieldProps.isSubmitting || !fieldProps.dirty}
                  font="font-20 sm:font-24"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {isDOne && (
        <div className="modal-cover flex-center ">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white p-5 rounded">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/thanks-robot.png"
                alt="thanks icon"
                className="w-28 mx-auto"
              />
              <p className="color4 font-16 sm:font-18 my-3 text-center">
                Thank you for your submission. Our team will review your inquiry
                and send you a quotation within one business day. If you require
                any other services, please contact our customer service team by
                phone at +8801765017650 or by email at team.eventizer@gmail.com.
              </p>

              <ButtonLinkOrClick
                isLink={true}
                text="Go To Dashboard"
                font="font-14 md:font-20 font-normal"
                goto="/dashboard/my-plans"
                radius="rounded-[1000px]"
                py="py-[10px]"
                px=" px-[30px] mdx:px-[45px]"
                otherCss="text-center font-medium bg-[#BA4DAF] block mt-5"
                bgcolor="bg-[#BA4DAF]"
              />
            </div>
          </div>
          <button
            onClick={() => setisDone(false)}
            className="text-white bgcolor1 btn-hover px-4 py-1 font-20 rounded-[4px] font-light absolute top-5 right-5"
          >
            close
          </button>
        </div>
      )}
    </>
  );
};

export default CorporateForm;
