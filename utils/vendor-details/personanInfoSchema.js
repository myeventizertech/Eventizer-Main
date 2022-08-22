import * as yup from "yup";

let checkFile = yup
  .mixed()
  .test("fileSize", "File size too large, max file size is 3 Mb", (file) =>
    file ? file.size <= 3145728 : true
  )
  .test("fileType", "Incorrect file type", (file) =>
    file
      ? ["image/png", "image/jpg", "image/jpeg", "image/webp"].includes(
          file.type
        )
      : true
  )
  .required("Required field");
let personalInfoSchema = {
  detailsAboutYou: yup
    .string()
    .min(50, "Minimum 50 letter required")
    .max(500, "Maximum 500 letter required")
    .required("Required field"),
  yourAddress: yup
    .string()
    .min(5, "Minimum 5 letter required")
    .required("Required field"),

  // uploadYourPhoto: checkFile,
  // nidFrontSide: checkFile,
  // nidBackSide: checkFile,
};
export { checkFile };
export default personalInfoSchema;
