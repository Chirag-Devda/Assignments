import { useState } from "react";
import { updateFormData } from "../../features/PropertyDetails/PropertyDetailSlice";
import { useDispatch } from "react-redux";

const MultiChoice = ({ id, label, array, formDataKey }) => {
  const [selectedbg, setSelectedbg] = useState(null);
  const dispatch = useDispatch();

  const handleSelection = (index, value) => {
    setSelectedbg(index);
    dispatch(updateFormData({ fieldName: formDataKey, value: value }));
  };

  return (
    <>
      <div className="flex flex-col">
        <label className="pb-[10px]" htmlFor={id}>
          {label} <span className="text-red-600">*</span>
        </label>
        <div className="flex flex-wrap gap-4 text-black">
          {array.map((item, index) => (
            <div
              key={index}
              value={item}
              name={item}
              onClick={(e) => {
                handleSelection(index, e.target.innerHTML);
                console.log(e.target.innerHTML);
              }}
              style={{
                backgroundColor: selectedbg === index ? "#122b49" : "white",
                color: selectedbg === index ? "white" : "black",
              }}
              className="cursor-pointer rounded-full border border-[#D6D6D6] px-5 py-[5px] duration-500 hover:border-black"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MultiChoice;
