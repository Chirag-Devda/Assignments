import { useState } from "react";

import { PropertyTypeFor } from "../../constants";

const PropertyDetailsForm = () => {
  const [formData, setFormData] = useState({
    propertyFor: "",
    propertType: "",
    propertyDetails: [],
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePropertyDetails = (e) => {
    const value = e.target.innerHTML;
    if (e.currentTarget.style.backgroundColor === "white") {
      e.currentTarget.style.backgroundColor = "#122B49";
      e.currentTarget.style.color = "#ffffff";
      handlePushPropertyDetails(value);
    } else {
      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.color = "#000";
      removePropertyDetails(propertyfor);
    }
  };

  const handlePushPropertyDetails = (newItem) => {
    setFormData((prevData) => ({
      ...prevData,
      propertyDetails: [...prevData.propertyDetails, newItem],
    }));
  };

  const removePropertyDetails = (detail) => {
    const remove = formData.propertyDetails.filter((property) => {
      return property !== detail;
    });
    setFormData((prevData) => ({
      ...prevData,
      propertyDetails: [...(prevData.propertyDetails = remove)],
    }));
  };

  const resetPropertydetails = () => {
    setFormData((prevData) => ({
      ...prevData,
      propertyDetails: [...(prevData.propertyDetails = "")],
    }));
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
          <p className="pb-2">
            <span className="pr-1 text-red-600">*</span>Property For :
          </p>
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="propertyFor"
                  value="Rent"
                  checked={formData.propertyFor === "Rent"}
                  onChange={handleChange}
                  className="mr-2 h-5 w-5 cursor-pointer"
                  required
                />
                <span>Rent</span>
              </label>
            </div>
            <div className="w-1/2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="propertyFor"
                  value="Sale"
                  checked={formData.propertyFor === "Sale"}
                  onChange={handleChange}
                  className="mr-2 h-5 w-5 cursor-pointer"
                  required
                />
                <span>Sale</span>
              </label>
            </div>
          </div>
        </div>
        {/* PropertyType Radio */}
        <div className="relative">
          <p className="pb-2">
            <span className="pr-1 text-red-600">*</span>Property Type :
          </p>{" "}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="propertType"
                  value="Residential"
                  onChange={(e) => {
                    handleChange(e);
                    resetPropertydetails();
                  }}
                  checked={formData.propertType === "Residential"}
                  className="mr-2 h-5 w-5 cursor-pointer"
                />
                <span>Residential</span>
              </label>
            </div>
            <div className="w-1/2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Commercial"
                  name="propertType"
                  onChange={(e) => {
                    handleChange(e);
                    resetPropertydetails();
                  }}
                  checked={formData.propertType === "Commercial"}
                  className="k mr-2 h-5 w-5 cursor-pointer"
                />
                <span>Commercial</span>
              </label>
            </div>
            <div className="w-1/2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Land / Plot"
                  name="propertType"
                  onChange={(e) => {
                    handleChange(e);
                    resetPropertydetails();
                  }}
                  checked={formData.propertType === "Land / Plot"}
                  className="k mr-2 h-5 w-5 cursor-pointer"
                />
                <span>Land / Plot</span>
              </label>
            </div>
          </div>
          {formData.propertType === "Commercial" && (
            <div className="absolute mt-10 flex w-3/4 flex-wrap gap-4 text-black">
              {PropertyTypeFor.CommercialProperty.map((propertyfor, index) => (
                <div
                  key={index}
                  onClick={handlePropertyDetails}
                  style={{ backgroundColor: "white" }}
                  className="cursor-pointer rounded-full border border-[#D6D6D6] px-[10px] py-[5px] duration-500 hover:border-black"
                >
                  {propertyfor}
                </div>
              ))}
            </div>
          )}
          {formData.propertType === "Residential" && (
            <div className="absolute mt-10 flex w-3/4 flex-wrap gap-4 text-black">
              {PropertyTypeFor.Residential.map((propertyfor, index) => (
                <div
                  key={index}
                  onClick={handlePropertyDetails}
                  style={{ backgroundColor: "white" }}
                  className="cursor-pointer rounded-full border border-[#D6D6D6] px-[10px] py-[5px] duration-500 hover:border-black"
                >
                  {propertyfor}
                </div>
              ))}
            </div>
          )}
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
