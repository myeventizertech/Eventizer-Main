import React, { useState } from "react";
import OtpInput from "react-otp-input";
import ButtonClick from "../reUseComponents/ButtonClick";
import Loader from "../reUseComponents/Loader";
import { Auth } from "aws-amplify";
import toast from "react-hot-toast";
import debounce from "../../utils/debounceSubmitHandler";

const OTPInput = ({
  title,
  uiLoading,
  email,
  handleSubmit,
  center = false,
}) => {
  const [OTP, setOTP] = useState("");
  let handleOTPChange = (otp) => setOTP(otp);
  const [uiLoadingOtp, setUiLoadingOtp] = useState(false);

  return (
    <>
      <div
        className={`otp text-center h-screen flex flex-col ${
          center && "justify-center"
        }`}
      >
        <h1 className="font-20 color4 sm:font-48 font-normal">{title}</h1>
        <p className="color1 font-14 sm:font-18 font-normal">
          We sent a verification code to your
        </p>
        <p className="color1 font-14 sm:font-18 font-normal mx-auto max-w-[26rem] break-words">
          {email}
        </p>
        <form onSubmit={(e) => handleSubmit(e, OTP)}>
          <div className=" max-w-[225px] sm:max-w-[344px] m-auto mt-[18px] ">
            <OtpInput
              value={OTP}
              shouldAutoFocus={true}
              onChange={handleOTPChange}
              numInputs={6}
              isInputNum={true}
              separator={<span></span>}
              inputStyle="h-[40px] sm:h-[70px] mx-2 otpinp  ring-[#3b3b3b] rounded-[4px] focus:outline-none focus:border-rose-500 focus:ring-rose-500 ring-1 color4"
            />
            <button
              type="button"
              onClick={async () => {
                setUiLoadingOtp(true);
                try {
                  await debounce(500);
                  await Auth.resendSignUp(email);
                  toast.success("OTP resend successful", {
                    duration: 2000,
                  });
                  setUiLoadingOtp(false);
                } catch (err) {
                  setUiLoadingOtp(false);

                  toast.error(err.message, {
                    duration: 3000,
                  });
                }
              }}
              className="color3 font-12 sm:font-14 hover:opacity-75 select-none ml-auto block mt-2"
              disabled={uiLoadingOtp}
            >
              {uiLoadingOtp ? "..." : "Resend Code?"}
            </button>
            <ButtonClick
              type="submit"
              css={`bgcolor2 font-16 text-white rounded-[8px] mt-[20px] max-w-[212px] sm:max-w-[334px] ${
                uiLoading && "opacity-75"
              }`}
              text={
                uiLoading ? (
                  <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                ) : (
                  "Verify"
                )
              }
              disable={uiLoading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default React.memo(OTPInput);
