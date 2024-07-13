import RadioInput from "./RadioInput";

const GeneralFeatures = () => {
  return (
    <>
      <h1 className="text-lg font-semibold">General Features</h1>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">
          <span className="text-red-600">*</span> Non Veg
        </label>
        <div className="flex">
          <RadioInput name="nonVeg" value="Allowed" />
          <RadioInput name="nonVeg" value="Not Allowed" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">
          <span className="text-red-600">*</span> Pets Allowed
        </label>
        <div className="flex">
          <RadioInput name="petsAllowed" value="Yes" />
          <RadioInput name="petsAllowed" value="No" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">
          <span className="text-red-600">*</span> Electricity
        </label>
        <div className="flex">
          <RadioInput name="electricity" value="Rare/No Powercut" />
          <RadioInput name="electricity" value="Frequent Powercut" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">
          <span className="text-red-600">*</span> Water Supply
        </label>
        <div className="flex">
          <RadioInput name="waterSupply" value="Municipal Corporation (BMC)" />
          <RadioInput name="waterSupply" value="Borewell" />
          <RadioInput name="waterSupply" value="Both" />
        </div>
      </div>
    </>
  );
};

export default GeneralFeatures;
