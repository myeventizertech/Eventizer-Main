import React from "react";
import bottomNav from "../../data/bottomMobileNav";
import Link from "next/link";

const BottomNavMbl = () => {
  return (
    <>
      <div
        className="bottom-nav  block sm:hidden fixed z-10 bottom-0 left-0 right-0 bg-white 
      shadow-[0_-13px_13px_0px_rgba(0,0,0,0.02)] px-5 py-2"
      >
        <nav>
          <ul className="flex gap-2 justify-between items-center text-center font-12 font-normal  color4">
            {bottomNav.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.path}>
                    <a className="btn-hover">
                      <span className=" w-[20px] h-[20px] mx-auto flex flex-col justify-center">
                        {/* <img  src={item.img} alt="icon" /> */}
                      </span>
                      <span className="block mt-1">{item.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BottomNavMbl;
