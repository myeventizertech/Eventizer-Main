import React, { useState, useEffect } from "react";
import Link from "next/link";
import LinkIconPink from "../../../reUseComponents/icons/LinkIconPink";
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
import { useRouter } from "next/router";
import DropZone from "../../../reUseComponents/dropZone/DropZone";
import Input from "../../../reUseComponents/Input";
import InputError from "../../../reUseComponents/InputError";
import Tick from "../../../reUseComponents/icons/tick";
import Plus from "../../../reUseComponents/icons/plus";

const GiftMain = () => {
  const router = useRouter();
  const { verifyUser } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let serviceCheck = attributes?.["custom:service"];
  const [serviceAPI, setserviceAPI] = useState(null);
  const [fileError, setFileError] = useState(false);
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));

  const [isSingle, setIsSingle] = useState(false);
  const [isMultiple, setIsMultiple] = useState(false);
  const [packageName, setPackageName] = useState(null);
  const [packageDetail, setPackageDetail] = useState(null);
  const [singleGiftPrice, setSingleGiftPrice] = useState(null);
  const [filesP, setFilesP] = useState([]);
  // const [images,setImages]= useState([])
  const [totalPrice, setTotalPrice] = useState(null);

  const [multipleItem, setMultipleItem] = useState([
    { inputData: undefined, inputPrice: undefined, inputImage: undefined },
  ]);
  const [customize, setCustomize] = useState(false);
  
  const [cPrice, setCPrice]=useState(false)
  const handleSingle = () => {
    setIsSingle(true);
    setIsMultiple(false);
    setSingleGiftPrice(null);
    setMultipleItem([
      { inputData: undefined, inputPrice: undefined, inputImage: undefined },
    ]);
    setTotalPrice((totalPrice = null));
    setCPrice(false)
  };

  const handleMultiple = () => {
    setIsMultiple(true);
    setIsSingle(false);
    setSingleGiftPrice((singleGiftPrice = null));
  };

  const addBtn = () => {
    setMultipleItem([
      ...multipleItem,
      { inputData: undefined, inputPrice: undefined, inputImage: undefined },
    ]);
  };

  const deleteBtn = (index) => {
    const list = [...multipleItem];
    list.splice(index, 1);
    setMultipleItem(list);
  };

  const handlePackageName = (e) => {
    if (e.target.value !== null) {
      setPackageName(e.target.value);
    }
  };
  const handlePackageDetail = (e) => {
    if (e.target.value !== null) {
      setPackageDetail(e.target.value);
    }
  };
  const handleSingleGiftPrice = (e) => {
    if (e.target.value !== null) {
      setSingleGiftPrice(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleInputData = (e, index) => {
    const { name, value } = e.target;
    const list = [...multipleItem];
    list[index][name] = value;
    setMultipleItem(list);
  };

  const [lastPrice, setLastPrice] = useState(0);

  const handleInputPrice = (e, index) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    const list = [...multipleItem];
    list[index][name] = value;
    setMultipleItem(list);

    let priceArray = [];
    multipleItem.map((ip) => {
      priceArray.push(ip.inputPrice);
    });
    let price;
    let sumPrice = 0;
    for (price of priceArray) {
      sumPrice = sumPrice + parseFloat(price);
      // setLastPrice(sumPrice);
      setCustomizedPrice(sumPrice)
    }
  };

  const [inputImageUndefined, setInputImageUndefined] = useState(false);
  const handleImageChange = (e, index) => {
    if (e) {
      setInputImageUndefined(false);
    }
    const file = e.target.files[0];
    const name = e.target.name;
    const list = [...multipleItem];
    list[index][name] = file;
    setMultipleItem(list);
  };
  const [customizedPrice,setCustomizedPrice]=useState(null)
  const handleCustomizePrice = (e) => {
    setCustomizedPrice(e.target.value);
  };

  
  useEffect(()=>{

    if(customize){
      setCPrice(true)
    }else{
      setCPrice(false)
    }
  
  },[customize])
    


  let giftData={
    giftName: packageName,
    giftDescription : packageDetail,
    giftImage: filesP,
    singleGiftPrice: singleGiftPrice,
    multipleItem: multipleItem,
    // totalPackagePrice: lastPrice,
	customizedPrice: customizedPrice,
  cPrice:cPrice
	}

  const [dropMessage, setdropMessage] = useState(false);

  const handleGiftData = async(e) => {
    e.preventDefault();	
    // console.log(images);
	if (filesP.length <= 2) {
      setdropMessage(true);
    }
    multipleItem.map((ip) => {
      if (ip.inputImage == undefined) {
        setInputImageUndefined(true);
      } else {
        setInputImageUndefined(false);
      }
    });
    if (!packageName) {
      setPackageName(false);
    }
    if (!packageDetail) {
      setPackageDetail(false);
    }
    if (!giftData.dropZoneImage) {
      setFilesP(false);
    }
    if (!giftData.singleGiftPrice) {
      setSingleGiftPrice(false);
    }
    if (!giftData.multipleItem) {
      setMultipleItem(false);
    }
    if (!totalPrice) {
      setTotalPrice(false);
    }	
    // if(giftData.singleGiftPrice !==null){
    //   const multiple = await API.graphql({
    //     query: mutations.createGift,
    //     variables: { input: giftData  },
    //   });
    // }
    // if(giftData.singleGiftPrice ===null){
    //   const single = await API.graphql({
    //     query: mutations.createGift,
    //     variables: { input: giftData  },
    //   });
    // }

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

      <form onSubmit={handleGiftData}>
        <div className="md:flex md:flex-row-reverse  ">
          <div className="md:w-[45%] ml-auto">
            <DropZone
              label="Please Upload Gift Images"
              files={filesP}
              setFiles={setFilesP}
              fileError={fileError}
              showImage={false}
              fileLimit={5}
              minFileLimit={2}
              dropZoneHeight="md:h-[280px] h-[170px]"
              dropZoneImgWidth="w-[20px] sm:w-[35px]"
              dropZoneMidText="font-14 md:font-18 mt-[5px]"
              dropZoneEndText="font-12 sm:font-14 mt-[6px]"
            />
            {filesP.length <= 1 && dropMessage && (
              <p className="font-12 text-[#F30303] font-light mt-1 mb-[-4px] sm:mb[-8px] ">
                Please upload minimum 2 images
              </p>
            )}
          </div>

          <div className="md:w-[45%] mr-auto">
            <div className="flex-1">
              <div className="mb-5">
                <label
                  className={`inputLabel font-14 sm:font-16 md:font-18 
              ${packageName === null && "text-black"} ${
                    !packageName && "text-[#F30303]"
                  }`}
                >
                  Package Name
                </label>
                <input
                  onChange={(e) => handlePackageName(e)}
                  autoComplete="off"
                  type="text"
                  name="packageName"
                  placeholder="Enter Name"
                  className={`${
                    !packageName  && "border-[#f30303]"
                  }  ${packageName === null && "inpBorderColor"}  w-full  inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px]`}
                />
                {!packageName && packageName !== null && (
                  <p className="font-12 text-[#F30303] font-light mt-1 mb-[-4px] sm:mb[-8px] ">
                    Required field
                  </p>
                )}
              </div>

              <div className="mb-5">
                <label
                  className={`inputLabel font-14 sm:font-16 md:font-18 ${
                    packageDetail === null && "text-black"
                  } ${!packageDetail && "text-[#F30303]"}`}
                >
                  Package Detail
                </label>
                <textarea
                  onChange={(e) => handlePackageDetail(e)}
                  autoComplete="off"
                  rows="6"
                  cols="50"
                  name="packageDetails"
                  placeholder="Enter Details"
                  className={`w-full ${
                    packageDetail === null && "inpBorderColor"
                  }  ${
                    !packageDetail && "border-[#F30303]"
                  } inputdesign  font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px]  h-[unset] py-2 max-h-[400px] resize-y  `}
                ></textarea>
                {!packageDetail && packageDetail !== null && (
                  <p className="font-12 text-[#F30303] font-light mb-[-4px] sm:mb[-8px] ">
                    Required field
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <section className=" md:ml-3">
          <div className="flex">
            <div>
              <label
                role={"button"}
                className={`mt-[15px] label flex text-base font-normal `}
                htmlFor="first-item-checkbox"
              >
                Single
                <input
                  onClick={handleSingle}
                  role={"button"}
                  className=" border-gray-800"
                  type="radio"
                  id="first-item-checkbox"
                  name="Selection"
                />
                <span className="checkmark ml-[-8px]"></span>
              </label>
            </div>

            <div>
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
                  name="Selection"
                />
                <span className="checkmark ml-[-8px]"></span>
              </label>
            </div>
          </div>

          {isSingle && (
            <div className="mt-8">
              <h2
                className={`text-lg  ${
                  singleGiftPrice == null && "text-black"
                } ${singleGiftPrice == false && "text-[#F30303]"}`}
              >
                Price
              </h2>
              <div className="mt-2">
                <input
                  autoComplete="Off"
                  onChange={(e) => handleSingleGiftPrice(e)}
                  className={`${singleGiftPrice == null && "inpBorderColor"} ${
                    singleGiftPrice == false && "border-[#F30303]"
                  }  w-full md:w-[47%] inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px]`}
                  type="text"
                  placeholder="৳6000"
                />
                {singleGiftPrice == false && singleGiftPrice != null && (
                  <p className="font-12 mt-1 text-[#F30303] font-light mb-[-4px] sm:mb[-8px] ">
                    Required field
                  </p>
                )}
              </div>
            </div>
          )}

          {isMultiple && (
            <div>
              <div className="w-full  grid grid-cols-12 ">
                {multipleItem.map((singleInput, index) => (
                  <div
                    key={index}
                    className="mt-8 col-span-12 md:col-span-6 flex md:flex-row flex-col justify-between  "
                  >
                    <div className="md:w-[75%] ">
                      <h2
                        className={`font-16 sm:font-16 md:font-18  ${
                          multipleItem[index].inputData == undefined &&
                          "text-black"
                        } ${!multipleItem[index].inputData && "text-[#F30303]"}`}
                      >
                        Item name {index + 1}
                      </h2>
                      <div className="mt-2">
                        <input
                          name="inputData"
                          id="inputData"
                          autoComplete="off"		
                          onChange={(e) => handleInputData(e, index)}
                          className={`${
                            multipleItem[index].inputData == undefined &&
                            "inpBorderColor"
                          }${
                            !multipleItem[index].inputData && "border-[#F30303]"
                          } w-full inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] bg-auto sm:h-[45px]`}
                          type="text"
                          placeholder="Name"
                        />

                        {multipleItem[index].inputData == undefined &&
                          multipleItem[index].inputData != null && (
                            <p className="font-12 mt-1 text-[#F30303] font-light mb-[-4px] sm:mb[-8px] ">
                              Required field
                            </p>
                          )}

                        <div className="mt-2">
                          <h2
                            className={`font-16 sm:font-16 md:font-18  ${
                              multipleItem[index].inputPrice == undefined &&
                              "text-black"
                            } ${
                              !multipleItem[index].inputPrice && "text-[#F30303]"
                            }`}
                          >
                            Price
                          </h2>
                          <input
                            name="inputPrice"
                            autoComplete="off"
                            onChange={(e) => handleInputPrice(e, index)}
                            className={`${
                              multipleItem[index].inputData == undefined &&
                              "inpBorderColor"
                            }${
                              !multipleItem[index].inputData && "border-[#F30303]"
                            } w-[50%] inputdesign  font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] bg-auto sm:h-[45px]`}
                            type="number"
                            placeholder="৳6000"
                          />

                          {!multipleItem[index].inputPrice  && multipleItem[index].inputPrice != null && (
                            <p className="font-12 mt-1 text-[#F30303] font-light mb-[-4px] sm:mb[-8px] ">
                              Required field
                            </p>
                          )}
                        </div>
                      </div>

                      {multipleItem.length - 1 === index && (
                        <div className="flex justify-between  mt-2">
                          <div>
                            {multipleItem.length < 10 && (
                              <button
                                onClick={addBtn}
                                className="text-base px-3 py-1 font-light rounded-md text-white bgcolor2"
                                type="button"
                              >
                                Add Extra+
                              </button>
                            )}
                          </div>

                          {multipleItem.length > 1 && multipleItem.length <= 10 && (
                            <button
                              onClick={() => deleteBtn(index)}
                              className="text-white bgcolor2 font-light text-sm px-1 rounded"
                              type="button"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    <div
                      className={` mt-3 md:mt-0 mr-3 ${
                        multipleItem[index].inputImage == undefined && "mr-0"
                      } ${!multipleItem[index].inputImage && "mt-6"}`}
                    >
                      <h2
                        className={`font-16 sm:font-16 md:font-18 ${
                          multipleItem[index].inputImage == undefined &&
                          "text-black"
                        } ${!multipleItem[index].inputImage && "text-[#F30303]"}`}
                      >
                        Image
                      </h2>
                      <div className="mt-2 w-[15%] md:w-[10%]">
                        <input
                          onChange={(e) => handleImageChange(e, index)}
                          className="hidden"
                          type="file"
                          name="inputImage"
                          id={index}
                        />
                        <label role={"button"} htmlFor={index}>
                          <div
                            className={` ${
                              multipleItem[index].inputImage != false
                                ? "border-green-500 inputdesign border-2"
                                : "border-red-500"
                            } ${
                              multipleItem[index].inputImage == undefined &&
                              "inpBorderColor inputdesign"
                            }  w-full font-14 sm:font-16 md:font-18 rounded-[8px] ${
                              multipleItem[index].inputImage != undefined
                                ? "px-2"
                                : "px-0"
                            }  sm:px-[20px] h-[38px] sm:h-[45px] flex justify-center items-center`}
                          >
                            <div>
                              {!multipleItem[index].inputImage ? (
                                <Plus />
                              ) : (
                                <Tick />
                              )}
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {inputImageUndefined !== false && (
                <p className="text-sm my-2 text-left text-[#F30303] font-light mb-[-4px] sm:mb[-8px] ">
                  Please upload item image
                </p>
              )}

              <div className="md:w-[45%] mt-8">
                <div>
                  Do you want to customize your price?
                  <div className="flex">
                    <div>
                      <label
                        role={"button"}
                        className={`mt-[15px] label flex text-base font-normal `}
                        htmlFor="No"
                      >
                        No
                        <input
                          onClick={()=>setCustomize(false)}
							defaultChecked
						  role={"button"}
                          className=" border-gray-800"
                          type="radio"
                          id="No"
                          name="Customization"
                        />
                        <span className="checkmark ml-[-8px]"></span>
                      </label>
                    </div>

                    <div>
                      <label
                        role={"button"}
                        className="mt-[15px] ml-8 label flex text-base font-normal "
                        htmlFor="Yes"
                      >
                        Yes
                        <input
                          onClick={()=>setCustomize(true)}
                          role={"button"}
                          className=" border-gray-800"
                          type="radio"
                          id="Yes"
						  
                          name="Customization"
                        />
                        <span className="checkmark ml-[-8px]"></span>
                      </label>
                    </div>
                  </div>
                </div>

                {customize ? (
                  <div className="mt-5">
                    <h2
                      className={`${customizedPrice == null && " text-black"}  font-14 sm:font-16 md:font-18`}
                    >
                      Customize Total Price
                    </h2>
                    <div className="mt-2">
                      <input
                        onChange={(e) => handleCustomizePrice(e)}
                        className={`${customizedPrice == null && "inpBorderColor"} w-full inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] bg-auto sm:h-[45px]`}
                        type="number"
                        placeholder="৳6000"
                        readOnly={false}
                      />
                    </div>
                  </div>
                ) : 
				<div className="mt-5">
                    <h2
                      className={` text-black font-14 sm:font-16 md:font-18`}
                    >
                   Total Price
                    </h2>

                    <div className="mt-2">
                      <input
                       
                        className={`${customizedPrice === null && "inpBorderColor"}  w-full inputdesign font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] bg-auto sm:h-[45px]`}
                        type="number"
						value={customizedPrice}
                        placeholder="৳6000"
                        readOnly={true}
                      />
                    </div>
                  </div>
				}
                {/* {lastPrice == false && lastPrice != null && (
                  <p className="font-12 mt-1 text-[#F30303] font-light mb-[-4px] sm:mb[-8px] ">
                    Required field
                  </p>
                )} */}
              </div>
            </div>
          )}
        </section>

        <input
          role={"button"}
          type="submit"
          className={` bgcolor2  hover:opacity-[75%] shadow-[0px_3.72px_33.49px_0px_rgba(239,13,94,0.3)]   text-white rounded-[8px] w-full ml-auto block mt-8 px-6 sm:px-14  py-2 text-lg font-normal `}
          value="Publish"

        />
      </form>
    </>
  );
};

export default GiftMain;
