import React from "react";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../../../utils/imageBlurLoader";
import eventType from "../../../data/eventType";
import EventBg from "../../../public/img/events_bg_shape.svg";
import UseOutsideClick from "../../../utils/useOutsideClick";
import useMediaQuery from "../../../utils/useMediaQuery";
import HeroBanner from "./HeroBanner";
const Landing = () => {
  const { isOpen, refOutClick, handleAvatarClick } = UseOutsideClick();
  let isMobile = useMediaQuery("(min-width: 900px)");

  return (
    <div className="heroSection z-10">
      <div className="div1">
        <div className="heroSection-container">
          <div className="div3">
            <p>Plan, Click, Organize</p>
            <h1>
            Organize Your {" "}
              <span className="span1">
                <span className="span2">
                  <Image
                    layout="fill"
                    src={EventBg}
                    alt="shape"
                    placeholder="blur"
                    blurDataURL={placeholder}
                  />
                </span>
                Events
              </span>
              <span className="block"> Hassle Free</span>
            </h1>

            <div className="hero-dropdown">
              <button onClick={handleAvatarClick} ref={refOutClick}>
                <span>Choose Event type</span>{" "}
                <span className={`span-arrow ${isOpen ? "open" : ""}`}>
                  <span className="arrow"></span>
                </span>
              </button>
              <div
                className={`menu ${
                  isOpen
                    ? "opacity-none pointer-events-auto translate-y-1/2"
                    : "opacity-0 pointer-events-none translate-y-[40%]"
                } `}
                style={{ transition: "transform .3s ease, opacity .3s ease" }}
              >
                <div className="div1">
                  <ul>
                    {eventType.map((item, i) => {
                      return (
                        <li key={i}>
                          <Link href={item.path}>
                            <a>
                              <span
                                className="span1"
                                style={{
                                  transition: "background-color 0.3s ease",
                                }}
                              >
                                <span className="w-[18px] h-[18px]">
                                  <Image src={item.img} alt="icon" />
                                </span>
                                <span className="font-12 sm:font-16 font-normal">
                                  {item.name}
                                </span>
                              </span>
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobile && <HeroBanner />}
      </div>
    </div>
  );
};

export default Landing;
