import React from "react";
import ButtonLinkOrClick from "../reUseComponents/ButtonLinkOrClick";
import moment from "moment";
import { useUserOrVendor } from "../../authContext/AuthContext";

const Main = () => {
  const { verifyUser, profileImage } = useUserOrVendor();
  const { isUser_vendor, userTitle } = verifyUser;
  return (
    <>
      <header className="container m-all pt-5">
        <div className="flex gap-5 items-center flex-col md:flex-row ">
          {isUser_vendor === "user" ? (
            <div className="flex gap-x-3 sm:gap-x-5 items-center ">
              {profileImage ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profileImage}
                    alt="Profile Picture"
                    className=" object-cover object-center w-16 h-16 md:w-24 md:h-24 rounded-full "
                  />
                </>
              ) : (
                <h1 className="capitalize w-16 h-16 md:w-24 md:h-24 font-20 sm:font-32 font-medium bg-slate-900 text-center text-white rounded-full flex-center justify-center shrink-0">
                  {userTitle.substring(0, 1)}
                </h1>
              )}
              <div>
                <h3 className="font-16 sm:font-18 lg:font-26 font-medium tracking-wider capitalize">
                  Hello, {userTitle}
                </h3>
                <p className="color1 font-12 lg:font-14 font-light tracking-wider">
                  Get Your plan in a Click I Today is{" "}
                  {moment(new Date()).format("DD-MM-YYYY")}
                </p>
              </div>
            </div>
          ) : (
            <h3 className="font-22 sm:font-32 font-medium tracking-wider capitalize">
              Need an Event Specialist?
            </h3>
          )}
          <div className="md:ml-auto">
            <ButtonLinkOrClick
              isLink={true}
              text="Talk to Event Specialists"
              font="font-14 md:font-20 font-normal"
              goto="https://booking.setmore.com/scheduleappointment/84da232f-ba6c-429b-ba9e-8aa9510db87b"
              radius="rounded-[6px]"
              py="py-[10px]"
              px=" px-[30px] mdx:px-[45px]"
              id="Setmore_button_iframe"
              otherCss="text-center "
            />
          </div>
        </div>
      </header>

      <section className="bg-[#D9D9D933] relative w-full">
        <div className="container">
          <div className="min-h-[20rem]  md:h-[30rem] flex items-center  gap-x-4">
            <div className="w-full md:w-[70%] ">
              <h5 className="color4 font-12 lg:font-14 font-normal tracking-wider">
                Are you planning for a corporte event?
              </h5>
              <h1 className="font-20 sm:font-40 font-medium tracking-wider">
                Let us know your plan{" "}
              </h1>
              <h1 className="font-20 sm:font-40 font-medium tracking-wider">
                Get easy solutions
              </h1>
              <div className="mt-5">
                <ButtonLinkOrClick
                  isLink={true}
                  text="Submit Your Brief"
                  font="font-14 md:font-20 font-normal"
                  goto="/corporate-event/corporate-event-from"
                  radius="rounded-[20px]"
                  py="py-[10px]"
                  px=" px-[30px] mdx:px-[45px]"
                  otherCss="text-center font-medium"
                />
              </div>
            </div>
            <div className=" absolute right-0 top-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80')] h-full w-[30%] bg-cover bg-no-repeat bg-center hidden md:block"></div>
            <div className="bottom-0 left-[60%] md:left-[30%] absolute w-[35%] md:w-[25%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={"/img/mobile-shape.png"} alt="shape" />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="font-22 sm:font-48 color4 text-center font-medium">
          How to get easy solution?
        </h2>
        <div className="flex gap-x-6 sm:gap-x-10 items-center mt-8 max-w-[55rem] mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/solution-icon1.png"
            alt="Image icon"
            className=" w-16 sm:w-24 "
          />
          <div>
            <h3 className="font-18 sm:font-22 color3 font-medium">
              Dedicated Event Supervisor
            </h3>
            <p
              className="color1 font-14
             lg:font-16 font-normal tracking-wider"
            >
              Get a dedicated supervisor for your event and logistics support
              who will ensure quality as well as your plan.
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 sm:gap-x-10 items-center mt-12  max-w-[55rem] mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/solution-icon2.png"
            alt="Image icon"
            className=" w-16 sm:w-24"
          />
          <div>
            <h3 className="font-18 sm:font-22 color3 font-medium">
            Budget Forecast
            </h3>
            <p
              className="color1 font-14
             lg:font-16 font-normal tracking-wider"
            >
              Submit your budget &  plan to get a budget forecast for your upcoming event.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="font-22 sm:font-48 color4 text-center font-medium">
          Our Corpoate Clients
        </h2>
        <div className="mt-8 flex flex-wraps gap-5 justify-center items-center flex-wrap">
          {[3, 6, 7, 9, 10, 11, 12, 5, 14].map((item, i) => {
            return (
              <div className="w-16 sm:w-28" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/img/parnnerlogos/Asset${item}.png`}
                  alt="Clients logo"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Main;
