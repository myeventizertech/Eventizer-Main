import * as yup from "yup";
import services from "../services";

import {
  ServiceSchema_Photograpy,
  ServiceSchema_Cinematograpy,
  // ServiceSchema_Decoration,
  // ServiceSchema_GiftItems,
  // ServiceSchema_Print_press,
} from "./serviceSchema";
import conditionalRendar from "../conditionalRendar";

let mustBeNumberSchema = yup
  .number()
  .typeError("Must be a number")
  .positive("Must be greater than zero")
  .required("Required field");

let mustBeNumberOptinalSchema = yup
  .number()
  .typeError("Must be a number")
  .positive("Must be greater than zero")
  .notRequired("Not required");

let commonSchema = (checkVendor, isOptinal) => {
  let commonSchemaRes = yup.object().shape({
    ...(conditionalRendar(checkVendor === services.photography) &&
      ServiceSchema_Photograpy(isOptinal)),
    ...(conditionalRendar(checkVendor === services.cinematography) &&
      ServiceSchema_Cinematograpy(isOptinal)),
    // ...(conditionalRendar(checkVendor === services.decoration) &&
    //   ServiceSchema_Decoration),

    // ...(conditionalRendar(checkVendor === services.printingPress) &&
    //   ServiceSchema_Print_press),

    ...(conditionalRendar(
      checkVendor === services.photography ||
        checkVendor === services.cinematography ||
        checkVendor === services.djMusician ||
        checkVendor === services.mehediArtist ||
        checkVendor === services.makeupArtist
    ) && {
      pricePerHour: isOptinal ? mustBeNumberOptinalSchema : mustBeNumberSchema,
      pricePerDay: mustBeNumberOptinalSchema,
    }),

    ...(conditionalRendar(
      checkVendor === services.photography ||
        checkVendor === services.cinematography
    ) && {
      deliveryTime: isOptinal
        ? yup.mixed().nullable().notRequired("Not required")
        : yup.mixed().nullable().required("Required field"),
      minPerson: isOptinal ? mustBeNumberOptinalSchema : mustBeNumberSchema,
    }),

    ...(conditionalRendar(
      checkVendor === services.photography ||
        checkVendor === services.cinematography ||
        checkVendor === services.djMusician ||
        checkVendor === services.mehediArtist ||
        checkVendor === services.makeupArtist
    ) && {
      minPerson: isOptinal ? mustBeNumberOptinalSchema : mustBeNumberSchema,
    }),

    customOptionFields: yup.array().of(
      yup.object().shape(
        {
          fieldName: yup
            .string()
            .min(2, "Minimum 2 letter required")
            .max(300, "Maximum 300 letter required")
            .notRequired("Not required"),
          // .when("fieldValue", {
          //   is: (val) => (val || val?.length === 0 ? true : false),
          //   then: yup.string().required("Required field"),
          // })
          // fieldValue: yup
          //   .string()
          //   .min(2, "Minimum 2 letter required")
          //   .max(50, "Maximum 50 letter required")
          //   .notRequired("Not required")
          //   .when("fieldName", {
          //     is: (val) => (val || val?.length === 0 ? true : false),
          //     then: yup.string().required("Required field"),
          //   }),
        }
        // ["fieldName", "fieldValue"]
      )
    ),
    overTimePricePerDay: mustBeNumberOptinalSchema,
    overTimePricePerHour: mustBeNumberOptinalSchema,
  });
  return commonSchemaRes;
};

let commonFieldSchema = (checkVendor) => {
  let res = {
    packageName: yup
      .string()
      .min(1, "Minimum 1 letter required")
      .max(50, "Maximum 50 letter required")
      .required("Required field"),

    packageDetails: yup
      .string()
      .min(30, "Minimum 30 letter required")
      .max(500, "Maximum 500 letter required")
      .required("Required field"),
    // ...(conditionalRendar(checkVendor === services.giftItems) &&
    //   ServiceSchema_GiftItems),

    ...(conditionalRendar(
      checkVendor === services.cinematography ||
        checkVendor === services.djMusician ||
        checkVendor === services.decoration
    ) && {
      packageDemoLink: yup
        .string()
        .test("urlCheck", "Enter valid youtube or vimeo url", function (value) {
          const youTubeRegex =
            /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

          const vimeoRegex =
            /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/;
          let isYouTube = youTubeRegex.test(value);
          let isVimeo = vimeoRegex.test(value);
          if (!isYouTube && !isVimeo) {
            return false;
          }
          return true;
        })

        .required("Required field"),
    }),

    ...(conditionalRendar(
      checkVendor !== services.giftItems ||
        checkVendor !== services.brandPromoter
    ) && {
      basic: commonSchema(checkVendor,true),
      standard: commonSchema(checkVendor, false),
      premium: commonSchema(checkVendor, true),
    }),
    ...(conditionalRendar(checkVendor === services.brandPromoter) && {
      pricePerHour: mustBeNumberSchema,
      pricePerDay: mustBeNumberOptinalSchema,
    }),
  };

  return res;
};

export default commonFieldSchema;
