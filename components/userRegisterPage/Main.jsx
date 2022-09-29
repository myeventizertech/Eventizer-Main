import React, { useState } from "react";
import Input from "../reUseComponents/Input";
import { useFormik } from "formik";
import validationSchema from "../../utils/RegisterUserValidationSchema";
import ButtonClick from "../reUseComponents/ButtonClick";
import Link from "next/link";
import { Auth } from "aws-amplify";
import Loader from "../reUseComponents/Loader";
import OTPInput from "../reUseComponents/OTPInput";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import debounce from "../../utils/debounceSubmitHandler";
import { useUserOrVendor } from "../../authContext/AuthContext";
import SocialLogin from "../reUseComponents/SocialLogin";
import useShowPass from "../../utils/useShowPass";
import ShowPass from "../reUseComponents/ShowPass";
import { API } from "aws-amplify";
import * as mutations from "../../src/graphql/mutations";
const Main = () => {
  let { isShow, handleShowClick } = useShowPass();

  const router = useRouter();
  let { setAuthLoader, dispatch } = useUserOrVendor();
  const [userData, setuserData] = useState({});
  const [uiLoading, setUiLoading] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    uistate: "signIn",
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let { email } = values;
      setUiLoading(true);
      try {
        await debounce(500);
        await Auth.signUp({
          username: email,
          password: values.password,
          attributes: {
            email,
            "custom:phone": "01800000000",
            "custom:service": "user",
            "custom:firstName": values.firstName,
            "custom:lastName": values.lastName,
            "custom:userOrvendor": "user",
          },
        }).then(
          setuserData({
            email: email,
            status: "Confirmed",
            firstName: values.firstName,
            lastName: values.lastName
          })
        );

        setFormState((prev) => ({
          ...prev,
          email,
          password: values.password,
          uistate: "confirmSignUp",
        }));
        setUiLoading(false);
        router.push("/user-register");
      } catch (err) {
        console.log({ err });
        setUiLoading(false);
        toast.error(err.message, {
          duration: 2000,
        });
      }
    },
  });

  async function confirmSignUp(event, OTP) {
    event.preventDefault();
    if (OTP.length !== 6) {
      setUiLoading(true);
      await debounce(500);
      toast.error("OTP Required");
      setUiLoading(false);
      return;
    }
    setUiLoading(true);
    setAuthLoader(true);

    try {
      await debounce(500);

      await Auth.confirmSignUp(formState.email, OTP);
      const query = await Auth.signIn(formState.email, formState.password).then(
        () => Auth.currentUserInfo()
      );
      toast.success("Account Create successful", {
        duration: 3000,
      });
      const user = await API.graphql({
        query: mutations.createUser,
        variables: {
          input: {
            id: query.attributes.sub,
            ...userData
          },
        },
      });
      dispatch({
        type: "UPDATE_SUCCESS",
        payload: {
          user: user?.data?.createUser,
          data: "Found",
          profilePicture: "ProfilePicture/User" + query.attributes.sub + ".png"

        },
      });

      router.push("/");
      setUiLoading(false);
    } catch (err) {
      console.log({ err });
      setUiLoading(false);
      setAuthLoader(false);

      toast.error(err.message, {
        duration: 2000,
      });
    }
  }

  return (
    <div className="container pt-24 md:pt-28">
      {formState.uistate === "signIn" && (
        <>
          <div className="sign-box">
            <h1 className="sign-box-title">Create your account</h1>

            <form onSubmit={formik.handleSubmit}>
              <div className="flex gap-3 sm:gap-5">
                <div className="flex-1">
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName && formik.errors.firstName
                        ? formik.errors.firstName
                        : ""
                    }
                  />
                </div>

                <div className="flex-1">
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formik.values.lastName}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && formik.errors.lastName
                        ? formik.errors.lastName
                        : ""
                    }
                  />
                </div>
              </div>
              <>
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Ex: myemail@email.com"
                  value={formik.values.email}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  error={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : ""
                  }
                />
              </>
              <>
                <div className="relative">
                  <Input
                    label="Password"
                    type={isShow ? "text" : "password"}
                    name="password"
                    placeholder="⚹⚹⚹⚹⚹⚹"
                    value={formik.values.password}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    error={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : ""
                    }
                  />
                  {formik.values.password.length > 0 && (
                    <ShowPass
                      handleShowClick={handleShowClick}
                      isShow={isShow}
                    />
                  )}
                </div>
              </>

              <div>
                <p className="font-12 sm:font-14 color1 mb-2 sm:mb-0">
                  By clicking Create Account, you agree to the{" "}
                  <Link href="/terms-of-use">
                    <a target="_blank" className="color3 hover:opacity-75"> Terms of Use{" "}</a>
                  </Link>
                  and{" "}
                  <Link href="/privacy-policy">
                    <a target="_blank" className="color3 hover:opacity-75"> Privacy Policy</a>
                  </Link>
                  .
                </p>
              </div>

              <ButtonClick
                type={"submit"}
                css={`bgcolor2 text-white sm:mt-3 rounded-[8px] ${uiLoading && "opacity-75"
                  }`}
                text={
                  uiLoading ? (
                    <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                  ) : (
                    "Create Account"
                  )
                }
                disable={uiLoading}
              />
            </form>
            <>
              {/* <SocialLogin text="Sign Up" /> */}
            </>
          </div>
          <div className="text-center mt-8">
            <p className="color4 font-14 sm:font-18">
              Already have an account?
              <Link href="/sign-in">
                <a className="color3 hover:opacity-75"> Sign in </a>
              </Link>
            </p>
          </div>
        </>
      )}

      {formState.uistate === "confirmSignUp" && (
        <OTPInput
          title="OTP Verification"
          uiLoading={uiLoading}
          email={formState.email}
          handleSubmit={confirmSignUp}
        />
      )}
    </div>
  );
};

export default Main;
