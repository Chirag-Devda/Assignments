import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormdata } from "../../../features/PropertyDetails/PropertyDetailSlice";

const PreviewDescription = () => {
  const propertyDetails = useSelector(
    (state) => state.propertyDetails.formData,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem("propertyDetails");

    if (data) {
      dispatch(setFormdata(JSON.parse(data)));
    }
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-[32px] font-normal">Description</h1>
      <p>{propertyDetails.description}</p>
      <p className="cursor-pointer font-semibold underline">Show more</p>
    </div>
  );
};

export default PreviewDescription;
