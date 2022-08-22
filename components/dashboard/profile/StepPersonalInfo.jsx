import FileInput from "../../reUseComponents/FileInput";
import Input from "../../reUseComponents/Input";

const StepPeronalInfo = ({ fieldProps }) => {
  return (
    <>
      <div className="form-step-2">
        <div className="form-header-step-2">
          <h2 className="multiStepHeader">Tell us something about yourself</h2>
        </div>

        <div className="multistepeer">
          <div>
            <Input
              istextArea={true}
              label="Details about you"
              name="detailsAboutYou"
              placeholder="Write short description about you and your service"
              value={fieldProps.values.detailsAboutYou}
              handleChange={fieldProps.handleChange}
              handleBlur={fieldProps.handleBlur}
              error={
                fieldProps.touched.detailsAboutYou &&
                fieldProps.errors.detailsAboutYou
                  ? fieldProps.errors.detailsAboutYou
                  : ""
              }
            />
          </div>

          <div className="flex sm:gap-5 flex-col sm:flex-row">
            {/* <div className="flex-1 order-2 sm:order-1 ">
              <FileInput
                label="Upload your photo"
                name="uploadYourPhoto"
                title="Select image"
                value={fieldProps.values.uploadYourPhoto}
                handleChange={fieldProps.setFieldValue}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.uploadYourPhoto &&
                  fieldProps.errors.uploadYourPhoto
                    ? fieldProps.errors.uploadYourPhoto
                    : null
                }
              />
            </div> */}
            <div className="flex-1 order-1">
              <Input
                label="Your Address"
                type="text"
                name="yourAddress"
                placeholder="13no sec.... Dhaka, BD"
                value={fieldProps.values.yourAddress}
                handleChange={fieldProps.handleChange}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.yourAddress &&
                  fieldProps.errors.yourAddress
                    ? fieldProps.errors.yourAddress
                    : ""
                }
              />
            </div>
          </div>

          {/* <div className="sm:flex gap-5">
            <div className="flex-1">
              <FileInput
                label="Upload NID photocopy"
                name="nidFrontSide"
                title="Front Side"
                value={fieldProps.values.nidFrontSide}
                handleChange={fieldProps.setFieldValue}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.nidFrontSide &&
                  fieldProps.errors.nidFrontSide
                    ? fieldProps.errors.nidFrontSide
                    : null
                }
              />
            </div>

            <div className="flex-1">
              <FileInput
                label="Upload NID photocopy"
                name="nidBackSide"
                title="Back side"
                value={fieldProps.values.nidBackSide}
                handleChange={fieldProps.setFieldValue}
                handleBlur={fieldProps.handleBlur}
                error={
                  fieldProps.touched.nidBackSide &&
                  fieldProps.errors.nidBackSide
                    ? fieldProps.errors.nidBackSide
                    : null
                }
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default StepPeronalInfo;
