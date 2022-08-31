import * as yup from "yup";
// import { checkFile } from "../vendor-details/personanInfoSchema";
let mustBeNumberSchema = yup
  .number()
  .typeError("Must be a number")
  .positive("Must be greater than zero")
  .required("Required field");

let validationSingleSelect = yup.mixed().nullable().required("Required field");
let validationSingleSelectOptinal = yup
  .mixed()
  .nullable()
  .notRequired("not Required");

let mustBeNumberOptinalSchema = yup
  .number()
  .typeError("Must be a number")
  .positive("Must be greater than zero")
  .notRequired("Not required");











  
let ServiceSchema_Photograpy = (isOptinal) => {
  return {
    editedPhoto: isOptinal ? mustBeNumberOptinalSchema : mustBeNumberSchema,
    printedCopy: isOptinal ? mustBeNumberOptinalSchema : mustBeNumberSchema,
  };
};

let ServiceSchema_Cinematograpy = (isOptinal) => {
  return {
    trailerDuration: isOptinal
      ? validationSingleSelectOptinal
      : validationSingleSelect,
  };
};

// let ServiceSchema_Decoration = {
//   decorationImage: checkFile,
//   decorationPrice: mustBeNumberSchema,
// };
// let ServiceSchema_GiftItems = {
//   itemPricing: mustBeNumberSchema,
// };

// let ServiceSchema_Print_press = {
//   pricePerPiece: mustBeNumberSchema,
//   quality: yup
//     .string()
//     .min(2, "Minimum 2 letter required")
//     .max(50, "Maximum 50 letter required")
//     .required("Required field"),
// };

export {
  ServiceSchema_Photograpy,
  ServiceSchema_Cinematograpy,
  // ServiceSchema_Decoration,
  // ServiceSchema_GiftItems,
  // ServiceSchema_Print_press,
};
