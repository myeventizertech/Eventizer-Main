import * as yup from "yup";

const validationSchema = yup.object({
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
  email: yup.string().email("Please enter a valid email address").required("Required field"),
  password: yup.string().min(6, "minimum 6 character").required("Required field"),
});
export default validationSchema;
