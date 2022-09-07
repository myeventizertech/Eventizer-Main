import ButtonClick from "../../reUseComponents/ButtonClick";
import Input from "../../reUseComponents/Input";
import { Formik, Form } from "formik";
import Loader from "../../reUseComponents/Loader";
import * as yup from "yup";
import InputError from "../../reUseComponents/InputError";

import * as mutations from "../../../src/graphql/mutations";
import { API } from "aws-amplify";
import toast from "react-hot-toast";
let mbBanking = [
  {
    value: "Bkash",
    img: "/img/gateway/bkash.png",
  },
  {
    value: "amcash",
    img: "/img/gateway/am.png",
  },
  {
    value: "upay",
    img: "/img/gateway/upay.png",
  },
  {
    value: "rocket",
    img: "/img/gateway/rocket.png",
  },
  {
    value: "nogod",
    img: "/img/gateway/nogod.png",
  },
];
const BDNUM = /^01[23456789][0-9]{8}\b/g;
let validationSchema = yup.object({
  radioGroup: yup.string().required("Choose A payment gateway"),

  mobileNumber: yup
    .string()
    .matches(BDNUM, "Enter valid BD Number")
    .required("Required field"),
  withdrawAmount: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("Required field"),
});
const MobileBanking = ({ setMBisOpen ,getData}) => {
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));

  let onSubmit = async (values, actions) => {
    if (+values.withdrawAmount > storage.balance.balance) {
      toast.error("You dont have this amount");
      return actions.setSubmitting(false);
    }
    try {
     

      let payData = {
        balanceAmount: values.withdrawAmount,
        phoneNumber: values.mobileNumber,
        method: values.radioGroup,
        type: "Mobile",
        status: "Pending",
        vendorID: storage?.vendor?.id,
      };
      await API.graphql({
        query: mutations.createPaymentRequest,
        variables: { input: payData },
      });
      toast.success("Withdraw Successful");
      getData()
      setMBisOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-white p-5 ">
        <Formik
          initialValues={{
            withdrawAmount: "",
            mobileNumber: "",
            radioGroup: "",
          }}
          validationSchema={validationSchema}
          validateOnBlur={true}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <div className="flex justify-between gap-x-5">
                <h1 className="header mb-3">Choose account</h1>
                <button
                  onClick={() => setMBisOpen(false)}
                  className="text-white border border-[#ef0d5e] color3 btn-hover px-4 py-1 font-20 rounded-[4px] font-light "
                >
                  close
                </button>
              </div>
              <div className="flex flex-wrap gap-5 mt-8">
                {mbBanking.map((item, i) => {
                  return (
                    <label
                      className="labelInp border border-gray-400 p-2 rounded min-w-[6rem] relative flex justify-between items-center"
                      htmlFor={`radio${i}`}
                      key={i}
                    >
                      <span>
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.img}
                          alt="mobile banking"
                          quality={100}
                        />
                      </span>
                      <span>
                        <input
                          type="radio"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          id={`radio${i}`}
                          name="radioGroup"
                          value={item.value}
                          className="accent-[#ef0d5e] "
                        />
                      </span>
                    </label>
                  );
                })}
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

              <div className="sm:flex gap-x-5 mt-3">
                <div className="flex-1">
                  <Input
                    label={"Withdraw Amount"}
                    name="withdrawAmount"
                    placeholder="500"
                    value={props.values.withdrawAmount}
                    handleChange={props.handleChange}
                    handleBlur={props.handleBlur}
                    error={
                      props.touched.withdrawAmount &&
                      props.errors.withdrawAmount
                        ? props.errors.withdrawAmount
                        : ""
                    }
                  />
                </div>
                <div className="flex-1">
                  <Input
                    label={"Mobile Number"}
                    name="mobileNumber"
                    placeholder="Number"
                    value={props.values.mobileNumber}
                    handleChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={
                      props.touched.mobileNumber && props.errors.mobileNumber
                        ? props.errors.mobileNumber
                        : ""
                    }
                  />
                </div>
              </div>

              <>
                <ButtonClick
                  type="submit"
                  css={"bgcolor2 text-white rounded block ml-auto "}
                  width="null"
                  text={
                    props.isSubmitting ? (
                      <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                    ) : (
                      "Withdraw request"
                    )
                  }
                  padding="px-6 sm:px-10"
                  disable={props.isSubmitting || !props.dirty}
                />
              </>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default MobileBanking;
