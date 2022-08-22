import * as yup from "yup";
import commonFieldSchema from "./commonFieldSchema";

let schema = (checkVendor) => {
  let schemaRes = yup.object().shape({
    ...commonFieldSchema(checkVendor),
  });

  return schemaRes;
};
export default schema;
