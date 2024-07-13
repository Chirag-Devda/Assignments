import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GeneralFeatures,
  OtherFeatures,
  SocietyAmenities,
} from "../featuresFormSection";

import FormSubmitBtn from "../utils/FormSubmitBtn";

const PropertyFeatures = () => {
  const features = useSelector((state) => state.featuresDetails.features);
  const navigate = useNavigate();

  const validateFeatures = (features) => {
    return Object.values(features).every((value) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      } else {
        return value !== "";
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateFeatures(features);

    if (isValid) {
      navigate("/listprice"); // navigate to next page on submit

      // save to local storage
      localStorage.setItem("propertyfeatures", JSON.stringify(features));

      console.log("form submitted with all details", features);
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-full w-full bg-white">
      <div className="flex h-[368px] w-[976px] flex-col gap-14 overflow-scroll p-10 text-black shadow-xl">
        <GeneralFeatures />
        <hr className="text-gray" />
        <OtherFeatures />
        <hr className="text-gray" />
        <h1 className="text-lg font-semibold">SOCIETY AMENITIES</h1>
        <SocietyAmenities />
        <hr className="text-gray" />
      </div>
      <FormSubmitBtn value="Next" />
    </form>
  );
};

export default PropertyFeatures;
