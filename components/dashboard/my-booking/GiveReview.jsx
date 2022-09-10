import React, { useEffect } from "react";
import Input from "../../reUseComponents/Input";
import { Formik, Form } from "formik";
import * as yup from "yup";
import ButtonClick from "../../reUseComponents/ButtonClick";
import Loader from "../../reUseComponents/Loader";

import Rater from "./Rater";
import * as mutations from "../../../src/graphql/mutations";
import { API } from "aws-amplify";
import { v4 as uuid } from "uuid";
let ratingSchema = yup
  .number()
  .typeError("Must be a number")
  .positive("Required field")
  .required("Required field");

let reviewSchema = yup.object().shape({
  ServiceReview: ratingSchema,
  BehaviourReview: ratingSchema,
  ValueOfMoneyReview: ratingSchema,
  reviewDescription: yup
    .string()
    .min(5, "Minimum 5 letter required")
    .max(500, "Maximum 500 letter required")
    .required("Required field"),
});
let initialValues = {
  ServiceReview: 0,
  BehaviourReview: 0,
  ValueOfMoneyReview: 0,
  reviewDescription: "",
};

const GiveReview = ({ service, id, oid, setReviewIsOpen, getData }) => {
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));

  let onSubmit = async (values) => {
    let serviceAPI = null;
    if (service === "photography") {
      serviceAPI = "photographyID";
    }
    if (service === "cinematography") {
      serviceAPI = "cinematographyID";
    }

    if (service === "dj-musician") {
      serviceAPI = "djmusicianID";
    }

    if (service === "mehedi-artist") {
      serviceAPI = "mehediartistID";
    }
    if (service === "makeup-artist") {
      serviceAPI = "makeupartistID";
    }
    // let obj = JSON.parse(values?.packageName)
    try {
      let average =
        (values.ValueOfMoneyReview +
          values.ServiceReview +
          values.BehaviourReview) /
        3;
      let obj = {
        description: values.reviewDescription,
        valueForMoney: values.ValueOfMoneyReview,
        service: values.ServiceReview,
        behaviour: values.BehaviourReview,
        average: average,
        userPicture: storage?.profilePicture,
        userID: storage?.user?.id,
        userName:storage?.user?.firstName +" "+storage?.user?.lastName
      };
      var person = { [serviceAPI]: id };
      const reviewQuery = await API.graphql({
        query: mutations.createReview,
        variables: {
          input: { ...obj, ...person },
        },
      });
      let rid = reviewQuery?.data?.createReview?.id;
      await fetch(
        "https://qt4flpsn7zuo7nea2mobqlyuxa0ediap.lambda-url.ap-southeast-1.on.aws/",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderID: oid,
            reviewID: rid,
          }),
        }
      );
      getData();
      setReviewIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={reviewSchema}
          validateOnBlur={true}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <div className="grid grid-cols-1  sm:grid-cols-3 gap-4">
                <Rater
                  name="ServiceReview"
                  title="Service"
                  fieldProps={props}
                />

                <Rater
                  name="BehaviourReview"
                  title="Behaviour"
                  fieldProps={props}
                />

                <Rater
                  name="ValueOfMoneyReview"
                  title="Value of Money"
                  fieldProps={props}
                />
              </div>

              <div className="mt-3">
                <Input
                  istextArea={true}
                  label="Write a review"
                  name="reviewDescription"
                  placeholder="Write a review"
                  value={props.values.reviewDescription}
                  handleChange={props.handleChange}
                  handleBlur={props.handleBlur}
                  error={
                    props.touched.reviewDescription &&
                    props.errors.reviewDescription
                      ? props.errors.reviewDescription
                      : ""
                  }
                />
              </div>
              <ButtonClick
                type="submit"
                css={"bgcolor2 text-white rounded-full ml-auto block"}
                width="null"
                text={
                  props.isSubmitting ? (
                    <Loader loaderWidht="w-[27px] h-[27px]" center={true} />
                  ) : (
                    "Submit"
                  )
                }                padding="px-6 sm:px-14"
                disable={props.isSubmitting || !props.dirty}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default GiveReview;
