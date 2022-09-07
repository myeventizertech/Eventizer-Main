import React from "react";
import Link from "next/link";
import placeholder from "../../utils/imageBlurLoader";


const Logo = ({ width = "w-[40px] sm:w-[50px]" }) => {
  return (
    <div className={`logo ${width} `}>
      <Link href="/">
        <a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={"/img/logo.png"}  alt="Eventizer Logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default React.memo(Logo);
