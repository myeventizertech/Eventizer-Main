import React from "react";

const ButtonClick = ({
  text = "Next",
  type,
  handleClick,
  css,
  width = "w-full",
  padding = "px-1",
  shadow = "shadow-[0px_3.72px_33.49px_0px_rgba(239,13,94,0.3)]",
  font="font-16 sm:font-18",
  ...props
}) => {
  return (
    <button
      disabled={props.disable}
      type={type}
      onClick={handleClick}
      className={`${css} ${width} ${padding} py-[8px] sm:py-[10px] font-normal ${font}  btn-hover 
      ${shadow}`}
    >
      {text}
    </button>
  );
};

export default ButtonClick;
