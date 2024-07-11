import CheckboxInput from "./Checkbox";

const OtherFeatures = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">Furnishing</label>
        <div className="flex">
          <CheckboxInput name="furnishing" value="Fully Furnished" />
          <CheckboxInput name="furnishing" value="Semi Furnished" />
          <CheckboxInput name="furnishing" value="Unfurnished" />
        </div>
      </div>
      <hr className="text-gray" />
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">Additional Features</label>
        <div className="flex w-full flex-wrap">
          <CheckboxInput name="additionalFeatures" value="Air Conditioning" />
          <CheckboxInput name="additionalFeatures" value="Ceiling Fans" />
          <CheckboxInput name="additionalFeatures" value="Refrigerator" />
          <CheckboxInput name="additionalFeatures" value="Washing machine" />
          <CheckboxInput name="additionalFeatures" value="Microwave" />
          <CheckboxInput name="additionalFeatures" value="oven" />
        </div>
      </div>
      <hr className="text-gray" />
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">Tiles</label>
        <div className="flex">
          <CheckboxInput name="tiles" value="Normal White Tiles" />
          <CheckboxInput name="tiles" value="Marble" />
          <CheckboxInput name="tiles" value="Vitrified Tiles" />
        </div>
      </div>
      <hr className="text-gray" />
      <div className="flex flex-col gap-8">
        <label className="text-lg font-semibold">Tiles</label>
        <div className="flex">
          <CheckboxInput
            name="safety"
            value="24/7 Security personnel (Gated Security)"
          />
          <CheckboxInput name="safety" value="Security Systems- CCTV" />
        </div>
      </div>
    </>
  );
};

export default OtherFeatures;
