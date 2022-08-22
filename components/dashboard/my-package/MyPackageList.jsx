import React from "react";
import PackageItem from "./PackageItem";

const MyPackageList = ({ serviceCheck }) => {
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  let Package = storage?.vendor?.packages;
  let PackageAllValue = [];
  async function pack() {
    if (Package?.length != 0 || null) {
      Package?.map((e) => {
        PackageAllValue.push(JSON.parse(e));
      });
    }
  }
  pack();
  return (
    <>
      <h1 className="color5 font-16 md:font-18 px-3">Package List</h1>
      {(Package?.length == null || Package?.length == 0) && (
        <h1 className="color4 font-16 md:font-18 px-3 text-center mt-5">
          You have no package
        </h1>
      )}

      <div className=" bar-thin overflow-x-auto">
        <ul className="min-w-[400px] p-3">
          {PackageAllValue?.map((packageValue, i) => (
            <PackageItem
              allValue={PackageAllValue}
              packageValue={packageValue}
              key={i}
              index={i}
              serviceCheck={serviceCheck}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyPackageList;
