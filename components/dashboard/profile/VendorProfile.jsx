import React, { useState, useEffect } from "react";
import VendorDetailsService from "./VendorDetailsService";
import StepPeronalInfo from "./StepPersonalInfo";
import { Formik, Form } from "formik";
import StepSubmitButton from "./StepSubmitButton";
import { initalValue } from "../../../utils/vendor-details/initalValue";
import schema from "../../../utils/vendor-details/schema";
import { useUserOrVendor } from "../../../authContext/AuthContext";
import Loader from "../../reUseComponents/Loader";
import toast from "react-hot-toast";
import finaSubmitToBackEnd from "../../../utils/vendor-details/finaSubmitToBackEnd";
import debounce from "../../../utils/debounceSubmitHandler";
import DropZone from "../../reUseComponents/dropZone/DropZone";
import imageCompression from "browser-image-compression";
import { API } from "aws-amplify";
import ButtonClick from "../../reUseComponents/ButtonClick";
import { Storage } from "@aws-amplify/storage";
import * as queris from "../../../src/graphql/queries";
import * as mutations from "../../../src/graphql/mutations";
import { v4 as uuid } from "uuid";
import ChangePassword from "./ChangePassword";

const VendorProfile = ({ attributes, service }) => {
  const currentValidationSchema = schema(service);
  const [files, setFiles] = useState([]);
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  let { dispatch } = useUserOrVendor();
  const [fileError, setFileError] = useState(false);
  const [images, setImages] = useState(null);
  const [imagesLoad, setImagesLoad] = useState(null);
  const [imagesf, setImagesf] = useState(null);
  const [imagesLoadf, setImagesLoadf] = useState(null);
  const [imagesb, setImagesb] = useState(null);
  const [imagesLoadb, setImagesLoadb] = useState(null);
  const [serviceAPI, setserviceAPI] = useState(null);
  const [vData, setvData] = useState(null);
  const [loadImg, setloadImg] = useState(false);
  const id = attributes.sub;
  const [dataV, setdataV] = useState({});
  async function check() {
    if (service === "photography") {
      setserviceAPI(mutations.updatePhotography);
      setvData("updatePhotography");
    }
    if (service === "cinematography") {
      setserviceAPI(mutations.updateCinematography);
      setvData("updateCinematography");
    }
    if (service === "dj-musician") {
      setserviceAPI(mutations.updateDJMusician);
      setvData("updateDJMusician");
    }
    if (service === "mehedi-artist") {
      setserviceAPI(mutations.updateMehediArtist);
      setvData("updateMehediArtist");
    }
    if (service === "makeup-artist") {
      setserviceAPI(mutations.updateMakeupArtist);
      setvData("updateMakeupArtist");
    }
  }

  useEffect(() => {
    let specialized = [];
    let sLocation = [];
    let pLink = [];
    let key = storage?.profilePicture;
    let keyf = storage?.vendorDetails?.nidFrontSide;
    let keyb = storage?.vendorDetails?.nidBackSide;

    async function getImages() {
      const signedURL = await Storage.get(key);
      const response = await fetch(signedURL);

      if (response.status == 200) {
        setImages(signedURL);
      } else if (response.status === 404) {
        return;
      }
    }
    async function getImagesf() {
      if (keyf !== undefined) {
        const signedURL = await Storage.get(keyf);
        const response = await fetch(signedURL);

        if (response.status == 200) {
          setImagesf(signedURL);
        } else if (response.status === 404) {
          return;
        }
      }
    }
    async function getImagesb() {
      if (keyb !== undefined) {
        const signedURL = await Storage.get(keyb);
        const response = await fetch(signedURL);

        if (response.status == 200) {
          setImagesb(signedURL);
        } else if (response.status === 404) {
          return;
        }
      }
    }

    getImages();
    getImagesf();
    getImagesb();
    if (storage.vendor?.specializedIn?.length != 0 || null) {
      storage.vendor?.specializedIn?.map((e) => {
        specialized.push(JSON.parse(e));
      });
    }
    if (storage.vendor?.serviceLocation?.length != 0 || null) {
      storage.vendor?.serviceLocation?.map((e) => {
        sLocation.push(JSON.parse(e));
      });
    }
    if (storage.vendor?.portfolioLink?.length != 0 || null) {
      storage.vendor?.portfolioLink?.map((e) => {
        pLink.push(JSON.parse(e));
      });
    }
    let number = storage?.vendorDetails?.phoneNumber;
    setdataV({
      // serivce info
      firstName: storage?.vendorDetails?.firstName || "",
      lastName: storage?.vendorDetails?.lastName || "",
      phone: number?.substring(3) || "",
      NIDNumber: storage?.vendorDetails?.nidNumber || "",
      specializedIn: specialized,
      title: storage?.vendor?.title || "",
      deviceName: storage?.vendor?.deviceName || "",
      teamMember: !storage?.vendor?.teamMember
        ? ""
        : JSON.parse(storage?.vendor?.teamMember),

      yearsOfExp: !storage?.vendor?.yearsOfExperience
        ? ""
        : JSON.parse(storage?.vendor?.yearsOfExperience),
      presentLocation: !storage?.vendor?.presentLocation
        ? ""
        : JSON.parse(storage?.vendor?.presentLocation),
      serviceLocation: sLocation,
      portfolioLink: !storage?.vendor?.portfolioLink
        ? [{ url: "" }]
        : JSON.parse(storage?.vendor?.portfolioLink),

      // personal info
      detailsAboutYou: storage?.vendor?.detailsAboutYou || "",
      yourAddress: storage?.vendorDetails?.presentLocation || "",

      // uploadYourPhoto: undefined,
      // nidFrontSide: undefined,
      // nidBackSide: undefined,
      vehicleType: "",
      carModelName: "",
      maxSeatCapacity: "",
      drivingLicenseNumber: "",
      licenseExpiredDate: "",
      licenseFrontSide: undefined,
      licenseBackSide: undefined,

      // personal info
      uploadYourPhoto: undefined,
      nidFrontSide: undefined,
      nidBackSide: undefined,
    });

    // localStorage.removeItem("AmpUserInfo")

    check();
  }, []);
  useEffect(() => {
    if (files.length === 0) {
      storage.vendor?.portfolioImage?.map(async (e) => {
        let signedURL = await Storage.get(e);
        let url = signedURL;
        const data = await fetch(url);
        if (data.ok) {
          const result = await data.blob();
          //   var blob = new Blob([result], { type: "image/png" });
          setFiles((prev) => {
            return [...prev, { file: result }];
          });
        } else {
          setloadImg(false);
        }
      });
      setloadImg(true);
    }
  }, []);

  let onSubmit = async (values) => {
    await debounce(1000);

    try {
      await finaSubmitToBackEnd(
        values,
        service,
        attributes,
        dispatch,
        serviceAPI,
        vData
      );
      toast.success("Upadate success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <>
        {/* image code============================= */}

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
                    "ProfilePicture/Vendor" + attributes.sub + ".png",
                    file,{
  level: "public",
}
                  );
                  uuid();
                  dispatch({
                    type: "UPDATE_SUCCESS",
                    payload: {
                      vendorDetails: storage.vendorDetails,
                      vendor: {
                        ...storage.vendor,
                        uploadYourPhoto: result.key,
                      },
                      balance: storage.balance,
                      data: "Found",
                      profilePicture: result.key,
                    },
                  });
                } catch (error) {}
              }}
              accept="image/png, image/jpg, image/jpeg, image/webp"
            />
          </div>
        </div>

        {/* image dropzone ================== */}
        <div className="form-header-step-2 mb-5">
          <h2 className="multiStepHeader">Upload Portfolio Images</h2>
        </div>
        <DropZone
          files={files}
          setFiles={setFiles}
          fileError={fileError}
          fileLimit={10}
          minFileLimit={3}
          loads={loadImg}
        />
        <ButtonClick
          type="button"
          css={"bgcolor2 text-white rounded-full m-auto block mt-5"}
          width="null"
          text={"Upload Images"}
          padding="px-6 sm:px-14"
          disable={files.length === 0 ? true : false}
          handleClick={async () => {
            let int = 0;
            let array = [];

            await files.map(async (e) => {
              let string = `PortfolioImages/${attributes.sub}/${
                attributes.sub
              }${int++}.png`;
              array.push(string);
              await Storage.put(string, e.file);
            });

            const updatedVendorDetails = await API.graphql({
              query: serviceAPI,
              variables: {
                input: { id: attributes.sub, portfolioImage: array },
              },
            });
            dispatch({
              type: "UPDATE_SUCCESS",
              payload: {
                vendorDetails: storage.vendorDetails,
                vendor: updatedVendorDetails.data[vData],
                balance: storage.balance,
                data: "Found",
                profilePicture: storage.profilePicture,
              },
            });
            toast.success("Upload Completed");
          }}
        />
        <div className="sm:flex gap-x-5 mt-5">
          <div className="w-1/2">
            <h2 className="multiStepHeader ">NID Frontside</h2>
            <div className=" bg-opacity-60 mt-5">
              <div className=" ">
                {imagesf && (
                  //  eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={
                      typeof imagesf === "object"
                        ? URL.createObjectURL(imagesf)
                        : imagesf
                    }
                    alt="image upload"
                    className="inline-block object-cover object-center w-full "
                  />
                )}
              </div>
              <div>
                <label htmlFor={"im2"}>
                  <span
                    className="bgcolor1 px-3 py-2 font-14 sm:font-18 
							font-normal text-white rounded-md cursor-pointer text-center block mt-5 ml-auto"
                  >
                    {imagesLoadf ? <Loader colorDefault={false} /> : "Upload"}
                  </span>
                </label>

                <input
                  type="file"
                  name="im2"
                  id={"im2"}
                  className="fixed opacity-0 pointer-events-none"
                  onChange={async (value) => {
                    const targetFile = value.target.files[0];
                    setImagesLoadf(true);
                    try {
                      const file = await imageCompression(targetFile, {
                        maxSizeMB: 1,
                        maxWidthOrHeight: 1024,
                        useWebWorker: true,
                      });

                      setImagesf(file);
                      setImagesLoadf(false);

                      //code here
                      const result = await Storage.put(
                        "VendorNID/Vendor" +
                          attributes.sub +
                          "FrontSide" +
                          ".png",
                        file
                      );
                      let key = result.key;
                      const updatedVendorDetails = await API.graphql({
                        query: mutations.updateVendor,
                        variables: {
                          input: {
                            id: attributes.sub,
                            nidFrontSide: key,
                          },
                        },
                      });
                      uuid();
                      let nData = updatedVendorDetails?.data?.updateVendor;

                      dispatch({
                        type: "UPDATE_SUCCESS",
                        payload: {
                          vendorDetails: nData,
                          vendor: storage.vendor,
                          balance: storage.balance,
                          data: "Found",
                          profilePicture: storage.profilePicture,
                        },
                      });
                    } catch (error) {}
                  }}
                  accept="image/png, image/jpg, image/jpeg, image/webp"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="multiStepHeader">NID Backside</h2>
            <div className=" bg-opacity-60 mt-5">
              <div className=" ">
                {imagesb && (
                  //  eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={
                      typeof imagesb === "object"
                        ? URL.createObjectURL(imagesb)
                        : imagesb
                    }
                    alt="image upload"
                    className="inline-block object-cover object-center w-full"
                  />
                )}
              </div>
              <div>
                <label htmlFor={"im3"}>
                  <span
                    className="bgcolor1 px-3 py-2 font-14 sm:font-18 
							font-normal text-white rounded-md cursor-pointer text-center block mt-5 ml-auto"
                  >
                    {imagesLoadb ? <Loader colorDefault={false} /> : "Upload"}
                  </span>
                </label>

                <input
                  type="file"
                  name="im3"
                  id={"im3"}
                  className="fixed opacity-0 pointer-events-none"
                  onChange={async (value) => {
                    const targetFile = value.target.files[0];
                    setImagesLoadb(true);
                    try {
                      const file = await imageCompression(targetFile, {
                        maxSizeMB: 1,
                        maxWidthOrHeight: 1024,
                        useWebWorker: true,
                      });

                      setImagesb(file);
                      setImagesLoadb(false);

                      //code here
                      const result = await Storage.put(
                        "VendorNID/Vendor" +
                          attributes.sub +
                          "BackSide" +
                          ".png",
                        file
                      );
                      uuid();
                      let key = result.key;
                      const updatedVendorDetails = await API.graphql({
                        query: mutations.updateVendor,
                        variables: {
                          input: {
                            id: attributes.sub,
                            nidBackSide: key,
                          },
                        },
                      });
                      uuid();
                      let nData = updatedVendorDetails?.data?.updateVendor;
                      dispatch({
                        type: "UPDATE_SUCCESS",
                        payload: {
                          vendorDetails: nData,
                          vendor: storage.vendor,
                          balance: storage.balance,
                          data: "Found",
                          profilePicture: storage.profilePicture,
                        },
                      });
                    } catch (error) {}
                  }}
                  accept="image/png, image/jpg, image/jpeg, image/webp"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ================================ */}

        {dataV.serviceLocation ? (
          <Formik
            initialValues={dataV}
            validationSchema={currentValidationSchema}
            validateOnBlur={true}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <VendorDetailsService
                  fieldProps={props}
                  serviceCheck={service}
                  attributes={attributes}
                />
                <StepPeronalInfo fieldProps={props} />
                {/* submit */}
                <StepSubmitButton fieldProps={props} />
              </Form>
            )}
          </Formik>
        ) : (
          <div>Loading</div>
        )}

        <ChangePassword />
      </>
    </>
  );
};

export default VendorProfile;
