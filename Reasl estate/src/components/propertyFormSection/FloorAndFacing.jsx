import { useDispatch } from "react-redux";
import { handleChangeData } from "../../features/PropertyDetails/PropertyDetailSlice";

const FloorAndFacing = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex w-1/2 gap-10">
        <div>
          <label className="mb-2" htmlFor="propertyOnFloor">
            Property on Floor <span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              dispatch(
                handleChangeData({
                  name: e.target.name,
                  value: e.target.value,
                }),
              );
            }}
            name="propertyOnFloor"
            id="propertyOnFloor"
            type="number"
            className="w-full rounded-md border-2 border-[#7A7A7A] px-3 py-3 pr-16 text-black"
          />
        </div>
        <div>
          <label className="mb-2" htmlFor="totalFloor">
            Total Floor <span className="text-red-600">*</span>
          </label>
          <input
            onChange={(e) => {
              dispatch(
                handleChangeData({
                  name: e.target.name,
                  value: e.target.value,
                }),
              );
            }}
            name="totalFloor"
            id="totalFloor"
            type="number"
            className="w-full rounded-md border-2 border-[#7A7A7A] px-3 py-3 pr-16 text-black"
          />
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
        <label htmlFor="propertyFacing">Property Facing</label>
        <select
          name="propertyFacing"
          onChange={(e) => {
            dispatch(
              handleChangeData({
                name: e.target.name,
                value: e.target.value,
              }),
            );
          }}
          className="rounded-md border-2 border-[#7A7A7A] p-4"
          id="propertyFacing"
        >
          <option className="text-lg" value="North">
            North
          </option>
          <option className="text-lg" value="East">
            East
          </option>
          <option className="text-lg" value="South">
            South
          </option>
          <option className="text-lg" value="West">
            West
          </option>
          <option className="text-lg" value="North-west">
            North-west
          </option>
          <option className="text-lg" value="South-west">
            South-west
          </option>
          <option className="text-lg" value="North-east">
            North-east
          </option>
          <option className="text-lg" value="South-east">
            South-east
          </option>
        </select>
      </div>
    </>
  );
};

export default FloorAndFacing;
