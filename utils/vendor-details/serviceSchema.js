import * as yup from "yup";
// import { checkFile } from "./personanInfoSchema";
let comminvalidation1 = yup
  .string()
  .min(2, "Minimum 2 letter required")
  .max(50, "Maximum 50 letter required")
  .required("Required field");

let deviceNameValidation = yup
  .string()
  .min(2, "Minimum 2 letter required")
  .max(50, "Maximum 50 letter required")
  .matches(
    /(canon|sony|nikon|panasonic|fujifilm)/,
    "Only canon, sony, nikon, panasonic, fujifilm are acceptable"
  )
  .lowercase()
  .required("Required field");

let comminvalidation2 = yup
  .array()
  .min(1, "Pick at least 1 tags")
  .of(
    yup.object().shape({
      id: yup.number().required(),
      label: yup.string().required(),
      value: yup.string().required(),
    })
  );

let comminvalidation3 = yup.mixed().nullable().required("Required field");

let commonschemaEachVebdor = {
  specializedIn: comminvalidation2,
  title: comminvalidation1,
};

let ServiceSchema_Photograpy_cinematograpy = {
  ...commonschemaEachVebdor,
  deviceName: deviceNameValidation,
};
let ServiceSchema_Decoration_printing_press_gift_items = {
  ...commonschemaEachVebdor,
};

let ServiceSchema_Dj_musian = {
  ...commonschemaEachVebdor,
  teamMember: comminvalidation3,
};

let ServiceSchema_MakeUp_MehdiArtist = {
  title: comminvalidation1,
  teamMember: comminvalidation3,
};

let ServiceSchema_BrandPromote = {
  ...commonschemaEachVebdor,
};

let ServiceSchema_Rental = {
  title: comminvalidation1,
  vehicleType: comminvalidation3,
  carModelName: comminvalidation1,
  maxSeatCapacity: comminvalidation1,
  drivingLicenseNumber: comminvalidation1,
  licenseExpiredDate: comminvalidation1,
  // licenseFrontSide: checkFile,
  // licenseBackSide: checkFile,
};

export {
  ServiceSchema_Photograpy_cinematograpy,
  ServiceSchema_Decoration_printing_press_gift_items,
  ServiceSchema_Dj_musian,
  ServiceSchema_MakeUp_MehdiArtist,
  ServiceSchema_BrandPromote,
  ServiceSchema_Rental,
};
