import React from "react";
import Logo from "../../reUseComponents/Logo";
import Link from "next/link";
import FotterInfor from "../../../data/footer";
import useMediaQuery from "../../../utils/useMediaQuery";

let CopyRightSection = () => {
  return (
    <>
      <p className="color1 font-14 mb-1 ">
        © {new Date().getFullYear()}
        <Link href="https://lebriact.com/" target="_blank">
          <a className="hover:text-black"> Lebriact </a>
        </Link>
        | All Rights Reserved
      </p>
      <p className="color1 font-14">Terms of service | Privacy Policy</p>
    </>
  );
};

const Footer = () => {
  let isMobile = useMediaQuery("(min-width: 1024px)");
 
  return (
    <>
    <footer>

      <div className="py-10 pb-16 sm:pb-10">
        <div className="container">
          <div className="lg:flex flex-wrap justify-between">
            <div className="grow flex flex-col gap-10 mb-5 sm:mb-0">
              <Logo />
              <div>{isMobile && <CopyRightSection />}</div>
            </div>

            <div className="grow grid grid-cols-2 md:grid-cols-4 gap-4">
              {FotterInfor.map((item, i) => {
                return (
                  <div key={i}>
                    <h3 className="color4 font-18 mb-2 font-medium">
                      {item[0].title}
                    </h3>
                    <ul>
                      {item.map((subItem, i) => {
                        return (
                          <li className="mb-1" key={i}>
                            <Link href={subItem?.path}>
                              <a className="text-[#333333] font-14 font-normal hover:opacity-75 ">
                                {subItem?.name}
                              </a>
                            </Link>

                            {subItem.getIn && (
                              <ul>
                                {subItem.getIn.map((itemss, i) => {
                                  return (
                                    <li
                                      key={i}
                                      className="text-[#333333] font-14"
                                    >
                                      {itemss?.name}{" "}
                                      <span className="block">
                                        <Link href={itemss?.path}>
                                          <a className="text-[11px] md:text-[12px] font-normal hover:opacity-75 ">
                                            {itemss?.text}
                                          </a>
                                        </Link>
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                            {subItem.social && (
                              <ul className="flex gap-2 mt-2">
                                {subItem.social.map((itemss, i) => {
                                  return (
                                    <li
                                      key={i}
                                      className="text-[#333333] font-14"
                                    >
                                      {itemss?.name}{" "}
                                      <span className="block">
                                        <Link href={itemss?.path}>
                                          <a
                                            target="_blank"
                                            className="text-12 font-normal hover:opacity-75 "
                                          >
                                             {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                              src={itemss?.img}
                                              alt="icon"
                                              width={20}
                                              height={20}
                                            />
                                          </a>
                                        </Link>
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                            {/* {subItem.button && (
                                <button
                                  onClick={handleClick}
                                  className="px-4 mt-5 font-normal py-2 btn-hover text-white font-14 sm:font-16 rounded-[8px]  bg-black w-full"
                                >
                                  {subItem.button}
                                </button>
                              )} */}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {!isMobile && (
            <div className="mt-8">
              <CopyRightSection />
            </div>
          )}
        </div>
      </div>
      </footer>

    </>
  );
};

export default React.memo(Footer);
