import React from 'react'
import headinlingSVG from "../../public/img/heading_line.svg";
import Image from "next/image";

const DrawlineSvg = () => {
  return (
    <>
       <div className=" mx-auto max-w-[100px] sm:max-w-[160px] h-1 mb-6 sm:mb-16 -mt-5 sm:-mt-6">
          <Image src={headinlingSVG} alt="icon" />
        </div>
    </>
  )
}

export default DrawlineSvg