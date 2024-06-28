import { MdDelete } from "react-icons/md";
import { image1 } from "../../../assets";

const itemCard = () => {
  return (
    <div className="py-6 px-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="productImage ">
          <img src={image1} alt="product" className="h-12 object-contain" />
        </div>
        <div className="aboutproduct flex flex-col text-[14px] font-medium text-slate-500">
          <p>i phone x</p>
          <p>50,000</p>
        </div>
      </div>
      <div className="details flex items-center space-x-10">
        <div className="flex items-center gap-2">
          <p className="text-[32px] font-bold text-red-600">-</p>
          <span className="text-[20px]">3</span>
          <p className="text-[22px] text-green-700 font-bold">+</p>
        </div>
        <div>
          <p>12,984</p>
        </div>
        <div>
          <MdDelete className="text-red-500" size={20} />
        </div>
      </div>
    </div>
  );
};

export default itemCard;
