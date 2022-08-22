import * as yup from "yup";
const vSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
});

export default vSchema ;
