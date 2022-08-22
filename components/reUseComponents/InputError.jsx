import React from "react";

const InputError = ({ text }) => {
  return (
    <p className="font-12 text-[#F30303] font-light mb-[-4px] sm:mb[-8px] ">
      {text}
    </p>
  );
};

export default  React.memo(InputError);
