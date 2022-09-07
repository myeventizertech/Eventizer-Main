import React, { useMemo, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import InputError from "../../reUseComponents/InputError";
import Loader from "../Loader";
import imageCompression from "browser-image-compression";
let optionsSMultiFileComp = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1024,
  useWebWorker: true,
};

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  borderWidth: 2,
  borderColor: "#3b3b3b",
  borderStyle: "dashed",
  backgroundColor: "#FFFAFC",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DropZone({
  fileLimit = 10,
  minFileLimit = 5,
  dropZoneHeight = "h-[125px] sm:h-[275px]",
  dropZoneImgWidth = "w-[22px] sm:w-[55px]",
  dropZoneMidText = "font-14 sm:font-22 mt-[5px] sm:mt-[12px]",
  dropZoneEndText = "font-12 sm:font-18 mt-[6px] sm:mt-[16px]",
  ...props
}) {
  const { label, files, setFiles, fileError,loads } = props;

  const [errorLarge, setErrorLarge] = useState(false);
  const [errorType, setErrorType] = useState(false);
  const [errorMany, setErrorMany] = useState(false);
  const [load, setload] = useState(false);
  const onDrop = useCallback(
    (accFiles, rejFiles) => {
      if (accFiles.length > fileLimit) {
        return;
      } else {
        accFiles.map(async (targetFile) => {
          setload(true);
          try {
            const file = await imageCompression(
              targetFile,
              optionsSMultiFileComp
            );
            setFiles((curr) => [...curr, { file }].slice(0, fileLimit));
          } catch (error) {}
          setload(false);
        });
      }

      rejFiles.forEach((file) => {
        file.errors.forEach((err) => {
          if (err.code === "file-too-large") {
            setErrorLarge(true);
          }
          if (err.code === "file-invalid-type") {
            setErrorType(true);
          }
          if (err.code === "too-many-files") {
            setErrorMany(true);
          }
        });
      });
    },
    [fileLimit, setFiles]
  );
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      onDragEnter: useCallback(() => {
        setErrorMany(false);
        setErrorType(false);
        setErrorLarge(false);
      }, []),
      maxFiles: fileLimit,
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "image/jpg": [],
        "image/webp": [],
      },
      maxSize: 3145728,
      disabled: files.length >= fileLimit,
      noClick: files.length >= fileLimit,
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  function onDelete(file) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }
  function onDeleteAll() {
    setFiles([]);
    setload(false);
  }

  let handleRMerror = () => {
    setErrorMany(false);
    setErrorType(false);
    setErrorLarge(false);
  };
  return (
    <div onClick={handleRMerror}>
      <label
        className={`inputLabel   ${
          fileError
            ? files.length >= minFileLimit
              ? "color4"
              : "text-[#f30303]"
            : "color4"
        }`}
      >
        {label}
      </label>
      <div
        {...getRootProps({ style })}
        className={`${
          files.length >= fileLimit && "opacity-30 pointer-events-none"
        } ${dropZoneHeight} rounded-[5px] sm:rounded-[10px] relative`}
      >
        <input {...getInputProps()} />

        <div className="text-center">
          {!isDragAccept && (
            <>
              <div className={`${dropZoneImgWidth} m-auto`}>
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={"/img/drag-icon.png"} alt="Drag-image-icon" />
              </div>
              <h1 className={`${dropZoneMidText}  font-medium  color4`}>
                Drag your image here, or <span className="color3"> browse</span>
              </h1>
              <p className={`text-[#8C8C8C] ${dropZoneEndText}`}>
                Supports: JPG, PNG
              </p>
            </>
          )}
          {isDragReject && (
            <p className="text-red-500 font-14">
              Some files will be rejected if not valid
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          {errorLarge && (
            <InputError
              text={"Some files are removed & each size limit is 3mb"}
            />
          )}
          {errorType && (
            <InputError text={"File type should be jpg/jpeg/png/webp"} />
          )}
          {errorMany && (
            <InputError text={`You can upload only ${fileLimit} images`} />
          )}
          {files.length >= fileLimit && (
            <p className="font-10 sm:font-14 text-green-500">
              you upload {fileLimit} images
            </p>
          )}
          <>
            {files.length >= minFileLimit ||
              (fileError && (
                <InputError text={`Minimun ${minFileLimit} photo required`} />
              ))}
          </>
        </div>
        <div>
          <p className="text-right font-10 sm:font-14 text-[#888c]">
            Max {fileLimit} image supported
          </p>
          {files.length > 0 && (
            <div>
              <p className="text-right font-10 sm:font-14 color4">
                {files.slice(0, fileLimit).length} Image Uploaded
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        {files.length > 1 && (
          <>
            <button
              type="button"
              className="font-10 sm:font-14 text-white bg-red-500 px-2 py-1 rounded-[4px] hover:opacity-75"
              onClick={onDeleteAll}
            >
              Delete All
            </button>
          </>
        )}

        {load && (
          <div className="flex gap-2">
            <Loader bdrClr1="#cec1c6" /> <span>compressing...</span>
          </div>
        )}
      </div>
      {files.length > 0  && (
        <div className="overflow-x-auto p-5 flex gap-3 bar-thin">
          {files.slice(0, fileLimit).map((fileItem, i) => (
            <div key={i}>
              <>
                <div
                  className=" relative bg-[#bababf] px-3 py-2 rounded-[8px] inline-block text-center w-[130px]"
                >
                  <div className="absolute top-0 right-0 bg-black bg-opacity-75 p-3 w-[20px] h-[20px] text-white flex justify-center items-center rounded-tr-[8px]">
                    <h4>{i + 1}</h4>
                  </div>
                  <div className="w-full h-full m-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={URL.createObjectURL(fileItem.file)}
                      alt="Uploaded-image"
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="color4 font-normal font-14 mt-1 hover:opacity-75"
                      onClick={() => onDelete(fileItem.file)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(DropZone);
