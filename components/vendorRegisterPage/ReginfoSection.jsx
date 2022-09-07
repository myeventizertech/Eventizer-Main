import React, { useRef } from "react";
import Logo from "../reUseComponents/Logo";
import registerInfo from "../../data/registerPageInfo";
import { CSSTransition } from "react-transition-group";
import ButtonClick from "../reUseComponents/ButtonClick";
const ReginfoSection = ({ showRegPop, handleRegPopOut }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={showRegPop}
      timeout={300}
      classNames="slide"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="min-layout pt-3 bgcolor2 w-full lg:w-[45%] min-h-[780px]  h-full absolute inset-0 lg:relative bg-[url('../public/img/reg-shape-resign.svg')] bg-no-repeat  lg:bg-contain bg-left-top lg:bg-[left_top_1rem] z-10"
      >
        <div className="max-w-[500px] lg:ml-auto flex flex-col justify-center px-[16px]">
          <div className="mb-5">
            <Logo />
          </div>
          {registerInfo.map((item, i) => {
            return (
              <div key={i} className="flex-center gap-2 lg:gap-5 mt-8">
                <div className="bg-white bg-opacity-20 p-4 md:p-6 lg:p-8 rounded-[4px]">
                  <div className="w-[40px] h-[40px]  lg:w-[45px] lg:h-[45px]  flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt="icon" />
                  </div>
                </div>
                <div className="text-white">
                  <h1 className="font-16 lg:font-20 font-medium tracking-wider capitalize">
                    {item.title}
                  </h1>
                  <p className=" font-12 lg:font-14 font-light mt-2 tracking-wider">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <ButtonClick
          handleClick={handleRegPopOut}
          type={"button"}
          css={
            "bg-white color4 w-[90%] mt-8 m-auto block lg:hidden rounded-[8px]"
          }
        />
      </div>
    </CSSTransition>
  );
};

export default ReginfoSection;
