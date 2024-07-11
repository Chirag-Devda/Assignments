import { useDispatch } from "react-redux";
import { Checkbox } from "@material-tailwind/react";
import {
  addFeatures,
  removeFeatures,
} from "../../features/FeaturesDetails/FeaturesDetailSlice";

export const Inputs = ({ value, IconPath }) => {
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
    <div className="flex w-[138px] flex-col-reverse items-center">
      <Checkbox
        color="blue"
        onChange={handleChange}
        type="checkbox"
        name="societyAmenities"
        value={value}
        className="cursor-pointer text-center checked:bg-darkBlue"
      />
      <div className="flex flex-col items-center justify-center">
        <img src={IconPath} alt="Icon" />
      </div>
    </div>
  );
};

const SocietyAmenities = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <Inputs
        value="24/7 security"
        IconPath="../src/assets/icons/security.png"
      />
      <Inputs value="CCTV Camera" IconPath="../src/assets/icons/cctv.png" />
      <Inputs value="Lift" IconPath="../src/assets/icons/lift.png" />
      <Inputs
        value="Reserved Parking"
        IconPath="../src/assets/icons/parking.png"
      />
      <Inputs
        value="Regular water supply"
        IconPath="../src/assets/icons/watersupply.png"
      />
      <Inputs
        value="Power Back up-Partial"
        IconPath="../src/assets/icons/power.png"
      />
      <Inputs
        value="Power Back up-Full"
        IconPath="../src/assets/icons/power.png"
      />
      <Inputs
        value="Maintenance staff"
        IconPath="../src/assets/icons/maintainance.png"
      />
      <Inputs value="Garden/ Park" IconPath="../src/assets/icons/garden.png" />
      <Inputs value="Kids Play area" IconPath="../src/assets/icons/kids.png" />
      <Inputs value="Sport" IconPath="../src/assets/icons/sports.png" />
      <Inputs value="Property Gym" IconPath="../src/assets/icons/gym.png" />
      <Inputs value="Community Hall" IconPath="../src/assets/icons/club.png" />
      <Inputs
        value="Shopping center"
        IconPath="../src/assets/icons/shopingcenter.png"
      />
      <Inputs value="Club House" IconPath="../src/assets/icons/club.png" />
      <Inputs
        value="Swimming pool"
        IconPath="../src/assets/icons/swimming.png"
      />
      <Inputs value="Intercom" IconPath="../src/assets/icons/intercom.png" />
      <Inputs value="Fire Safety" IconPath="../src/assets/icons/fire.png" />
      <Inputs value="Club House" IconPath="../src/assets/icons/club.png" />
      <Inputs
        value="Swimming pool"
        IconPath="../src/assets/icons/swimming.png"
      />
    </div>
  );
};

export default SocietyAmenities;
