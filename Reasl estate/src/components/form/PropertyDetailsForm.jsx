import { useSelector, useDispatch } from "react-redux";

import { PropertyTypeFor } from "../../constants";
import PropertyDetailSlice, {
  pushPropertyDetail,
  removePropertyDetails,
} from "../../features/PropertyDetails/PropertyDetailSlice";
import PropertyFor from "../propertyFormSection/PropertyFor";
import PropertyType from "../propertyFormSection/PropertyType";
import PropertyTypeSelection from "../propertyFormSection/PropertyTypeSelection";

const PropertyDetailsForm = () => {
  const formData = useSelector((state) => state.productDetails.formData);

  const dispatch = useDispatch();

  const handlePropertyDetails = (e, propertyfor) => {
    const value = e.target.innerHTML;
    if (e.currentTarget.style.backgroundColor === "white") {
      e.currentTarget.style.backgroundColor = "#122B49";
      e.currentTarget.style.color = "#ffffff";
      dispatch(pushPropertyDetail(value));
    } else {
      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.color = "#000";
      dispatch(removePropertyDetails({ detail: propertyfor }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="h-full w-full bg-white">
      <div className="flex h-[368px] flex-col gap-14 overflow-scroll p-10 text-black shadow-xl">
        {/* PropertyFor Radio */}
        <div>
          <PropertyFor />
        </div>
        {/* PropertyType Radio */}
        <div className="relative">
          <p className="pb-2">
            <span className="pr-1 text-red-600">*</span>Property Type :
          </p>{" "}
          <div className="flex gap-6">
            <PropertyType name="Residential" />
            <PropertyType name="Commercial" />
            <PropertyType name="Land / Plot" />
          </div>
          <PropertyTypeSelection
            array={PropertyTypeFor.CommercialProperty}
            condition="Commercial"
          />
          <PropertyTypeSelection
            array={PropertyTypeFor.Residential}
            condition="Residential"
          />
        </div>
      </div>
      <div className="flex h-16 items-center justify-between rounded-b-lg bg-darkBlue px-8 py-3">
        <p className="text-[#7A7A7A]">
          Need Help? <b>call 9999999999</b>
        </p>
        <input
          type="submit"
          value="Next"
          className="cursor-pointer rounded-lg bg-darkBlue px-9 py-1 text-[20px] font-light text-white"
        />
      </div>
    </form>
  );
};

export default PropertyDetailsForm;
