import React from "react";
import Select from "react-select";
import InputError from "../reUseComponents/InputError";
import { customStyles, theme } from "../../data/reactSelectStyle";
import Option from "./ReactSelectCheckBox";

const MultiSelect = ({
  handleChange,
  options,
  label,
  placeholder,
  name,
  value,
  handleBlur,
  error,
  isMust = false,
}) => {
  return (
    <>
      <div className="mb-5">
        <label className={`inputLabel  ${error ? "text-[#f30303]" : "color4"}`}>
          {label}
          {isMust && <span className="text-[#FF4242]"> *</span>}
        </label>
        <Select
          instanceId
          styles={customStyles}
          options={options}
          isMulti
          placeholder={placeholder}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          isSearchable={false}
          components={{
            Option,
          }}
          name={name}
          onChange={(value) => {
            handleChange(name, value);
          }}
          theme={theme}
          className={`${error && "errorSelect"}`}
          classNamePrefix="react-select"
          value={value}
          onBlur={() => {
            handleBlur(name, true);
          }}
        />
        {error && <InputError text={error} />}
      </div>
    </>
  );
};

export default React.memo(MultiSelect);
