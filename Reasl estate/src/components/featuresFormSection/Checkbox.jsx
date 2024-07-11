import { Checkbox } from "@material-tailwind/react";

import {
  addFeatures,
  removeFeatures,
} from "../../features/FeaturesDetails/FeaturesDetailSlice";

import { useDispatch } from "react-redux";

const CheckboxInput = ({ name, value }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch(
        addFeatures({
          name: e.target.name,
          value: e.target.value,
        }),
      );
    } else {
      dispatch(
        removeFeatures({
          name: e.target.name,
          value: e.target.value,
        }),
      );
    }
  };
  return (
    <div className="flex w-1/3 items-center gap-6">
      <Checkbox
        color="blue"
        onChange={handleChange}
        type="checkbox"
        name={name}
        value={value}
        className="h-6 w-6 cursor-pointer text-center checked:bg-darkBlue"
      />
      <span>{value}</span>
    </div>
  );
};

export default CheckboxInput;
