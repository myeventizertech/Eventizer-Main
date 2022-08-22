import React from "react";
import ButtonClick from "../../reUseComponents/ButtonClick";
import Loader from "../../reUseComponents/Loader";
const ServiceSubmitButton = ({ fieldProps }) => {
  return (
    <>
      <div className="multistepeer">
        {fieldProps.isSubmitting ? (
          <Loader center={true} colorDefault={false} />
        ) : (
          <>
            <ButtonClick
              type="submit"
              css={"bgcolor2 text-white rounded-full ml-auto block"}
              width="null"
              text={"Update"}
              padding="px-6 sm:px-14"
              disable={fieldProps.isSubmitting || !fieldProps.dirty}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ServiceSubmitButton;
