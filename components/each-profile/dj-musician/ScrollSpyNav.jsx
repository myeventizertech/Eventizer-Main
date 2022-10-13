import React from "react";
import Link from "next/link";

let scrollSpy = [
  { value: "Photographer details", path: "#details" },
  // { value: "Facility", path: "#facility" },
  // { value: "FAQ", path: "#faq" },
  { value: "Reviews", path: "#reviews" },
  // { value: "Portfolio", path: "/" },
];
const ScrollSpyNav = () => {
  return (
    <div className="wrap shadow-md">
      <div className="container ">
        <div>
          <nav>
            <ul className=" gap-3 sm:gap-8 md:gap-14 flex-wrap font-12 sm:font-16 font-medium color4 py-4 hidden mdx:flex">
              {scrollSpy.map((item, i) => {
                return (
                  <li key={i}>
                    <Link href={item.path}>
                      <a className="btn-hover">{item.value}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ScrollSpyNav;
