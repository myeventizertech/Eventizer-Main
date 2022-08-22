import React from "react";
import ButtonClick from "./ButtonClick";
import Input from "./Input";
import Loader from "./Loader";
import { useFormik } from "formik";
import vSchema from "../../utils/SendCodeValidationSchema";

const SendCodeInput = ({
  title,
  label,
  btnText,
  type,
  placeholder,
  center = false,
  uiLoading,
  setFormState,
  handleSendCode,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validateOnBlur: true,
    validationSchema: vSchema,
    onSubmit: async (values) => {
      handleSendCode(values);
    },
  });

  return (
    <div
      className={`send otp text-center h-screen flex flex-col ${
        center && "justify-center"
      }`}
    >
      <h1 className="font-20 color4 sm:font-40 font-normal text-center">
        {title}
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="sm:max-w-[344px] m-auto mt-[18px] text-left">
          <div className="relative">
            <Input
              label={label}
              type={type}
              name="email"
              placeholder={placeholder}
              value={formik.values.email}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""
              }
            />
            <button
              type="button"
              onClick={() => {
                setFormState((prev) => ({
                  ...prev,
                  uistate: "signIn",
                }));
              }}
              className="color3 font-12 sm:font-14 hover:opacity-75 select-none absolute top-1 sm:top-2 right-0"
            >
              Cancle
            </button>
          </div>

          <ButtonClick
            type="submit"
            css={`bgcolor2 font-16 text-white rounded-[8px] mt-[10px] sm:mt-[20px] ${
              uiLoading && "opacity-75"
            }`}
            text={
              uiLoading ? (
                <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
              ) : (
                btnText
              )
            }
            disable={uiLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default SendCodeInput;
