import { useDispatch, useSelector } from "react-redux";
import { handleChangeData } from "../../features/PropertyDetails/PropertyDetailSlice";

const PropertyFor = () => {
  const formData = useSelector((state) => state.propertyDetails.formData);
  const dispatch = useDispatch();
  return (
    <>
      <p className="pb-2">
        <span className="pr-1 text-red-600">*</span>Property For :
      </p>
      <div className="flex gap-6">
        <div className="flex w-1/4 items-center">
          <input
            type="radio"
            name="propertyFor"
            value="Rent"
            checked={formData.propertyFor === "Rent"}
            onChange={(e) => {
              dispatch(
                handleChangeData({
                  name: e.target.name,
                  value: e.target.value,
                }),
              );
            }}
            className="mr-2 h-5 w-5 cursor-pointer"
            required
          />
          <span>Rent</span>
        </div>
        <div className="flex w-1/4 items-center">
          <input
            type="radio"
            name="propertyFor"
            value="Sale"
            checked={formData.propertyFor === "Sale"}
            onChange={(e) => {
              dispatch(
                handleChangeData({
                  name: e.target.name,
                  value: e.target.value,
                }),
              );
            }}
            className="mr-2 h-5 w-5 cursor-pointer"
            required
          />
          <span>Sale</span>
        </div>
      </div>
    </>
  );
};

export default PropertyFor;
