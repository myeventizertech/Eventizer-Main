import React from "react";
import InputError from "../reUseComponents/InputError";

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  width = "w-full",
  otherCSS = "",
  handleChange,
  handleBlur,
  error = "",
  istextArea = false,
  textareaHeight = "3",
  inputdesign = "font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px]",
  labelDesign = "font-14 sm:font-16 md:font-18",
  isMust = false,
  ...props
}) => {
  return (
    <>
      <div className="mb-5">
        <label
          className={`inputLabel ${labelDesign}  ${
            error ? "text-[#f30303]" : "color4"
          }`}
        >
          {label}
          {isMust && <span className="text-[#FF4242]"> *</span>}
        </label>
        {!istextArea ? (
          <>
            <input
              max={props.max}
              min={props.min}
              autoComplete="off"
              type={type}
              name={name}
              placeholder={placeholder}
              className={`${width} ${otherCSS} ${
                error ? "border-[#f30303]" : "inpBorderColor"
              } inputdesign ${inputdesign}`}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </>
        ) : (
          <>
            <textarea
              rows={textareaHeight}
              cols="50"
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              className={`${width} ${otherCSS} ${
                error ? "border-[#f30303]" : "inpBorderColor"
              } inputdesign  font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px]  h-[unset] py-2 max-h-[400px] resize-y  `}
              onBlur={handleBlur}
            />
          </>
        )}
        {error && <InputError text={error} />}
      </div>
    </>
  );
};

export default React.memo(Input);
