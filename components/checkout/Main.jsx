import React, { useState, useEffect } from "react";
import ButtonClick from "../reUseComponents/ButtonClick";
import Input from "../reUseComponents/Input";
import { Formik, Form } from "formik";
import Loader from "../reUseComponents/Loader";
import * as yup from "yup";
import InputError from "../reUseComponents/InputError";
import * as queries from "../../src/graphql/queries";
import { useRouter } from "next/router";
import { API } from "aws-amplify";
import axios from "axios";
import moment from "moment";
import toast from "react-hot-toast";
const BDNUM = /^01[23456789][0-9]{8}\b/g;
let validationSchema = yup.object({
  userName: yup
    .string()
    .min(2, "Minimum 2 letter required")
    .max(50, "Maximum 50 letter required")
    .required("Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  phoneNumber: yup
    .string()
    .matches(BDNUM, "Enter valid BD Number")
    .required("Required field"),
});
const Main = ({ Data, initialValues }) => {
  let router = useRouter();
  const [promoValue, setPromoValue] = useState({
    promoCode: "",
  });
  const [disablePromo, setDisablePromo] = useState(false);
  const [getpromoCodeVal, setGetpromoCOdeval] = useState({});
  const [getOffer, setGetOffer] = useState("");
  const [discountVAl, setDiscountVAl] = useState("");
  const [error, setError] = useState(false);
  let handleChangePromoCode = (e) => {
    e.persist();
    setPromoValue({
      promoCode: e.target.value,
    });
    setError(false);
  };

  let handleSubmit = async () => {
    
    if (!promoValue.promoCode) {
      return setError(true);
    }
    toast("wait a moment");

    try {
      let header = {
        "Access-Control-Allow-Origin": ["*"],
        "Content-Type": ["application/json"],
      };
      const res = await axios({
        method: "put",
        url: "https://cbp8s5iyz5.execute-api.ap-southeast-1.amazonaws.com/FinalVerfiy",
        header,
        data: {
          code: promoValue.promoCode,
        },
      });
      setGetpromoCOdeval(res.data.body);
      setDisablePromo(true);
      toast.success("successfully");
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  let onSubmit = async (values, actions) => {
    try {
      let header = {
        "Access-Control-Allow-Origin": ["*"],
        "Content-Type": ["application/json"],
      };
      const res = await axios({
        method: "put",
        url: "/api/pay",
        header,
        data: {
          orderID: Data?.id,
          payment: getOffer / 2,
          phone: values.phoneNumber,
          name : Data?.name
        },
      });
      let url = res?.data?.body?.url?.payment_url;

      window.open(url, "_blank");
      // //ends
      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    function calc() {
      let total = Data?.totalPayment;
      let getPercentege = getpromoCodeVal?.percentege;
      let getMaxDiscount = getpromoCodeVal?.maxDiscount;
      if (getPercentege) {
        let percentege = (getPercentege / 100) * total;

        if (getMaxDiscount  < percentege) {
          setDiscountVAl(getMaxDiscount)
          return total - getMaxDiscount;
        }
        setDiscountVAl(percentege)

        return total - percentege;
      }
    }
    let totalOffer = calc();
    setGetOffer(totalOffer);
  }, [
    Data?.totalPayment,
    getpromoCodeVal?.maxDiscount,
    getpromoCodeVal?.percentege,
  ]);

  useEffect(() => setGetOffer(Data?.totalPayment), [Data?.totalPayment]);
console.log(getOffer);
  return (
    <div className="container m-all checkout">
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="bg-white p-5 shadow rounded-md order-1 md:order-[0] flex-1">
          <h1 className="header mb-1">Contact address</h1>
          <p className="text-[#8C8C8C] font-14 font-normal ">
            We will contact with you via this number
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={true}
            onSubmit={onSubmit}
            enableReintialize={true}
          >
            {(props) => (
              <Form>
                <div className="flex gap-x-5 mt-3">
                  <div className="flex-1">
                    <Input
                      name="userName"
                      placeholder="name"
                      value={props.values.userName}
                      handleChange={props.handleChange}
                      handleBlur={props.handleBlur}
                      error={
                        props.touched.userName && props.errors.userName
                          ? props.errors.userName
                          : ""
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      name="phoneNumber"
                      placeholder="Number"
                      value={props.values.phoneNumber}
                      handleChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={
                        props.touched.phoneNumber && props.errors.phoneNumber
                          ? props.errors.phoneNumber
                          : ""
                      }
                    />
                  </div>
                </div>

                <div className="mt-1 mb-8">
                  <InputError
                    text={
                      props.touched.radioGroup && props.errors.radioGroup
                        ? props.errors.radioGroup
                        : ""
                    }
                  />
                </div>
                {disablePromo ? (
                  <h1 className="text-center text-[#32e067] font-26 font-normal min-h-[4rem]">
                    Coupon applied successfully
                  </h1>
                ) : (
                  <div className="flex gap-x-5 mt-3">
                    <div className="flex-1">
                      <Input
                        name="cupon"
                        placeholder="Apply promo code"
                        value={promoValue.promoCode}
                        handleChange={handleChangePromoCode}
                        handleBlur={null}
                        error={error ? "Required" : ""}
                      />
                    </div>
                    <div>
                      <ButtonClick
                        type="button"
                        css={"bgcolor2 text-white rounded-md block mt-1"}
                        width="min-w-[5rem] sm:min-w-[9rem]"
                        text={"Apply"}
                        padding="px-6 sm:px-10"
                        font="font-14 sm:font-16"
                        handleClick={handleSubmit}
                      />
                    </div>
                  </div>
                )}

                <>
                  <ButtonClick
                    type="submit"
                    css={"bgcolor2 text-white rounded-md w-full block"}
                    width="null"
                    text={
                      props.isSubmitting ? (
                        <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                      ) : (
                        "Confirm Payment"
                      )
                    }
                    padding="px-6 sm:px-10"
                    disable={props.isSubmitting}
                  />
                </>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <div className="p-5 box-right boxDetails  ">
            <h1>Package</h1>
            <h3>{Data?.packageName}</h3>
            <p>{Data?.totalPayment} BDT</p>
          </div>
          <div className="p-5 box-right boxDetails">
            <h1>Event Details</h1>
            <h3>
              {Data?.start && (
                <>
                  {Data?.start}{" "}
                  {moment(Data?.start, "YYYY-MM-DD HH:mm:ss").format("dddd") ===
                  "Invalid date"
                    ? ""
                    : moment(Data?.start, "YYYY-MM-DD HH:mm:ss").format(
                        "dddd"
                      )}{" "}
                </>
              )}
              -{" "}
              {Data?.end && (
                <>
                  {Data?.end}{" "}
                  {moment(Data?.end, "YYYY-MM-DD HH:mm:ss").format("dddd") ===
                  "Invalid date"
                    ? ""
                    : moment(Data?.end, "YYYY-MM-DD HH:mm:ss").format(
                        "dddd"
                      )}{" "}
                </>
              )}
            </h3>
            <p>{Data?.city + "," + Data?.address}</p>
          </div>

          <div className="box-right box-payment py-5">
            <div className="px-5">
              <h1 className="header ">Payment summary</h1>

              <div className="box-inner">
                <div>
                  <h5>Subtotal</h5>
                </div>
                <div>
                  <p>৳ {Data?.totalPayment} </p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="box-inner">
                <div>
                  <h5>offer</h5>
                </div>
                <div>
                  <p>৳ -{discountVAl ? discountVAl : 0}</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="box-inner">
                <div>
                  <h5>Payble Total</h5>
                </div>
                <div>
                  <p>৳ {getOffer}</p>
                </div>
              </div>
            </div>
            <div
              className="box-inner-total"
              style={{
                background:
                  "linear-gradient(90deg, #EF0D5E 11.92%, rgba(235, 17, 148, 0.91) 55.56%)",
              }}
            >
              <div>
                <h5>Pay Now</h5>
              </div>
              <div>
                <p>৳ {getOffer / 2}</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
