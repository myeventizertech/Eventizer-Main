import React, { useState, useEffect } from "react";
import Input from "../../reUseComponents/Input";
import StepSubmitButton from "./StepSubmitButton";
import { Formik, Form } from "formik";
import debounce from "../../../utils/debounceSubmitHandler";
import * as yup from "yup";
import { API, Auth } from "aws-amplify";
import Loader from "../../reUseComponents/Loader";
import * as mutations from "../../../src/graphql/mutations";
import { v4 as uuid } from "uuid";
import { Storage } from "@aws-amplify/storage";
import imageCompression from "browser-image-compression";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
const BDNUM = /^01[23456789][0-9]{8}\b/g;

let userSchema = yup.object().shape({
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
      (val && val.toString().length == 10) ||
      (val && val.toString().length == 17)
        ? true
        : false
    )
    .required("Required field"),
});
import { useUserOrVendor } from "../../../authContext/AuthContext";
import ChangePassword from "./ChangePassword";

const UserProfile = ({ attributes }) => {

  let router = useRouter();
  let { redirect, path } = router.query;
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  const [images, setImages] = useState(null);
  let number = storage.user?.phoneNumber;
  number = number?.substring(3);
  let { dispatch } = useUserOrVendor();
  let id = storage.user?.id;
  const [imagesLoad, setImagesLoad] = useState(null);
  let userD = storage?.user;

  useEffect(() => {
    let key = storage.profilePicture;
    async function getImages() {
      const signedURL = await Storage.get(key);
      const response = await fetch(signedURL);

      if (response.status == 200) {
        setImages(signedURL);
      } else if (response.status === 404) {
        return;
      }
    }
    getImages();
  }, []);

  let onSubmit = async (values) => {
    await debounce(1000);
    try {
      const userFromCognito = await Auth.currentAuthenticatedUser();
      userFromCognito.Session = userFromCognito.signInUserSession;
      Auth.updateUserAttributes(userFromCognito, {
        "custom:firstName": values.firstName,
        "custom:lastName": values.lastName,
      });
      const user = await API.graphql({
        query: mutations.updateUser,
        variables: {
          input: {
            id: id,
            firstName: values.firstName,
            lastName: values.lastName,
            phoneNumber: "+88" + values.phone,
            nidNumber: values.NIDNumber,
            profilePicture: "ProfilePicture/User" + id + ".png",
          },
        },
      });

      dispatch({
        type: "UPDATE_SUCCESS",
        payload: {
          user: user.data.updateUser,
          data: "Found",
          profilePicture: "ProfilePicture/User" + id + ".png",
        },
      });
      toast.success("Upadate success");
      if (redirect === "true") {
        router.push(path);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="multiStepHeader">Profile Picture</h2>
      <div className="m-2 sm:m-6 flex gap-5 items-center  max-w-[400px] bg-opacity-60 p-4 rounded-md">
        <div className="sm:w-36 sm:h-36 w-20 h-20  rounded-full bg-rose-500">
          {images && (
            //  eslint-disable-next-line @next/next/no-img-element
            <img
              src={
                typeof images === "object"
                  ? URL.createObjectURL(images)
                  : images
              }
              alt="image upload"
              className="inline-block object-cover object-center sm:w-36 sm:h-36 w-20 h-20  rounded-full"
            />
          )}
        </div>
        <div>
          <label htmlFor={"im1"}>
            <span className="bgcolor1 px-3 py-2 font-14 sm:font-18 font-normal text-white rounded-md cursor-pointer text-center inline-block">
              {imagesLoad ? <Loader colorDefault={false} /> : "Upload"}
            </span>
          </label>

          <input
            type="file"
            name="im1"
            id={"im1"}
            className="fixed opacity-0 pointer-events-none"
            onChange={async (value) => {
              const targetFile = value.target.files[0];
              setImagesLoad(true);
              try {
                const file = await imageCompression(targetFile, {
                  maxSizeMB: 1,
                  maxWidthOrHeight: 1024,
                  useWebWorker: true,
                });

                setImages(file);
                setImagesLoad(false);
                //code here
                const result = await Storage.put(
                  "ProfilePicture/User" + id + ".png",
                  file
                );
                uuid();
                dispatch({
                  type: "UPDATE_SUCCESS",
                  payload: {
                    user: userD,
                    data: "Found",
                    profilePicture: "ProfilePicture/User" + id + ".png",
                  },
                });
              } catch (error) {}
            }}
            accept="image/png, image/jpg, image/jpeg, image/webp"
          />
        </div>
      </div>
      <h2 className="multiStepHeader">Account Information</h2>

      <Formik
        initialValues={{
          firstName: storage?.user?.firstName || "",
          lastName: storage?.user?.lastName || "",
          phone: number || "",
          NIDNumber: storage?.user?.nidNumber || "",
        }}
        validationSchema={userSchema}
        validateOnBlur={true}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <div className="multistepeer">
              <div className="gap-x-5 grid sm:grid-cols-2 ">
                <div>
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={props.values.firstName}
                    handleChange={props.handleChange}
                    handleBlur={props.handleBlur}
                    error={
                      props.touched.firstName && props.errors.firstName
                        ? props.errors.firstName
                        : ""
                    }
                  />
                </div>

                <div>
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={props.values.lastName}
                    handleChange={props.handleChange}
                    handleBlur={props.handleBlur}
                    error={
                      props.touched.lastName && props.errors.lastName
                        ? props.errors.lastName
                        : ""
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="inputLabel">Email Address</label>
                  <input
                    type="text"
                    defaultValue={attributes?.email}
                    readOnly
                    className="inputdesign inpBorderColor w-full font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px] opacity-70 pointer-events-none"
                  />
                </div>

                <div>
                  <Input
                    label="Phone Number"
                    type="text"
                    name="phone"
                    placeholder="018XXXXXXXX"
                    value={props.values.phone}
                    handleChange={props.handleChange}
                    handleBlur={props.handleBlur}
                    error={
                      props.touched.phone && props.errors.phone
                        ? props.errors.phone
                        : ""
                    }
                  />
                </div>
                <div>
                  <Input
                    label="NID Number"
                    type="text"
                    name={`NIDNumber`}
                    placeholder="909 897 8989"
                    value={props.values.NIDNumber}
                    handleChange={props.handleChange}
                    handleBlur={props.handleBlur}
                    error={
                      props.touched.NIDNumber && props.errors.NIDNumber
                        ? props.errors.NIDNumber
                        : ""
                    }
                  />
                </div>
              </div>
            </div>

            <StepSubmitButton fieldProps={props} />
          </Form>
        )}
      </Formik>

      <ChangePassword/>
    </>
  );
};

export default UserProfile;
