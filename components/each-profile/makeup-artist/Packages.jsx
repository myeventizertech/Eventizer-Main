import React, { useEffect, useState } from "react";
import placeholder from "../../../utils/imageBlurLoader";
import { Storage } from "aws-amplify";
import { useRouter } from "next/router";
let PackageItem = ({ data, vendorData, bool, boolval, setorder }) => {
  // const [modalItemIsOpen, setItemIsOpen] = React.useState(false);
  let router = useRouter();
  // let data =item||[]
  const [slideImg, setslideImg] = useState([]);

  useEffect(() => {
    if (slideImg.length === 0) {
      data?.packageImage?.map(async (e) => {
        let signedURL = await Storage.get(e);
        let url = signedURL;
        const data = await fetch(url);
        if (data.ok) {
          setslideImg((prev) => {
            return [...prev, url];
          });
        } else {
          return;
        }
      });
    }
  }, []);
  return (
    <>
      <div className="p-3 bg-white rounded flex justify-between items-center gap-2 sm:gap-3">
        <div className="flex gap-3 items-center">
          <div className="relative w-12 h-12 overflow-hidden rounded shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slideImg?.[0] || "/img/placeholder-image.png"}
              alt={"package image"}
              className="absolute object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="color4 font-12 sm:font-14 font-normal">
              {data.packageName}
            </h2>
          </div>
        </div>
        <div>
          {/* <button
            // onClick={() => setItemIsOpen(true)}
            className="color2 font-12 sm:font-14 font-normal btn-hover"
          >
            View details
          </button> */}
        </div>
        <div>
          <button
            onClick={() => {
              bool(true);
              setorder(vendorData);
            }}
            className="text-white bgcolor2 font-12 sm:font-14 px-2 py-1 font-normal btn-hover whitespace-nowrap"
          >
            Book now
          </button>
        </div>
      </div>

      {/* {modalItemIsOpen && (
        <div className="modal-cover flex-center z-[100] ">
          <div className="max-w-[800px] mx-auto">boom</div>
          <button
            onClick={() => setItemIsOpen(false)}
            className="text-white bgcolor1 btn-hover px-4 py-1 font-20 rounded-[4px] font-light absolute top-5 right-5"
          >
            close
          </button>
        </div>
      )} */}
    </>
  );
};

const Packages = ({ data, bool, boolval, setorder, setvendor }) => {
  const [n, setn] = useState(3);
  let dataArray = data?.packages || [];

  const [packages, setpackages] = useState([]);
  useEffect(() => {
    let newArray = [];
    setvendor(data);
    dataArray.map((e) => {
      newArray.push(JSON.parse(e));
    });
    setpackages(newArray);
  }, []);

  return (
    <div
      className="mdx:h-[26rem]  overflow-x-auto hide w-full rounded-md p-4 sm:p-7"
      style={{
        background:
          "linear-gradient(160.95deg, #EF0D5E 28.19%, #DA1674 60.41%)",
      }}
    >
      <h1 className="text-white font-semibold font-18 sm:font-24 mdx:font-32">
        Packages
      </h1>
      <p className="text-[#E0E0E0] font-14 mb-4">
        Choose your preferable package
      </p>

      {packages?.slice(0, n).map((item, i) => {
        return (
          <div className="mt-2" key={i}>
            <PackageItem
              data={item}
              vendorData={item}
              bool={bool}
              boolval={boolval}
              setorder={setorder}
            />
          </div>
        );
      })}
      {packages?.length > n ? (
        <button
          onClick={() => {
            setn(n + 2);
          }}
          className="text-white mt-5 btn-hover mx-auto block font-12 sm:font-14 font-light btn-hover"
        >
          Show More
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Packages;
