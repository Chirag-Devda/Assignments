import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@material-tailwind/react";
import {
  addFeatures,
  removeFeatures,
} from "../../features/FeaturesDetails/FeaturesDetailSlice";
import { useEffect } from "react";

export const Inputs = ({ IconPath }) => {
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
        value={IconPath}
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
      <Inputs value="24/7 security" IconPath="/icons/security.png" />
      <Inputs value="CCTV Camera" IconPath="/icons/cctv.png" />
      <Inputs value="Lift" IconPath="/icons/lift.png" />
      <Inputs value="Reserved Parking" IconPath="/icons/parking.png" />
      <Inputs value="Regular water supply" IconPath="/icons/watersupply.png" />
      <Inputs value="Power Back up-Partial" IconPath="/icons/power.png" />
      <Inputs value="Power Back up-Full" IconPath="/icons/power.png" />
      <Inputs value="Maintenance staff" IconPath="/icons/maintainance.png" />
      <Inputs value="Garden/ Park" IconPath="/icons/garden.png" />
      <Inputs value="Kids Play area" IconPath="/icons/kids.png" />
      <Inputs value="Sport" IconPath="/icons/sports.png" />
      <Inputs value="Property Gym" IconPath="/icons/gym.png" />
      <Inputs value="Community Hall" IconPath="/icons/club.png" />
      <Inputs value="Shopping center" IconPath="/icons/shopingcenter.png" />
      <Inputs value="Club House" IconPath="/icons/club.png" />
      <Inputs value="Swimming pool" IconPath="/icons/swimming.png" />
      <Inputs value="Intercom" IconPath="/icons/intercom.png" />
      <Inputs value="Fire Safety" IconPath="/icons/fire.png" />
      <Inputs value="Club House" IconPath="/icons/club.png" />
      <Inputs value="Swimming pool" IconPath="/icons/swimming.png" />
    </div>
  );
};

export default SocietyAmenities;
