import { useDispatch, useSelector } from "react-redux";
import {
  pushPropertyDetail,
  removePropertyDetails,
} from "../../features/PropertyDetails/PropertyDetailSlice";

const PropertyTypeSelection = ({ condition, array }) => {
  const formData = useSelector((state) => state.productDetails.formData);
  const dispatch = useDispatch();

  const handlePropertyDetails = (e, propertyfor) => {
    const value = e.target.innerHTML;
    if (e.currentTarget.style.backgroundColor === "white") {
      e.currentTarget.style.backgroundColor = "#122B49";
      e.currentTarget.style.color = "#ffffff";
      dispatch(pushPropertyDetail(value));
    } else {
      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.color = "#000";
      dispatch(removePropertyDetails({ detail: propertyfor }));
    }
  };
  return (
    <>
      {formData.propertType === condition && (
        <div className="mt-10 flex w-3/4 flex-wrap gap-4 text-black">
          {array.map((propertyfor, index) => (
            <button
              key={index}
              onClick={(e) => {
                handlePropertyDetails(e, propertyfor);
              }}
              style={{ backgroundColor: "white" }}
              className="cursor-pointer rounded-full border border-[#D6D6D6] px-[10px] py-[5px] duration-500 hover:border-black focus:bg-red-900"
            >
              {propertyfor}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default PropertyTypeSelection;
