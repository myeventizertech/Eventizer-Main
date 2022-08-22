import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email("Please enter a valid email address").required("Required field"),
  password: yup.string().min(6, "minimum 6 character").required("Required field"),
});
const formikPassWordResetSchema = yup.object({
  otp: yup.string().min(6, "OTP Required").required(),
  password: yup.string().min(6, "minimum 6 character").required("Required field"),
});

export { validationSchema, formikPassWordResetSchema };
