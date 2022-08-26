import React from "react";

const FormData = ({ formData }) => {
  let { corporetFrom } = formData;
  return (
    <>
      {corporetFrom.corporateService && (
        <>
          {corporetFrom.corporateService.map((item, i) => {
            return (
              <div key={i}>
                <h1 className="MyPackageListItemHeading">
                  {item.requiredService}
                </h1>

                <p className="MyPackageListItemvalue ">{item.targetBudget}</p>
              </div>
            );
          })}
        </>
      )}

      {corporetFrom.name && (
        <>
          <h1 className="MyPackageListItemHeading">Name</h1>
          <p className="MyPackageListItemvalue ">{corporetFrom.name}</p>
        </>
      )}

      {corporetFrom.companyName && (
        <>
          <h1 className="MyPackageListItemHeading">Company Name</h1>
          <p className="MyPackageListItemvalue ">{corporetFrom.companyName}</p>
        </>
      )}

      {corporetFrom.phoneNumber && (
        <>
          <h1 className="MyPackageListItemHeading">Phone Number</h1>
          <p className="MyPackageListItemvalue ">{corporetFrom.phoneNumber}</p>
        </>
      )}
      {corporetFrom.email && (
        <>
          <h1 className="MyPackageListItemHeading">Email</h1>
          <p className="MyPackageListItemvalue ">{corporetFrom.email}</p>
        </>
      )}
      {corporetFrom.eventTitel && (
        <>
          <h1 className="MyPackageListItemHeading">Event Titel</h1>
          <p className="MyPackageListItemvalue ">{corporetFrom.eventTitel}</p>
        </>
      )}
      {corporetFrom.eventLocation && (
        <>
          <h1 className="MyPackageListItemHeading">Event Location</h1>
          <p className="MyPackageListItemvalue ">
            {corporetFrom.eventLocation}
          </p>
        </>
      )}
      {corporetFrom.eventDate && (
        <>
          <h1 className="MyPackageListItemHeading">Event Date</h1>
          <p className="MyPackageListItemvalue ">{corporetFrom.eventDate}</p>
        </>
      )}
    </>
  );
};

export default FormData;
