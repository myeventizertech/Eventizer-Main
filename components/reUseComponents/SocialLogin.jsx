import React from "react";
import Googleicon from "./icons/Googleicon";
import { Auth } from "aws-amplify";

const SocialLogin = ({text}) => {
  return (
    <div className="font-12 color1 mt-6">
      <button
        className="socialBtn"
        onClick={() => Auth.federatedSignIn({ provider: "Google" })}
      >
        <span className="inline-block">
          <Googleicon />
        </span>
        <span className=" hiddeng sm:inline-block">{text} with google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
