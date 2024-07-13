import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFeaturesData } from "../../features/FeaturesDetails/FeaturesDetailSlice";

const RadioInput = ({ name, value }) => {
  const features = useSelector((state) => state.featuresDetails.features);

  const dispatch = useDispatch();

  return (
    <div className="flex w-1/4 items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={features[name] === value}
        onChange={(e) => {
          dispatch(
            handleFeaturesData({
              name: e.target.name,
              value: e.target.value,
            }),
          );
        }}
        className="mr-2 h-5 w-5 cursor-pointer"
        required
      />
      <span>{value}</span>
    </div>
  );
};

export default RadioInput;
