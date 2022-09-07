import React, { useState, useRef } from "react";
import ButtonClick from "../reUseComponents/ButtonClick";
import { useFormik } from "formik";
import { CSSTransition } from "react-transition-group";
import Circle3 from "../reUseComponents/icons/Circle3";

import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email("Please enter a valid email address").required(),
});
const SectionSubscribe = () => {
  let [congrats, setCongrats] = useState(false);
  const nodeRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setCongrats(true);
    },
  });
  return (
    <div className="bg-white relative">
         <div className="absolute bottom-[30%] left-0 hidden md:block w-[5.5%]">
        <Circle3 />
        </div>
      <div className="container py-all sectionSeven">
        <div className="bgcolor2 px-9 py-9 rounded-[12px] sm:min-h-[18rem] md:min-h-[22rem] lg:min-h-[26rem] flex flex-col justify-center bg-[url('../public/img/subscribe_bg_shape.svg')] bg-no-repeat bg-cover">
          {!congrats && (
            <>
              <div className="block w-[35px] sm:w-[40px] lg:w-[55px] mx-auto">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={"/img/subscribe_msg_icon.svg"}
                  alt="icon"
                />
              </div>
              <>
                <h1>Subscribe to get more offer</h1>
              </>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 lg:max-w-[620px] mx-auto sm:max-w-[420px] max-w-[320px] box">
                  <div className="grow w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="inputdesign w-full py-[10px] px-[12px] rounded-md"
                    />
                    {formik.errors.email && (
                      <p className="color1 font-14">
                        {formik.touched.email && formik.errors.email
                          ? formik.errors.email
                          : ""}
                      </p>
                    )}
                  </div>

                  <div className="flex-none ">
                    <ButtonClick
                      type="submit"
                      css={"bg-[#141414] text-white rounded-[8px]"}
                      width="null"
                      padding=" px-5 lg:px-10 py-[7px]"
                      text="Subscribe"
                    />
                  </div>
                </div>
              </form>
            </>
          )}

          <>
            <CSSTransition
              in={congrats}
              timeout={300}
              classNames="zoom"
              unmountOnExit
              nodeRef={nodeRef}
            >
              <div ref={nodeRef}>
                <div className="block max-w-[80px] sm:max-w-[105px] mx-auto">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={"/img/subscribe_congrats_avatar.svg"} priority alt="icon" />
                </div>
                <h1>Thanks for subscribe to us</h1>
              </div>
            </CSSTransition>
          </>
        </div>
      </div>
    </div>
  );
};

export default SectionSubscribe;
