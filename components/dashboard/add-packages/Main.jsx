import React, { useState,useEffect } from "react";
import Link from "next/link";
import LinkIconPink from "../../reUseComponents/icons/LinkIconPink";
import initalValue from "../../../utils/add-packages/initalValue";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import ButtonClick from "../../reUseComponents/ButtonClick";
import schema from "../../../utils/add-packages/schema";
import { useUserOrVendor } from "../../../authContext/AuthContext";
import PackageFrom from "./PackageFrom";
import debounce from "../../../utils/debounceSubmitHandler";
import Loader from "../../reUseComponents/Loader";
import { v4 as uuid } from "uuid";
import services from "../../../utils/services";
import { Storage } from "@aws-amplify/storage";
import { API } from "aws-amplify";
import * as mutations from "../../../src/graphql/mutations";
import {useRouter} from 'next/router'
const Main = ({ addPackAgeInitalValue = initalValue, iseEDit,index,setEditIsOpen }) => {
  const router =useRouter()
  const { verifyUser } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let serviceCheck = attributes?.["custom:service"];
	const [serviceAPI, setserviceAPI] = useState(null);
	const [vData, setvData] = useState(null);
  const [files, setFiles] = useState([]);
  const [fileError, setFileError] = useState(false);
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
	let { dispatch } = useUserOrVendor();
  const [loadImg, setloadImg] = useState(false);
  let prevPackage= storage.vendor?.packages
	async function check() {
		if (serviceCheck === "photography") {
			setserviceAPI(mutations.updatePhotography);
			setvData("updatePhotography");
		}
		if (serviceCheck === "cinematography") {
			setserviceAPI(mutations.updateCinematography);
			setvData("updateCinematography");
		}
		if (serviceCheck === "dj-musician") {
			setserviceAPI(mutations.updateDJMusician);
			setvData("updateDJMusician");
		}
		if (serviceCheck === "mehedi-artist") {
			setserviceAPI(mutations.updateMehediArtist);
			setvData("updateMehediArtist");
		}
		if (serviceCheck === "makeup-artist") {
			setserviceAPI(mutations.updateMakeupArtist);
			setvData("updateMakeupArtist");
		}
	}
  useEffect(() => {
check()
  }, [])
  useEffect(() => {
		if (addPackAgeInitalValue?.packageImage?.length !== 0) {
			addPackAgeInitalValue?.packageImage?.map(async (e) => {
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
  let onSubmit = async (values, actions) => {
    try {
      await debounce(2000);

          let allPackageImage = [];
          if (iseEDit) {
            let i=0
            await files.map(async (e) => {
              const fileName = `PackageImages/${attributes.sub}/${values.packageName.replace(/ /g,"_")}${attributes.sub}${i++}.png`;
              allPackageImage.push(fileName);
          await Storage.put(
                fileName,
                e.file
              )
              
            });
          values.packageImage = [...allPackageImage];
        let details =storage.vendorDetails
        let balance =storage.balance
        let prevPackage= storage.vendor?.packages
        let profile =storage?.profilePicture ||""
        let newData =JSON.stringify(values)
        
        prevPackage[index]= newData
        let data ={id:attributes.sub,packages:prevPackage}
        const updatedVendorDetails = await API.graphql({
          query: serviceAPI,
          variables: { input: data  },
        });
        dispatch({
          type: "UPDATE_SUCCESS",
          payload: {
              vendorDetails: details,
              vendor: updatedVendorDetails.data[vData],
              balance: balance,
              data:"Found",
              profilePicture:profile
            
          },
        })
  
        setFiles([]);
        setFileError(false);
        actions.resetForm();
        toast.success(`Package updated successfully`);
        setEditIsOpen(false)
      }else{
        if (addPackAgeInitalValue.packageImage.length > 0) {
          values.packageImage = [...addPackAgeInitalValue.packageImage];
        } else {
          let allPackageImage = [];
          if (files) {
            let i=0
            await files.map(async (e) => {
              const fileName = `PackageImages/${attributes.sub}/${values.packageName.replace(/ /g,"_")}${attributes.sub}${i++}.png`;
              allPackageImage.push(fileName);
          await Storage.put(
                fileName,
                e.file
              )
              
            });
          }
          values.packageImage = [...allPackageImage];
        }
        let details =storage.vendorDetails
        let balance =storage.balance
        let prevPackage= storage.vendor?.packages
        let profile =storage?.profilePicture ||""
        let newData =JSON.stringify(values)
        let finalData = null
        // work here ==============================
        if(prevPackage === null){
          finalData =[newData]
        }if(prevPackage !== null){
          finalData =[...prevPackage,newData]
        }
        // work here ==============================
        values.id = uuid()
        
 
        let data ={id:attributes.sub,packages:finalData}
        const updatedVendorDetails = await API.graphql({
          query: serviceAPI,
          variables: { input: data  },
        });
        dispatch({
          type: "UPDATE_SUCCESS",
          payload: {
              vendorDetails: details,
              vendor: updatedVendorDetails.data[vData],
              balance: balance,
              data:"Found",
              profilePicture:profile
            
          },
        })
  
        setFiles([]);
        setFileError(false);
        actions.resetForm();
        toast.success(`Package created successfully`);
        router.push("/dashboard/my-package")
      }
    } catch (error) {
      console.error(error);
    }
  };

  let handleClick = (formikValues) => {
    !Object.values(formikValues).every((o) => o === null) && setFileError(true);
  };
  return (
    <>
      <div className="color3 font-14 sm:font-16 flex justify-end">
        <Link href="/documentation">
          <a className="btn-hover">
            <span className="flex gap-1 items-center">
              <span>Documentation</span>
              <span>
                <LinkIconPink />
              </span>
            </span>
          </a>
        </Link>
      </div>
      <Formik
        initialValues={addPackAgeInitalValue}
        validationSchema={schema(serviceCheck)}
        validateOnBlur={true}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
            <PackageFrom
              props={props}
              files={files}
              setFiles={setFiles}
              fileError={fileError}
              serviceCheck={serviceCheck}
              addPackAgeInitalValue={addPackAgeInitalValue}
              iseEDit={iseEDit}
            />

            <ButtonClick
              type="submit"
              width="null"
              padding="px-6 sm:px-14"
              handleClick={() => handleClick(props.values)}
              css={`bgcolor2 text-white rounded-[8px] w-full ml-auto block mt-8 ${
                props.isSubmitting && "opacity-75"
              }`}
              text={
                props.isSubmitting ? (
                  <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                ) : (
                  "Publish"
                )
              }
              disable={props.isSubmitting || (files.length > 0 ? "" : !props.dirty) }
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Main;
