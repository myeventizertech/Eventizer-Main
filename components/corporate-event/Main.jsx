import React from "react";
import ButtonLinkOrClick from "../reUseComponents/ButtonLinkOrClick";
const Main = () => {
  return (
    <>
      <header className="container m-all">
        <div className="flex gap-5 items-center flex-col md:flex-row">
          <div className="flex gap-x-3 sm:gap-x-5 items-center ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Profile Picture"
              className=" object-cover object-center w-16 h-16 md:w-24 md:h-24 rounded-full "
            />
            <div>
              <h3 className="font-16 sm:font-18 lg:font-26 font-medium tracking-wider capitalize">
                Hello, Labib Muhannad
              </h3>
              <p className="color1 font-12 lg:font-14 font-light tracking-wider">
                Get Your plan in a Click I Today is 03-02-23
              </p>
            </div>
          </div>
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
                Get easy soluaion
              </h1>
              <div className="mt-5">
                <ButtonLinkOrClick
                  isLink={true}
                  text="Submit Your Plan"
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
          How to get easy solutions?
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
      </section>

      <section className="container py-8">
        <h2 className="font-22 sm:font-48 color4 text-center font-medium">
          Our Corpoate Clients
        </h2>
        <div className="mt-8 flex flex-wraps gap-5 justify-center">
          <div className="w-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/parnnerlogos/Asset3.png" alt="Clients logo" />
          </div>{" "}
          <div className="w-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/parnnerlogos/Asset3.png" alt="Clients logo" />
          </div>{" "}
          <div className="w-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/parnnerlogos/Asset3.png" alt="Clients logo" />
          </div>{" "}
          <div className="w-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/parnnerlogos/Asset3.png" alt="Clients logo" />
          </div>{" "}
          <div className="w-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/parnnerlogos/Asset3.png" alt="Clients logo" />
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Main;
