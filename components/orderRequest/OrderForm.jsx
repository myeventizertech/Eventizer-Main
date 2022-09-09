import React, { useEffect, useState } from "react";
import * as yup from "yup";
import ButtonClick from "../reUseComponents/ButtonClick";
import Input from "../reUseComponents/Input";
import SelectInput from "../reUseComponents/SelectInput";
import { optionsServiceLoction } from "../../utils/options";
import Loader from "../reUseComponents/Loader";
import moment from "moment";
import toast from "react-hot-toast";
import debounce from "../../utils/debounceSubmitHandler";
import { Formik, Form } from "formik";
import * as mutations from "../../src/graphql/mutations";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import conditionalRendar from "../../utils/conditionalRendar";
import {
  DatePickersStart,
  DatePickersEnd,
  TimePickers,
} from "./DateTimeInputs";

let commonFieldSchema = yup.mixed().nullable().required("Required field");
let initialValues = {
  city: "",
  detailsAboutBooking: "",
  yourAddress: "",
  startTime: "",
  endTime: "",
  startDate: "",
  endDate: "",
};

let currOrderTime = [
  { id: 0, value: "I want to book for one day" },
  { id: 1, value: " I want to book for multiple day" },
];

const OrderForm = ({ passData, vendor }) => {
  let [currOrder, setCurrOrder] = useState(currOrderTime[0].id);
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  const user = storage?.user;
  let handleOrderTime = (id) => {
    setCurrOrder(id);
  };
  const router = useRouter();
  const [location, setlocation] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [amount, setAmmount] = useState(0);
  const [durationTime, setDurationTime] = useState({
    hours: null,
    min: null,
    totalmoney: amount,
  });
  const [durationDates, setDurationDates] = useState({
    days: null,
    totalmoney: amount,
  });
  let onSubmit = async (values, actions) => {
    await debounce(1000);
    try {
      if (currOrder === 0 && durationTime?.hours < 1) {
        toast.error(`Time must be more than 1 hour`);
        return actions.setSubmitting(false);
      }

      if (currOrder === 1 && durationDates.days < 2) {
        toast.error(`Date must be more than 2 Day`);
        return actions.setSubmitting(false);
      }
      if (currOrder === 0) {
        let { endDate, ...valueOfSigleDay } = values;
        let payloadDataSingle = {
          ...valueOfSigleDay,
          totalTime: `${durationTime?.hours} hour and ${durationTime?.min} minutes`,
          totalMoney: durationTime.totalmoney,
        };
        if (user?.phoneNumber === null) {
          toast.error(`Please update your phone number.`);
          router.push("/dashboard/profile");
        }
        if (user?.phoneNumber !== null) {
          let data = {
            address: payloadDataSingle?.yourAddress,
            name: user?.firstName + " " + user?.lastName,
            phoneNumberUser: user?.phoneNumber,
            phoneNumberVendor: passData?.vendorNumber,
            package: JSON.stringify(passData),
            bookedDay: payloadDataSingle?.startDate,
            totalPayment: payloadDataSingle?.totalMoney,
            vendorID: passData?.vendorID,
            userID: user?.id,
            city: payloadDataSingle?.city?.label,
            start: payloadDataSingle?.startTime,
            end: payloadDataSingle?.endTime,
            total: payloadDataSingle?.totalTime,
            initialPayment: 0,
            duePayment: payloadDataSingle?.totalMoney,
            status: "Pending",
            title: passData?.title,
            packageName: passData?.packName + " " + passData?.packageStandard,
            notes: values?.detailsAboutBooking || "",
          };
          await API.graphql({
            query: mutations.createOrders,
            variables: { input: data },
          });
          await fetch(
            "https://ouorw5sokfjhv44dyacow5acju0ucjeg.lambda-url.ap-southeast-1.on.aws/",
            {
              method: "POST",
              mode: "no-cors",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: passData?.vendorEmail,
                subject: "New order request on eventizer",
                body: "You have a new order request on eventizer. Please approve or reject the order request.",
              }),
            }
          );
          router.push("/dashboard/my-booking");
        }
      }

      if (currOrder === 1) {
        let { startTime, endTime, ...valueOfMultipleDay } = values;
        let payloadDataMulti = {
          ...valueOfMultipleDay,
          totalDays: durationDates.days,
          totalMoney: durationDates.totalmoney,
        };
        if (user?.phoneNumber === null) {
          toast.error(`Please update your phone number.`);
          router.push("/dashboard/profile");
        }
        if (user?.phoneNumber !== null) {
          let data = {
            address: payloadDataMulti?.yourAddress,
            name: user?.firstName + " " + user?.lastName,
            phoneNumberUser: user?.phoneNumber,
            phoneNumberVendor: passData?.vendorNumber,
            package: JSON.stringify(passData),
            totalPayment: payloadDataMulti?.totalMoney,
            vendorID: passData?.vendorID,
            userID: user?.id,
            city: payloadDataMulti?.city?.label,
            start: payloadDataMulti?.startDate,
            end: payloadDataMulti?.endDate,
            total: payloadDataMulti?.totalDays,
            initialPayment: 0,
            duePayment: payloadDataMulti?.totalMoney,
            status: "Pending",
            title: passData?.title,
            packageName: passData?.packName + " " + passData?.packageStandard,
            notes: values?.detailsAboutBooking || "",
          };
          await API.graphql({
            query: mutations.createOrders,
            variables: { input: data },
          });
          router.push("/dashboard/my-booking");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let dur = moment.duration(endTime?.diff(startTime));
    setDurationTime({
      hours: parseInt(dur.asHours()),
      min: parseInt(dur.asMinutes()) % 60,
      totalmoney:
        parseInt(dur.asHours()) > 0
          ? (parseInt(dur.asHours()) +
              (parseInt(dur.asMinutes()) % 60 > 0 ? 0.5 : 0)) *
            amount
          : amount,
    });
  }, [amount, endTime, startTime]);

  useEffect(() => {
    let a = moment(startDate);
    let b = moment(endDate);
    setDurationDates({
      days: -a.diff(b, "days"),
      totalmoney: -a.diff(b, "days") > 0 ? -a.diff(b, "days") * amount : amount,
    });
  }, [amount, endDate, startDate]);

  useEffect(() => {
    currOrder === 0 && setAmmount(passData.pricePerHour);
    currOrder === 1 && setAmmount(passData.pricePerDay);
  }, [currOrder, passData]);

  useEffect(() => {
    let array = [];
    vendor?.serviceLocation?.map((e) => {
      let k = JSON.parse(e);
      array.push(k);
    });
    setlocation(array);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yup.object().shape({
        city: commonFieldSchema,
        detailsAboutBooking: yup
          .string()
          .min(5, "Minimum 5 letter required")
          .max(500, "Maximum 500 letter required")
          .notRequired("Not required")
          .matches(/^([^0-9@]*)$/, "Only alphabets are allowed"),

        yourAddress: yup
          .string()
          .min(5, "Minimum 5 letter required")
          .required("Required field"),

        startTime: currOrder === 0 ? commonFieldSchema : "",
        endTime: currOrder === 0 ? commonFieldSchema : "",

        startDate: commonFieldSchema,
        endDate: currOrder === 1 ? commonFieldSchema : "",
      })}
      validateOnBlur={true}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <div>
            <div className=" gap-x-5 grid-cols-1 grid sm:grid-cols-2">
              <div>
                <SelectInput
                  handleChange={props.setFieldValue}
                  value={props.values.city}
                  options={location}
                  placeholder="Select City"
                  name="city"
                  handleBlur={props.setFieldTouched}
                  error={
                    props.touched.city &&
                    props.errors.city &&
                    !props.values.city
                      ? props.errors.city
                      : ""
                  }
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="yourAddress"
                  placeholder="Write Your Address"
                  value={props.values.yourAddress}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.yourAddress && props.errors.yourAddress
                      ? props.errors.yourAddress
                      : ""
                  }
                />
              </div>

              {currOrderTime.map((item, i) => {
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => handleOrderTime(item.id)}
                      className={`font-14 color4  px-2 py-3 w-full border-[1.5px]  rounded-[8px] mb-6 ${
                        item.id !== currOrder ? "border-[#787878]"
                        : "border-[#ef0d5e] "
                      }`}
                    >
                      {item.value}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-x-5">
              <div className="mb-5 flex-1">
                <DatePickersStart
                  name="startDate"
                  startDate={startDate}
                  endDate={endDate}
                  fieldProps={props}
                  error={
                    props.touched.startDate && props.errors.startDate
                      ? props.errors.startDate
                      : ""
                  }
                  handleChange={(value) => setStartDate(value)}
                />
              </div>
              {currOrder === 1 && (
                <div className="mb-5 flex-1">
                  <DatePickersEnd
                    name="endDate"
                    startDate={startDate}
                    endDate={endDate}
                    fieldProps={props}
                    error={
                      props.touched.endDate && props.errors.endDate
                        ? props.errors.endDate
                        : ""
                    }
                    handleChange={(value) => setEndDate(value)}
                  />
                </div>
              )}
            </div>

            {currOrder === 0 && (
              <>
                <div className="flex gap-x-5">
                  <div className="mb-5 flex-1">
                    <TimePickers
                      value={startTime}
                      name="startTime"
                      fieldProps={props}
                      handleChange={(value) => {
                        setStartTime(value);
                      }}
                      error={
                        props.touched.startTime && props.errors.startTime
                          ? props.errors.startTime
                          : ""
                      }
                      placeholderText="Start time"
                    />
                  </div>

                  <div className="mb-5 flex-1">
                    <TimePickers
                      value={endTime}
                      name="endTime"
                      fieldProps={props}
                      handleChange={(value) => setEndTime(value)}
                      error={
                        props.touched.endTime && props.errors.endTime
                          ? props.errors.endTime
                          : ""
                      }
                      placeholderText="End time"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex mb-5 font-normal font-16 sm:font-20 color3 border border-slate-500 rounded-[8px] py-3">
              <div className="flex-1 text-left px-3">
                {currOrder === 0 && (
                  <>
                    {durationTime?.hours > 0 && (
                      <span>
                        {durationTime?.hours} hours {durationTime?.min} min
                      </span>
                    )}
                  </>
                )}
                {currOrder === 1 && durationDates.days > 0 && (
                  <span>
                    <>{durationDates.days || 0} days</>
                  </span>
                )}
              </div>
              <div className={`flex-1 text-right px-3 break-all `}>
                {currOrder === 0 && <>৳{durationTime.totalmoney}</>}
                {currOrder === 1 && <>৳{durationDates.totalmoney}</>}
              </div>
            </div>

            <div>
              <Input
                istextArea={true}
                name="detailsAboutBooking"
                placeholder="Write something about your booking"
                value={props.values.detailsAboutBooking}
                handleChange={props.handleChange}
                handleBlur={props.handleBlur}
                error={
                  props.touched.detailsAboutBooking &&
                  props.errors.detailsAboutBooking
                    ? props.errors.detailsAboutBooking
                    : ""
                }
              />
            </div>
          </div>
          {conditionalRendar(
            (currOrder === 0 && durationTime.totalmoney > 0) ||
              (currOrder === 1 && durationDates.totalmoney > 0)
          ) && (
            <>
              <ButtonClick
                type="submit"
                css={"bgcolor2 text-white rounded-full ml-auto block"}
                width="null"
                text={
                  props.isSubmitting ? (
                    <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                  ) : (
                    "Request for booking"
                  )
                }
                padding="px-6 sm:px-10"
                disable={props.isSubmitting || !props.dirty}
              />
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
