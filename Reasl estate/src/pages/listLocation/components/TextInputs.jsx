import { useDispatch } from "react-redux";
import { handleLocationData } from "../../../features/LocationDetails/LocationDetailSlice";

const TextInputs = ({ label, name }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-1/2 flex-col">
      <label className="pb-2">
        {label}
        <span className="ml-1 text-lg text-red-600">*</span>
      </label>
      <input
        name={name}
        onChange={(e) => {
          dispatch(
            handleLocationData({
              name: e.target.name,
              value: e.target.value,
            }),
          );
        }}
        type="text"
        className="w-full rounded-md border-2 border-[#7A7A7A] px-3 py-3 pr-16 text-black"
        required
      />
    </div>
  );
};

export default TextInputs;
