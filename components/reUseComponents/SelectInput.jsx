import React from "react";
import Select from "react-select";
import InputError from "../reUseComponents/InputError";
import { customStyles, theme } from "../../data/reactSelectStyle";
import Option from "./ReactSelectCheckBox";

const SelectInput = ({
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
    <div className="mb-5">
      <label className={`inputLabel ${error ? "text-[#f30303]" : "color4"}`}>
        {label}
        {isMust && <span className="text-[#FF4242]"> *</span>}
      </label>
      <Select
        styles={customStyles}
        instanceId
        isMulti={false}
        name={name}
        options={options}
        components={{
          Option,
        }}
        theme={theme}
        isSearchable={false}
        placeholder={placeholder}
        classNamePrefix="react-select"
        className={`${error && "errorSelect"}`}
        onChange={(value) => {
          handleChange(name, value);
        }}
        value={value}
        onBlur={() => {
          handleBlur(name, true);
        }}
      />
      {error && <InputError text={error} />}
    </div>
  );
};

export default React.memo(SelectInput);
