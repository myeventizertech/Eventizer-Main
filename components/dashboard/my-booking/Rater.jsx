import React from "react";
import InputError from "../../reUseComponents/InputError";
import ReactStars from "react-rating-stars-component";

let Rater = ({ fieldProps, name, title }) => {
  return (
    <div>
      <label className="font-14 sm:font-16 color4">{title}</label>
      <ReactStars
        classNames="mr-2"
        size={20}
        edit={true}
        color={"#adb5bd"}
        activeColor={"#ef0d5e"}
        isHalf={true}
        value={fieldProps.values[name]}
        onChange={(value) => {
          fieldProps.setFieldValue(name, value);
        }}
      />
      <InputError
        text={
          fieldProps.touched[name] && fieldProps.errors[name]
            ? fieldProps.errors[name]
            : ""
        }
      />
    </div>
  );
};

export default Rater;
