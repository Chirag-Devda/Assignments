import { useDispatch, useSelector } from "react-redux";

import {
  PropertyTypeFor,
  PropertyAge,
  PropertyBhk,
  bathroomsToilets,
  tenantPreference,
  availability,
} from "../../constants";
import {
  FloorAndFacing,
  FormSubmitBtn,
  MultiChoice,
  PropertyArea,
  PropertyFor,
  PropertyType,
  PropertyTypeSelection,
} from "../../components";
import { handleChangeData } from "../../features/PropertyDetails/PropertyDetailSlice";
import { useNavigate } from "react-router-dom";

const PropertyDetailsForm = () => {
  const formData = useSelector((state) => state.propertyDetails.formData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields in formData are not empty
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      navigate("/listlocation");

      // save to localStorage
      localStorage.setItem("propertyDetails", JSON.stringify(formData));
      console.log("form submitted with all details", formData);
    } else {
      alert("please enter all the * required fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-full w-full bg-white">
      <div className="flex h-[368px] w-[976px] flex-col gap-14 overflow-scroll p-10 text-black shadow-xl">
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
        {/* Property Area */}
        <div>
          {" "}
          <div className="flex gap-[60px]">
            <PropertyArea
              id="builtArea"
              label="Built up Area"
              name="properyBuiltArea"
            />
            <PropertyArea
              id="carpetArea"
              label="Carpet Area"
              name="propertyCarpetArea"
            />
          </div>
        </div>
        {/* Property Floor And Facing */}
        <div className="flex gap-[60px]">
          <FloorAndFacing />
        </div>
        {/* Property Age */}
        <MultiChoice
          formDataKey="propertyAge"
          id="propertyAge"
          label="Property Age"
          array={PropertyAge}
        />
        {/* Property BHK type */}
        <MultiChoice
          formDataKey="propertyBhk"
          id="propertyBhk"
          label="BHK Type"
          array={PropertyBhk}
        />
        {/* Property Bathrooms and Toilets */}
        <MultiChoice
          formDataKey="bathroomsToilets"
          id="bathroomsToilets"
          label="Bathrooms / Toilets"
          array={bathroomsToilets}
        />
        {/* Property Tenant Preference */}
        <MultiChoice
          formDataKey="tenantPreference"
          id="tenantPreference"
          label="Tenant Preference"
          array={tenantPreference}
        />
        {/* Property Availability */}
        <MultiChoice
          formDataKey="availability"
          id="availability"
          label="Availability"
          array={availability}
        />
        <div className="flex flex-col">
          <label htmlFor="description">
            Property description <span className="text-red-600">*</span>
          </label>
          <textarea
            onChange={(e) => {
              dispatch(
                handleChangeData({
                  name: e.target.name,
                  value: e.target.value,
                }),
              );
            }}
            rows={5}
            placeholder="Add a description for your property to attract the best tenant"
            className="border-2 p-2"
            name="description"
            id="description"
          ></textarea>
        </div>
      </div>
      <FormSubmitBtn value="Next" />
    </form>
  );
};

export default PropertyDetailsForm;
