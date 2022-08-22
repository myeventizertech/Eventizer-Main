import React from "react";

const Loader = ({
  loaderWidht = "w-[20px] h-[20px]",
  bdrWidth = "2px",
  colorDefault = true,
  center = false,
}) => {
  return (
    <>
      <div
        style={{
          border: `${bdrWidth} solid ${colorDefault ? "#fff" : "#ef0d5e"}`,
          borderTop: `${bdrWidth} solid ${colorDefault ? "#ef0d5e" : "#fff"}`,
        }}
        className={`loader ${loaderWidht} ${center && "mx-auto"}`}
      ></div>
    </>
  );
};

export default Loader;
