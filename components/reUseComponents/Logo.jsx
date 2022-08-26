import React from "react";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../../utils/imageBlurLoader";

import logo from "../../public/img/logo.png";

const Logo = ({ width = "w-[40px] sm:w-[50px]" }) => {
  return (
    <div className={`logo ${width} `}>
      <Link href="/">
        <a>
          <Image src={logo} priority alt="Eventizer Logo"
          placeholder="blur"
          blurDataURL={placeholder}
          />
        </a>
      </Link>
    </div>
  );
};

export default React.memo(Logo);
