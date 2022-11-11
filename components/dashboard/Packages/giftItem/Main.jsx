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
  // const [image,setImage]=useState(false)

 
  const handleSingle = ()=>{
    setIsSingle(true)
    setIsMultiple(false)
  }
  const handleMultiple = ()=>{
    setIsMultiple(true)
    setIsSingle(false)
  }


  const [inputList,setInputList]=useState([{inputData:'',inputImage:''}])
  console.log(inputList);
  const addBtn =()=>{
    setInputList([...inputList , {inputData:'',inputImage:''}])
  }
  const deleteBtn = (index)=>{
    const list = [...inputList];
    list.splice(index , 1)
    setInputList(list)
  }

  const handleInputData = (e, index)=>{
      const {name,value} = e.target;
      const list = [...inputList];
      list[index][name]=value;
      setInputList(list)
    }

    const handleImageChange = (e,index)=>{
      console.log(index)      
      const file=(e.target.files[0]);
      const name=(e.target.name);
      const list = [...inputList];
      list[index][name]=file;
      setInputList(list)
      // setImage(e.target.files[0])
    }


    const ami = ''
    // console.log(typeof(a));
    if(ami===true){
      console.log("false")
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
      
       
          <form>
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
          <div className="mb-5">
              <label className="inputLabel font-14 sm:font-16 md:font-18  text-[#f30303]">Package Name</label>
              <input autoComplete="off" type="text" name="packageName" placeholder="Enter Name" className="w-full  border-[#f30303] inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px]"  />
                {/* <p className="font-12 text-[#F30303] font-light mb-[-4px] sm:mb[-8px] " >Required field</p> */}
                </div> 


                <div className="mb-5">
                  <label className="inputLabel font-14 sm:font-16 md:font-18  text-[#f30303]">Package Details</label>
                  <textarea rows="6" cols="50" name="packageDetails" placeholder="Enter Details" className="w-full  border-[#f30303] inputdesign  font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px]  h-[unset] py-2 max-h-[400px] resize-y  ">
                  </textarea>
                  {/* <p className="font-12 text-[#F30303] font-light mb-[-4px] sm:mb[-8px] ">Required field</p> */}
                  </div>
					</div>
              </div>

              </div>
             <section className=" md:ml-3">
             <div className="flex">

                    <label
												role={"button"}
												className="mt-[15px] label flex text-base font-normal "
												htmlFor="first-item-checkbox"
											>
												Single
												<input
													onClick={handleSingle}
													role={"button"}
													className=" border-gray-800"
													type="radio"
													id="first-item-checkbox"
													name="Single"													
												/>
												<span className="checkmark ml-[-8px]"></span>
											</label>

                    <label
												role={"button"}
												className="mt-[15px] ml-8 label flex text-base font-normal "
												htmlFor="second-item-checkbox"
											>
												Multiple
												<input
													onClick={handleMultiple}
													role={"button"}
													className=" border-gray-800"
													type="radio"
													id="second-item-checkbox"
													name="Multiple"
												
												/>
												<span className="checkmark ml-[-8px]"></span>
											</label>

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
                <div key={index} className="mt-8 col-span-12 md:col-span-6 flex md:flex-row flex-col justify-between  ">
              <div className="md:w-[75%] ">
              <h2 className="font-16 sm:font-16 md:font-18">Item name {index+1}</h2>
              <div className="mt-2">
              <input 
              name="inputData"
              id="inputData"
              value={singleInput.inputData}
              onChange={(e)=>handleInputData(e, index)}
               className="inpBorderColor w-full inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] bg-auto sm:h-[45px]"
              type="text" placeholder="৳6000"/>
              </div>
              
              {inputList.length - 1 === index && 
              <div className="flex justify-between  mt-2">
             <div>
              {inputList.length < 5 &&
                <button onClick={addBtn} className="text-base px-3 py-1 font-light rounded-md text-white bgcolor2" type="button">Add Extra+</button>
              }
             </div>

                { (inputList.length > 1 && inputList.length <= 5 )&& <button 
                onClick={()=>deleteBtn(index)}
                className="text-white bgcolor2 font-light text-sm px-1 rounded" 
                type="button">
                Delete
                </button>}

              </div>
              } 

              </div>

              <div  className={` mt-3 md:mt-0 ${(inputList[index].inputImage==='') && 'mr-6'}`}>
              <h2 className="font-16 sm:font-16 md:font-18">Image</h2>
              <div className="mt-2 w-[15%] md:w-[10%]">
              <input 
              onChange={(e)=>handleImageChange(e,index)} 
              className="hidden" 
              type="file" 
              name="inputImage" 
              id={index} />                         
              <label role={'button'} htmlFor={index}>
                <div className={`${(inputList[index].inputImage!=='') && 'border-green-500 inputdesign border-2'} ${(inputList[index].inputImage==='') &&'inpBorderColor inputdesign'}  w-full font-14 sm:font-16 md:font-18 rounded-[8px] ${(inputList[index].inputImage!=='') ? 'px-2': 'px-0'}  sm:px-[20px] h-[38px] sm:h-[45px] flex justify-center items-center`}><h1 className={`text-[#8C8C8C] text-3xl `}>{(inputList[index].inputImage==='') ? '+':'✔️'}</h1>
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

            <ButtonClick
              type="submit"
              width="null"
              padding="px-6 sm:px-14"
              className="hover:opacity-[75%]"
              handleClick={''}
              css={`bgcolor2 text-white rounded-[8px] w-full ml-auto block mt-8 
              `}
              text={
               
                  // <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                  'Publish'
               
                 
                
              }
             
            />
          </form>      
    </>
  );
};

export default PhotographyMain;