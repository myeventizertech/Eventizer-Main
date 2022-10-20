import React, { useState, useEffect } from "react";
import Link from "next/link";
import OrderForm from "./OrderForm";
import PackageDetails from "./PackageDetails";
import Close from "../../../reUseComponents/icons/Close";
import GoBack from "../../../reUseComponents/icons/GoBack";
import { useRouter } from "next/router";
import { Storage } from "aws-amplify"
import InformationModal from "../../../reUseComponents/InformationModal";
const Main = ({ vendor, bool, boolval, setorder, orderData, service }) => {
  const router = useRouter();
  const [modal,setModal]= useState(false)
  const [showForm, setShowForm] = useState(false);
  const [passData, setPassData] = useState({});
  const [Files, setFiles] = useState([])
  const [firstPage, setFirstPage] = useState(false)
  const [fourthPage, setFourthPage] = useState(false)

  const handleBack = ()=>{
   setShowForm(false) ,setModal(true)

  }

  let handleSHowOrderFrom = (quality) => {

    let obj = {
      ...orderData[quality],
      packageStandard: quality,
      vendorID: vendor?.id,
      vendorNumber: vendor?.phoneNumber,
      title: vendor?.title,
      vendorEmail: vendor?.email,
      packName: orderData?.packageName,
      service: service
    }
    setPassData(obj);
    setShowForm(true);
  };
  function checkData() {
    if (orderData?.packageImage?.length !== 0) {
      orderData?.packageImage?.map(async (e) => {
        let signedURL = await Storage.get(e);
        let url = signedURL;
        const data = await fetch(url);
        if (data.ok) {

          setFiles(prev => {
            return [...prev, url]
          });

        } else {
          return
        }
      });
    }
  }
  useEffect(() => {
    checkData()
  }, [])
  let checkIsHave = (quality) => {
    if (
      orderData?.[quality].pricePerHour ||
      orderData?.[quality].pricePerDay
    ) {
      return true;
    }
    return false;
  };



  return (
    <>
      <div className={` container pt-24`}>
     {modal&&   <InformationModal setModal={setModal} setShowForm={setShowForm} fourthPage={fourthPage} setFourthPage={setFourthPage} firstPage={firstPage} setFirstPage={setFirstPage} modal={modal} />}

     {!modal && <div>
      
     {!showForm && (
          <>
            <button  className="py-5">
              <GoBack />
            </button>
            <div>
              <h3 className="font-22 font-normal color3">{orderData?.packageName}</h3>
              <p className="color1 font-14">
                {orderData?.packageDetails}
              </p>
            </div>

            <>
              <div className=" overflow-hidden">
                <>
                  <div>
                    <div className="overflow-x-auto p-5 flex gap-3 bar-thin">
                      {Files?.map((item, i) => {
                        return (
                          <div key={i}>
                            <div className="w-[300px] inline-block ">
                              <div className="w-full h-[10rem] bg-[#e7e6ea]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={item}
                                  alt="package-images"
                                  className="mx-auto block h-full"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              </div>
            </>


            {orderData?.packageDemoLink && <div className="mt-8">
              <Link href={orderData?.packageDemoLink}>
                <a className=" font-16 btn-hover bgcolor1 text-white rounded-md py-1 px-2 font-normal">
                  See package demo Link
                </a>
              </Link>
            </div>
            }


            <div className="grid grid-cols-1 md:grid-cols-2 mdx:grid-cols-3 gap-8 mt-7">
              {/* ====================== */}
              {checkIsHave("basic") && (

                <div>
                  <PackageDetails
                    quality="basic"
                    packageValue={orderData}
                    handleClick={handleSHowOrderFrom}
                    setModal={setModal}
                    setFirstPage={setFirstPage}
                    setFourthPage={setFourthPage}
                    firstPage={firstPage}
                  />
                </div>
              )}
              {/* ====================== */}
              {checkIsHave("standard") && (

                <div>
                  <PackageDetails
                    quality="standard"
                    packageValue={orderData}
                    handleClick={handleSHowOrderFrom}
                  />
                </div>
              )}
              {/* ========================= */}
              {checkIsHave("premium") && (

                <div>
                  <PackageDetails
                    quality="premium"
                    packageValue={orderData}
                    handleClick={handleSHowOrderFrom}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {showForm && (
          <>
            <div className="max-w-[40rem] mx-auto my-5 bg-white rounded p-6 shadow-lg">
              
            <header className='h-[73px] max-w-[40rem] w-[100%] mb-5  pl-[-24px] pr-[-24px] drop-shadow'>
              
            <div className='flex justify-between '>
                    <div className='flex items-center pt-5'>
                      <button onClick={handleBack}>
                      <GoBack></GoBack>
                      </button>
                        <h1 className='text-2xl font-normal ml-5'>Makeup Artist</h1>
                    </div>
                    <div className='pt-5'>
                       <button onClick={()=>setShowForm(false)}>
                       {/* <CLoso></CLoso> */}
                <Close />
                       </button>
                    </div>
                </div>
                </header>
              {/* <button
                onClick={() => setShowForm(false)}
                className="ml-auto block mb-5"
              >
              </button> */}
              <OrderForm passData={passData} vendor={vendor} setShowForm={setShowForm} />
            </div>
          </>
        )}
        
     </div>}
      </div>
      
    </>
  );
};

export default Main;
