import React from "react";
import InputError from "../reUseComponents/InputError";
import DatePicker from "react-datepicker";
import TimePicker from "react-awesome-time-picker";
import moment from "moment";

const DatePickersStart = ({
  name,
  startDate,
  endDate,
  error,
  handleChange,
  fieldProps,
}) => {
  return (
    <>
      <DatePicker
        selected={startDate}
        name={name}
        onChange={(value) => {
          handleChange(value);
          fieldProps.setFieldValue(
            name,
            moment(value).format("DD/MM/YYYY") === "Invalid date"
              ? null
              : moment(value).format("DD/MM/YYYY")
          );
        }}
        startDate={startDate}
        endDate={endDate}
        showPopperArrow={false}
        className={`inputdesign w-full font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px]
                      ${error ? "border-[#f30303]" : "inpBorderColor"}`}
        placeholderText="Start date"
        minDate={moment().toDate()}
        onFocus={(e) => e.target.readOnly = true}
        dateFormat="dd/MM/yyyy"
      />
      {error && <InputError text={error} />}
    </>
  );
};

const DatePickersEnd = ({
  name,
  startDate,
  endDate,
  error,
  handleChange,
  fieldProps,
}) => {
  return (
    <>
      <DatePicker
        name={name}
        selected={endDate}
        onChange={(value) => {
          handleChange(value);
          fieldProps.setFieldValue(
            name,
            moment(value).format("DD/MM/YYYY") === "Invalid date"
              ? null
              : moment(value).format("DD/MM/YYYY")
          );
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        showPopperArrow={false}
        className={`inputdesign w-full font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px]
                      ${error ? "border-[#f30303]" : "inpBorderColor"}`}
        placeholderText="End date"
        minDate={startDate}
        onFocus={(e) => e.target.readOnly = true}
        
        dateFormat="dd/MM/yyyy"
      />
      {error && <InputError text={error} />}
    </>
  );
};

const TimePickers = ({
  name,
  handleChange,
  error,
  placeholderText,
  fieldProps,
  value,
}) => {


  return (
    <>

      <TimePicker
        value={value}
        name={name}
        showSecond={false}
        minuteStep={30}
        placeholder={placeholderText}
        onChange={(value) => {
          handleChange(value);
          fieldProps.setFieldValue(
            name,
            moment(value).format("hh:mm a") === "Invalid date"
              ? null
              : moment(value).format("hh:mm a")
          );
        }}
        className={`inputdesign rounded-[8px] ${
          error ? " border-[#f30303]" : "inpBorderColor"
        }`}
        format={"h:mm a"}
        use12Hours
        inputReadOnly
        inputClassName={` w-full font-14 sm:font-16 md:font-18  px-2 sm:px-[20px] h-[38px] sm:h-[45px] `}  
      />
      {error && <InputError text={error} />}
    </>
  );
};

export { DatePickersStart, DatePickersEnd, TimePickers };
