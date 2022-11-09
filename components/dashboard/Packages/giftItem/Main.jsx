import React, { useState,useEffect } from "react";
import Link from "next/link";
import LinkIconPink from '../../../reUseComponents/icons/LinkIconPink'
import initalValue from "../../../../utils/add-packages/initalValue";
import { Formik, Form, FieldArray } from "formik";
import toast from "react-hot-toast";
import ButtonClick from "../../../reUseComponents/ButtonClick";
import schema from "../../../../utils/add-packages/schema";
import { useUserOrVendor } from "../../../../authContext/AuthContext";
import PackageFrom from "./PackageForm";
import debounce from "../../../../utils/debounceSubmitHandler";
import Loader from "../../../reUseComponents/Loader";
import { v4 as uuid } from "uuid";
import services from "../../../../utils/services";
import { Storage } from "@aws-amplify/storage";
import { API } from "aws-amplify";
import * as mutations from "../../../../src/graphql/mutations";
import {useRouter} from 'next/router'
import DropZone from "../../../reUseComponents/dropZone/DropZone";
import Input from "../../../reUseComponents/Input";
import InputError from "../../../reUseComponents/InputError";

const PhotographyMain = ({ addPackAgeInitalValue = initalValue, iseEDit,index,setEditIsOpen }) => {
  const router =useRouter()
  const { verifyUser } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let serviceCheck = attributes?.["custom:service"];
	const [serviceAPI, setserviceAPI] = useState(null);
	const [vData, setvData] = useState(null);
  const [files, setFiles] = useState([]);
  const [filesB, setFilesB] = useState([]);
  const [filesS, setFilesS] = useState([]);
  const [filesP, setFilesP] = useState([]);
  const [fileError, setFileError] = useState(false);
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
	let { dispatch } = useUserOrVendor();
  const [loadImg, setloadImg] = useState(false);
  let prevPackage= storage.vendor?.packages
  
  const [isSingle,setIsSingle]=useState(false)
  const [isMultiple,setIsMultiple]=useState(false)
  const [image,setImage]=useState(false)

 
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
  useEffect(() => {
		if (addPackAgeInitalValue?.basic?.packageImage?.length !== 0) {
			addPackAgeInitalValue?.basic?.packageImage?.map(async (e) => {
				let signedURL = await Storage.get(e);
				let url = signedURL;
				const data = await fetch(url);
				if (data.ok) {
					const result = await data.blob();
					//   var blob = new Blob([result], { type: "image/png" });
					setFilesB((prev) => {
						return [...prev, { file: result }];
					});
				} else {
					setloadImg(false);
				}
			});
			setloadImg(true);
		}
	}, []);
  useEffect(() => {
		if (addPackAgeInitalValue?.standard?.packageImage?.length !== 0) {
			addPackAgeInitalValue?.standard?.packageImage?.map(async (e) => {
				let signedURL = await Storage.get(e);
				let url = signedURL;
				const data = await fetch(url);
				if (data.ok) {
					const result = await data.blob();
					//   var blob = new Blob([result], { type: "image/png" });
					setFilesS((prev) => {
						return [...prev, { file: result }];
					});
				} else {
					setloadImg(false);
				}
			});
			setloadImg(true);
		}
	}, []);
  useEffect(() => {
		if (addPackAgeInitalValue?.premium?.packageImage?.length !== 0) {
			addPackAgeInitalValue?.premium?.packageImage?.map(async (e) => {
				let signedURL = await Storage.get(e);
				let url = signedURL;
				const data = await fetch(url);
				if (data.ok) {
					const result = await data.blob();
					//   var blob = new Blob([result], { type: "image/png" });
					setFilesP((prev) => {
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
          let allPackageImageB = [];
          let allPackageImageS = [];
          let allPackageImageP = [];
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
          if (filesB) {
            let i=0
            await filesB.map(async (e) => {
              const fileName = `PackageImages/${attributes.sub}/Basic/${values.packageName.replace(/ /g,"_")}${attributes.sub}${i++}.png`;
              allPackageImageB.push(fileName);
          await Storage.put(
                fileName,
                e.file
              )
              
            });
          }
          if (filesS) {
            let i=0
            await filesS.map(async (e) => {
              const fileName = `PackageImages/${attributes.sub}/Standard/${values.packageName.replace(/ /g,"_")}${attributes.sub}${i++}.png`;
              allPackageImageS.push(fileName);
          await Storage.put(
                fileName,
                e.file
              )
              
            });
          }
          if (filesP) {
            let i=0
            await filesP.map(async (e) => {
              const fileName = `PackageImages/${attributes.sub}/Premium/${values.packageName.replace(/ /g,"_")}${attributes.sub}${i++}.png`;
              allPackageImageP.push(fileName);
          await Storage.put(
                fileName,
                e.file
              )
              
            });
          }
          values.packageImage = [...allPackageImage];
          values.standard.packageImage = [...allPackageImageS];
          values.basic.packageImage = [...allPackageImageB];
          values.premium.packageImage = [...allPackageImageP];
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

  const handleSingle = ()=>{
    setIsSingle(true)
    setIsMultiple(false)
  }
  const handleMultiple = ()=>{
    setIsMultiple(true)
    setIsSingle(false)
  }

  const [inputList,setInputList]=useState([{inputData:''}])
  const addBtn =()=>{
    setInputList([...inputList , {inputData:''}])         
  }
  const deleteBtn = (index)=>{
    const list = [...inputList];
    list.splice(index , 1)
    setInputList(list)
  }


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
            <div className="md:flex md:flex-row-reverse  ">

            <div className="md:w-[45%] mx-auto">

              <DropZone
              label="Please Upload Gift Images"
              files={filesP}
              setFiles={setFilesP}
              fileError={fileError}
              showImage={false}
              fileLimit={5}
              minFileLimit={3}
              dropZoneHeight="md:h-[280px] h-[170px]"
              dropZoneImgWidth="w-[20px] sm:w-[35px]"
              dropZoneMidText="font-14 md:font-18 mt-[5px]"
              dropZoneEndText="font-12 sm:font-14 mt-[6px]"
              />
              </div>

          <div className="md:w-[45%] mx-auto">




          <div className="flex-1">
						<Input
							label={
								serviceCheck === services.giftItems
									? "Item Name"
									: "Package Name" && serviceCheck === services.brandPromoter
									? "Promoter Name"
									: "Package Name"
							}
							type="text"
							name="packageName"
							placeholder={"Enter Name"}
							value={props.values.packageName}
							handleChange={props.handleChange}
							handleBlur={props.handleBlur}
							error={
								props.touched.packageName && props.errors.packageName
									? props.errors.packageName
									: ""
							}
						/>

						<Input
							istextArea={true}
							textareaHeight={"6"}
							label={
								serviceCheck === services.giftItems
									? "Item Details"
									: "Package Details" && serviceCheck === services.brandPromoter
									? "Promoter Experience"
									: "Package Details"
							}
							name="packageDetails"
							placeholder={"Enter Details"}
							value={props.values.packageDetails}
							handleChange={props.handleChange}
							handleBlur={props.handleBlur}
							error={
								props.touched.packageDetails && props.errors.packageDetails
									? props.errors.packageDetails
									: ""
							}
						/>
					</div>
              </div>

              </div>
             <section className=" md:ml-3">
             <div className="flex">
             <div   className=' '>
                    <input onClick={handleSingle} className='mt-[15px]' type="radio" name="First item" id="first-item-checkbox" />
                    <label role={'button'} className='text-base font-normal ml-2' htmlFor="first-item-checkbox">Single</label>
                    </div>
             <div   className='ml-8'>
                    <input onClick={handleMultiple} className='mt-[15px]'  type="radio" name="First item" id="second-item-checkbox" />
                    <label role={'button'} className='text-base font-normal ml-2' htmlFor="second-item-checkbox">Multiple</label>
                    </div>
             </div>

             {(isSingle )&&
             <div className="mt-8">
              <h2 className="text-lg">Price</h2>
              <div className="mt-2">
              <input className="inpBorderColor w-full md:w-[47%] inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px]" type="text" placeholder="৳6000"/>
              </div>
              </div>
              }

              {(isMultiple )&& <div>
                <div className="w-full  grid grid-cols-12 ">
             {inputList.map((singleInput,index)=>
                <div key={index} className="mt-8 col-span-6 flex md:flex-row flex-col justify-between  ">
              <div className="md:w-[75%] ">
              <h2 className="font-16 sm:font-16 md:font-18">Item name 1</h2>
              <div className="mt-2">
              <input onChange={(e)=>console.log(e.target.value)} className="inpBorderColor w-full inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] bg-auto sm:h-[45px]" type="text" placeholder="৳6000"/>
              </div>
              
              {inputList.length - 1 === index && 
              <div className="flex justify-between  mt-2">
             <div>
              {inputList.length < 5 &&
                <button onClick={addBtn} className="" type="button">add more+</button>
              }
             </div>

                { (inputList.length > 1 && inputList.length <= 5 )&& <button 
                onClick={()=>deleteBtn(index)}
                className="text-white bgcolor2 text-sm px-1 rounded" 
                type="button">
                Delete
                </button>}

              </div>
              } 

              </div>

              <div  className={` mt-3 md:mt-0`}>
              <h2 className="font-16 sm:font-16 md:font-18">Image</h2>
              <div className="mt-2 w-[15%] md:w-[10%]">
              <input  onClick={()=>setImage(!image)} className="hidden" type="file" name="" id="image1" />
              <label htmlFor="image1">
                <div className={`${image && 'border-green-500 inputdesign border-2'} ${!image &&'inpBorderColor inputdesign'}  w-full font-14 sm:font-16 md:font-18 rounded-[8px] ${!image ? 'px-2': 'px-0'}  sm:px-[20px] h-[38px] sm:h-[45px] flex justify-center items-center`}><h1 className={`text-[#8C8C8C] text-3xl w-[40px]`}>{!image ? '+':'✔️'}</h1>
                </div>
              </label>
              </div>
              </div>
              </div>
             )}                      
              </div>
 
              <div className="md:w-[45%] mt-8">
              <h2 className="font-14 sm:font-16 md:font-18">Total Price</h2>
              <div className="mt-2">
              <input className="inpBorderColor w-full inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] bg-auto sm:h-[45px]" type="text" placeholder="৳6000"/>
              </div>
              </div>
              </div>
              }
              </section> 

                {/* Testing */}

              


      
                {/* Testing */}



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

export default PhotographyMain;