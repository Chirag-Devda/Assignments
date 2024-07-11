import React from "react";
import RadioSection from "./Radio";

const GeneralFeatures = () => {
  return (
    <>
      <h1 className="text-lg font-semibold">General Features</h1>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">
          <span className="text-red-600">*</span> Non Veg
        </label>
        <div className="flex">
          <RadioSection name="nonVeg" value="Allowed" />
          <RadioSection name="nonVeg" value="Not Allowed" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">
          <span className="text-red-600">*</span> Pets Allowed
        </label>
        <div className="flex">
          <RadioSection name="petsAllowed" value="Yes" />
          <RadioSection name="petsAllowed" value="No" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">
          <span className="text-red-600">*</span> Electricity
        </label>
        <div className="flex">
          <RadioSection name="electricity" value="Rare/No Powercut" />
          <RadioSection name="electricity" value="Frequent Powercut" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">
          <span className="text-red-600">*</span> Water Supply
        </label>
        <div className="flex">
          <RadioSection
            name="waterSupply"
            value="Municipal Corporation (BMC)"
          />
          <RadioSection name="waterSupply" value="Borewell" />
          <RadioSection name="waterSupply" value="Both" />
        </div>
      </div>
    </>
  );
};

export default GeneralFeatures;
