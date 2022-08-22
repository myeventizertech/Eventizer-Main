import * as yup from "yup";
import commonFieldSchema from "./commonFieldSchema";
import services from "../services";
import {
  ServiceSchema_Photograpy_cinematograpy,
  ServiceSchema_Decoration_printing_press_gift_items,
  ServiceSchema_Dj_musian,
  ServiceSchema_MakeUp_MehdiArtist,
  ServiceSchema_BrandPromote,
  ServiceSchema_Rental,
} from "./serviceSchema";
import personalInfoSchema from "./personanInfoSchema";
import conditionalRendar from "../conditionalRendar";

let schema = (checkVendor) => {
  let schemaRes = yup.object().shape({
    ...(conditionalRendar(
      checkVendor === services.photography ||
        checkVendor === services.cinematography
    ) && ServiceSchema_Photograpy_cinematograpy),

    ...(conditionalRendar(
      checkVendor === services.decoration ||
        checkVendor === services.printingPress ||
        checkVendor === services.giftItems
    ) && ServiceSchema_Decoration_printing_press_gift_items),

    ...(conditionalRendar(
      checkVendor === services.mehediArtist ||
        checkVendor === services.makeupArtist
    ) && ServiceSchema_MakeUp_MehdiArtist),

    ...(checkVendor === services.djMusician && ServiceSchema_Dj_musian),
    ...(checkVendor === services.brandPromoter && ServiceSchema_BrandPromote),
    ...(checkVendor === services.rental && ServiceSchema_Rental),

    ...commonFieldSchema(checkVendor === services.cinematography),
    ...personalInfoSchema,
  });

  return schemaRes;
};

export default schema;
