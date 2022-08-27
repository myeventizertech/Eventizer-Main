import React from "react";

const FormData = ({ formData }) => {
  let { brief } = formData;
  let briefItem = brief?.map((item) => JSON.parse(item));
  return (
    <>
      {briefItem && (
        <>
          {briefItem?.map((item, i) => {
            return (
              <div key={i}>
                <h1 className="MyPackageListItemHeading">
                  {item?.requiredService}
                </h1>

                <p className="MyPackageListItemvalue ">{item?.targetBudget}</p>
              </div>
            );
          })}
        </>
      )}

      {formData?.name && (
        <>
          <h1 className="MyPackageListItemHeading">Name</h1>
          <p className="MyPackageListItemvalue ">{formData?.name}</p>
        </>
      )}

      {formData?.companyName && (
        <>
          <h1 className="MyPackageListItemHeading">Company Name</h1>
          <p className="MyPackageListItemvalue ">{formData?.companyName}</p>
        </>
      )}

      {formData?.phoneNumber && (
        <>
          <h1 className="MyPackageListItemHeading">Phone Number</h1>
          <p className="MyPackageListItemvalue ">{formData?.phoneNumber}</p>
        </>
      )}
      {formData?.email && (
        <>
          <h1 className="MyPackageListItemHeading">Email</h1>
          <p className="MyPackageListItemvalue ">{formData?.email}</p>
        </>
      )}
      {formData?.eventTitel && (
        <>
          <h1 className="MyPackageListItemHeading">Event Titel</h1>
          <p className="MyPackageListItemvalue ">{formData?.eventTitel}</p>
        </>
      )}
      {formData?.eventLocation && (
        <>
          <h1 className="MyPackageListItemHeading">Event Location</h1>
          <p className="MyPackageListItemvalue ">{formData?.eventLocation}</p>
        </>
      )}
      {formData?.eventDate && (
        <>
          <h1 className="MyPackageListItemHeading">Event Date</h1>
          <p className="MyPackageListItemvalue ">{formData?.eventDate}</p>
        </>
      )}
    </>
  );
};

export default FormData;
