import { useDispatch } from "react-redux";
import { handleChangeData } from "../../features/PropertyDetails/PropertyDetailSlice";

const PropertyArea = ({ id, label, name }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative flex w-1/2 flex-col">
      <label htmlFor={id}>
        {label} <span className="text-red-600">*</span>
      </label>
      <input
        name={name}
        onChange={(e) => {
          dispatch(
            handleChangeData({
              name: e.target.name,
              value: e.target.value,
            }),
          );
        }}
        type="number"
        placeholder="0"
        className="w-full rounded-md border-2 border-[#7A7A7A] px-3 py-3 pr-16 text-black"
        required
      />
      <span className="absolute right-3 top-11 text-[#7A7A7A]">sq.Ft.</span>
    </div>
  );
};

export default PropertyArea;
