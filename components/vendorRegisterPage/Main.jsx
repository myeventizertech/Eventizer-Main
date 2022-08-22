import React, { useState } from "react";
import RegForm from "./RegForm";
import ReginfoSection from "./ReginfoSection";
import RegBackIcon from "../reUseComponents/icons/RegBackIcon";

const Main = () => {
  const [showRegPop, setShowRegPop] = useState(true);

  let handleRegPopOut = () => {
    setShowRegPop(false);
  };
  return (
    <>
      <div className="lg:flex lg:h-screen">
        <ReginfoSection
          showRegPop={showRegPop}
          handleRegPopOut={handleRegPopOut}
        />
        <div className="px-[16px] w-full lg:w-[55%] min-h-[780px] lg:min-h-full h-full relative min-layout">
          <button
            onClick={() => {
              setShowRegPop(true);
            }}
            className="block lg:hidden mt-8 mb-4 absolute left-4 top-0"
          >
            <RegBackIcon />
          </button>
          <RegForm />
        </div>
      </div>
    </>
  );
};

export default Main;
