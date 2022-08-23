import MultiSelect from "../../reUseComponents/MultiSelect";
import Input from "../../reUseComponents/Input";
import {
  optionsSpecializedInPhoto_Cinemato,
  optionsSpecializedInDecoration,
  optionsSpecializedInPrinting_press,
  optionsSpecializedInGiftItems,
  optionsSpecializedInDJMusician,
  optionsSpecializedInBrandPromoter,
  optionsTeamMember,
  optionsVehicleType,
} from "../../../utils/options";
import CommonFields, { CommonFieldShareLink } from "./CommonFields";
import SelectInput from "../../reUseComponents/SelectInput";
import ForRental from "./ForRental";
import services from "../../../utils/services";
import conditionalRendar from "../../../utils/conditionalRendar";

function optionsSpecializedIn(serviceCheck) {
  switch (serviceCheck) {
    case services.photography:
      return optionsSpecializedInPhoto_Cinemato;
    case services.cinematography:
      return optionsSpecializedInPhoto_Cinemato;
    case services.decoration:
      return optionsSpecializedInDecoration;
    case services.printingPress:
      return optionsSpecializedInPrinting_press;
    case services.giftItems:
      return optionsSpecializedInGiftItems;
    case services.djMusician:
      return optionsSpecializedInDJMusician;
    case services.brandPromoter:
      return optionsSpecializedInBrandPromoter;
    default:
      return [{ id: 1, value: "not", label: "found" }];
  }
}

const VendorDetailsService = ({ fieldProps, serviceCheck, attributes }) => {
  return (
    <>
      <div className="form-step-1">
        <div className="form-header-step-1">
          <h2 className="multiStepHeader">
            Tell us something about your service
          </h2>
        </div>

        <div className="multistepeer">
          <div className="gap-x-5 grid sm:grid-cols-2 ">
            <div>
              <Input
                label="First Name"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={fieldProps.values.firstName}
                handleChange={fieldProps.handleChange}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.firstName && fieldProps.errors.firstName
                    ? fieldProps.errors.firstName
                    : ""
                }
              />
            </div>

            <div>
              <Input
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={fieldProps.values.lastName}
                handleChange={fieldProps.handleChange}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.lastName && fieldProps.errors.lastName
                    ? fieldProps.errors.lastName
                    : ""
                }
              />
            </div>

            <div className="mb-3">
              <label className="inputLabel">Email Address</label>
              <input
                type="text"
                defaultValue={attributes?.email}
                readOnly
                className="inputdesign inpBorderColor w-full font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px] opacity-70 pointer-events-none"
              />
            </div>

            <div>
              <Input
                label="Phone Number"
                type="text"
                name="phone"
                placeholder="018XXXXXXXX"
                value={fieldProps.values.phone}
                handleChange={fieldProps.handleChange}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.phone && fieldProps.errors.phone
                    ? fieldProps.errors.phone
                    : ""
                }
              />
            </div>
            <div>
              <Input
                label="NID Number"
                type="text"
                name={`NIDNumber`}
                placeholder="909 897 8989"
                value={fieldProps.values.NIDNumber}
                handleChange={fieldProps.handleChange}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.NIDNumber && fieldProps.errors.NIDNumber
                    ? fieldProps.errors.NIDNumber
                    : ""
                }
              />
            </div>
            {conditionalRendar(
              serviceCheck !== services.rental &&
                serviceCheck !== services.mehediArtist &&
                serviceCheck !== services.makeupArtist
            ) && (
              <div>
                <MultiSelect
                  handleChange={fieldProps.setFieldValue}
                  value={fieldProps.values.specializedIn}
                  options={optionsSpecializedIn(serviceCheck)}
                  label={`${
                    serviceCheck === services.giftItems
                      ? "Gift items"
                      : "Specialized in"
                  }`}
                  placeholder="Select category"
                  name="specializedIn"
                  handleBlur={fieldProps.setFieldTouched}
                  error={
                    fieldProps.touched.specializedIn &&
                    fieldProps.errors.specializedIn &&
                    fieldProps.values.specializedIn.length < 1
                      ? fieldProps.errors.specializedIn
                      : ""
                  }
                />
              </div>
            )}

            {conditionalRendar(
              serviceCheck === services.djMusician ||
                serviceCheck === services.mehediArtist ||
                serviceCheck === services.makeupArtist
            ) && (
              <div>
                <SelectInput
                  handleChange={fieldProps.setFieldValue}
                  value={fieldProps.values.teamMember}
                  options={optionsTeamMember}
                  label="Team member"
                  placeholder="Select member"
                  name="teamMember"
                  handleBlur={fieldProps.setFieldTouched}
                  error={
                    fieldProps.touched.teamMember &&
                    fieldProps.errors.teamMember &&
                    !fieldProps.values.teamMember
                      ? fieldProps.errors.teamMember
                      : ""
                  }
                />
              </div>
            )}

            <div>
              <Input
                label={`${
                  serviceCheck === services.rental ? "Car Name" : "Company Name"
                }`}
                type="text"
                name="title"
                placeholder={`${
                  serviceCheck === services.rental
                    ? "Enter car name"
                    : "Enter your company name"
                }`}
                value={fieldProps.values.title}
                handleChange={fieldProps.handleChange}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.title && fieldProps.errors.title
                    ? fieldProps.errors.title
                    : ""
                }
              />
            </div>

            {conditionalRendar(
              serviceCheck === services.photography ||
                serviceCheck === services.cinematography
            ) && (
              <div>
                <Input
                  label="Device name"
                  type="text"
                  name="deviceName"
                  placeholder="Ex: Canon 800D"
                  value={fieldProps.values.deviceName}
                  handleChange={fieldProps.handleChange}
                  handleBlur={fieldProps.handleBlur}
                  error={
                    fieldProps.touched.deviceName &&
                    fieldProps.errors.deviceName
                      ? fieldProps.errors.deviceName
                      : ""
                  }
                />
              </div>
            )}
            <CommonFields fieldProps={fieldProps} />
            {/* for rental only */}
            {serviceCheck === services.rental && (
              <ForRental
                fieldProps={fieldProps}
                optionsVehicleType={optionsVehicleType}
              />
            )}
          </div>
          <CommonFieldShareLink
            fieldProps={fieldProps}
            serviceCheck={serviceCheck}
          />
        </div>
      </div>
    </>
  );
};

export default VendorDetailsService;
