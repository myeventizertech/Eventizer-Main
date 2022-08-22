import * as yup from "yup";
import URLREGEX from "../Url_Regex";
const BDNUM = /^01[23456789][0-9]{8}\b/g;

let commonFieldSchema = (check) => {
  let res = {
    firstName: yup
      .string()
      .min(2, "Minimum 2 letter required")
      .max(50, "Maximum 50 letter required")
      .required("First Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),

    lastName: yup
      .string()
      .min(2, "Minimum 2 letter required")
      .max(50, "Maximum 50 letter required")
      .required("Last name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    phone: yup
      .string()
      .matches(BDNUM, "Enter valid BD Number")
      .required("Required field"),
    NIDNumber: yup
      .number()
      .typeError("Must be a number")
      .positive("Must be greater than zero")
      .test("minMax", "Digit must be 10 or 17", (val) =>
       ( (val && val.toString().length == 10) || (val && val.toString().length == 17)) ? true : false
      )
     
      .required("Required field"),
    yearsOfExp: yup.mixed().nullable().required("Required field"),
    presentLocation: yup.mixed().nullable().required("Required field"),
    serviceLocation: yup
      .array()
      .min(1, "Pick at least 1 tags")
      .of(
        yup.object().shape({
          id: yup.number().required(),
          label: yup.string().required(),
          value: yup.string().required(),
        })
      ),
    portfolioLink: yup.array().of(
      yup.object().shape({
        url: check
          ? yup
              .string()
              .matches(URLREGEX, "URL is not valid")
              .required("Required")
          : yup
              .string()
              .matches(URLREGEX, "URL is not valid")
              .notRequired("Not required"),
      })
    ),
  };
  return res;
};

export default commonFieldSchema;
