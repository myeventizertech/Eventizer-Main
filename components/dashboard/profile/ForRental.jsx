import React from "react";
import Input from "../../reUseComponents/Input";
import SelectInput from "../../reUseComponents/SelectInput";
import FileInput from "../../reUseComponents/FileInput";
const ForRental = ({ fieldProps, optionsVehicleType }) => {
  return (
    <>
      <div>
        <SelectInput
          handleChange={fieldProps.setFieldValue}
          value={fieldProps.values.vehicleType}
          options={optionsVehicleType}
          label="Vehicle type"
          placeholder="Select vehicle"
          name="vehicleType"
          handleBlur={fieldProps.setFieldTouched}
          error={
            fieldProps.touched.vehicleType &&
            fieldProps.errors.vehicleType &&
            !fieldProps.values.vehicleType
              ? fieldProps.errors.vehicleType
              : ""
          }
        />
      </div>

      <div>
        <Input
          label="Car model name"
          type="text"
          name="carModelName"
          placeholder="BMW - G6239"
          value={fieldProps.values.carModelName}
          handleChange={fieldProps.handleChange}
          handleBlur={fieldProps.handleBlur}
          error={
            fieldProps.touched.carModelName && fieldProps.errors.carModelName
              ? fieldProps.errors.carModelName
              : ""
          }
        />
      </div>

      <div>
        <Input
          label="Max seat capacity"
          type="text"
          name="maxSeatCapacity"
          placeholder="4 seat"
          value={fieldProps.values.maxSeatCapacity}
          handleChange={fieldProps.handleChange}
          handleBlur={fieldProps.handleBlur}
          error={
            fieldProps.touched.maxSeatCapacity &&
            fieldProps.errors.maxSeatCapacity
              ? fieldProps.errors.maxSeatCapacity
              : ""
          }
        />
      </div>

      <div>
        <Input
          label="Driving License Number"
          type="text"
          name="drivingLicenseNumber"
          placeholder="8DTY6ETTA"
          value={fieldProps.values.drivingLicenseNumber}
          handleChange={fieldProps.handleChange}
          handleBlur={fieldProps.handleBlur}
          error={
            fieldProps.touched.drivingLicenseNumber &&
            fieldProps.errors.drivingLicenseNumber
              ? fieldProps.errors.drivingLicenseNumber
              : ""
          }
        />
      </div>

      <div>
        <Input
          min={`${new Date().getFullYear() - 1}-01-01`}
          label="License expired date"
          type="date"
          name="licenseExpiredDate"
          placeholder=""
          value={fieldProps.values.licenseExpiredDate}
          handleChange={fieldProps.handleChange}
          handleBlur={fieldProps.handleBlur}
          error={
            fieldProps.touched.licenseExpiredDate &&
            fieldProps.errors.licenseExpiredDate
              ? fieldProps.errors.licenseExpiredDate
              : ""
          }
        />
      </div>

      {/* <div>
        <FileInput
          label="Upload license photocopy"
          name="licenseFrontSide"
          title="Front Side"
          value={fieldProps.values.licenseFrontSide}
          handleChange={fieldProps.setFieldValue}
          handleBlur={fieldProps.handleBlur}
          error={
            fieldProps.touched.licenseFrontSide &&
            fieldProps.errors.licenseFrontSide
              ? fieldProps.errors.licenseFrontSide
              : null
          }
        />
      </div>

      <div>
        <FileInput
          label="Upload license photocopy"
          name="licenseBackSide"
          title="Back side"
          value={fieldProps.values.licenseBackSide}
          handleChange={fieldProps.setFieldValue}
          handleBlur={fieldProps.handleBlur}
          error={
            fieldProps.touched.licenseBackSide &&
            fieldProps.errors.licenseBackSide
              ? fieldProps.errors.licenseBackSide
              : null
          }
        />
      </div> */}
    </>
  );
};

export default ForRental;
