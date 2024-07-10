import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeData,
  resetProperyDetail,
} from "../../features/PropertyDetails/PropertyDetailSlice";

const PropertyType = ({ name }) => {
  const formData = useSelector((state) => state.productDetails.formData);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex w-1/4 items-center">
        <input
          type="radio"
          name="propertType"
          value={name}
          onChange={(e) => {
            if (e.target.checked) {
              dispatch(resetProperyDetail());
            }
            dispatch(
              handleChangeData({
                name: e.target.name,
                value: e.target.value,
              }),
            );
          }}
          checked={formData.propertType === name}
          className="mr-2 h-5 w-5 cursor-pointer"
          required
        />
        <span>{name}</span>
      </div>
    </>
  );
};

export default PropertyType;
