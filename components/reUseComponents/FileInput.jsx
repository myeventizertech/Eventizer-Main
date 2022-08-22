import React, { useState } from "react";
import InputError from "../reUseComponents/InputError";
import Loader from "./Loader";
import imageCompression from "browser-image-compression";

let optionsSignglwFileComp = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1024,
  useWebWorker: true,
};

const FileInput = ({
  name,
  label,
  title,
  width = "w-full",
  handleChange,
  handleBlur,
  value,
  error = "",
  isMust = false,
  labelDesign = "font-14 sm:font-16 md:font-18",
  showImageName = true,
}) => {
  const [load, setload] = useState(false);
  return (
    <>
      <div className="mb-5">
        <h3
          className={`inputLabel ${labelDesign} ${
            error ? "text-[#f30303]" : "color4"
          }`}
        >
          {label}
          {isMust && <span className="text-[#FF4242]"> *</span>}
        </h3>
        <label htmlFor={name}>
          <div
            className={`file-upload-select border ${
              error ? "border-[#f30303]" : "inpBorderColor"
            } font-16 font-normal rounded-[8px] px-2 sm:px-[20px] pr-[115px] py-[5px] sm:py-[10px] bg-[#F2F2F2] relative mt-1 ${width} min-h-[35px]`}
          >
            <span
              className={`rounded-[8px] hover:opacity-75 ${
                load ? "bg-[#0CAF38]" : "bgcolor2"
              } py-[3px] sm:py-[7px] px-[20px] text-white font-16 font-medium absolute right-[3px] top-2/4 -translate-x-0 -translate-y-1/2`}
            >
              {value ? "Change" : "Upload"}
            </span>

            {}
            <div
              className={`file-select-name font-14 sm:font-16 md:-18 ${
                value ? "color4" : "text-gray-500"
              }`}
              title={value && value.name}
            >
              {load ? (
                <div className="flex gap-2">
                  <Loader /> <span>{showImageName && "compressing..."}</span>
                </div>
              ) : (
                <input
                  type="text"
                  value={showImageName ? value && value.name : ""}
                  placeholder={title}
                  onChange={() => null}
                  readOnly
                  className="bg-transparent truncate focus:outline-none pointer-events-none w-[120px]  md:w-[155px]  mdx:w-[220px]"
                />
              )}
            </div>

            <input
              type="file"
              name={name}
              id={name}
              className="fixed opacity-0 pointer-events-none"
              onChange={async (value) => {
                const targetFile = value.target.files[0];
                if (targetFile.size >= 3145728) {
                  return handleChange(name, targetFile);
                }
                try {
                  setload(true);
                  const file = await imageCompression(
                    targetFile,
                    optionsSignglwFileComp
                  );
                  handleChange(name, file);
                } catch (error) {}

                setload(false);
              }}
              onBlur={handleBlur}
              accept="image/png, image/jpg, image/jpeg, image/webp"
            />
          </div>
        </label>
        {error && <InputError text={error} />}
      </div>
    </>
  );
};

export default React.memo(FileInput);
