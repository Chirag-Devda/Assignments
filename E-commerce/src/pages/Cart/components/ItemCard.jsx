import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  deleteCartItem,
  saveItemsToLocalStorage,
  updateCartItemQuantity,
} from "../../../features/cart/CartSlice";
import { FaMinus, FaPlus } from "react-icons/fa6";

const itemCard = ({ id, name, price, thumbnail, quantity }) => {
  const dispatch = useDispatch();
  const [toatlPrice, setToatlPrice] = useState(price * quantity);

  const handleQuantityChange = (itemId, newQuantity, price) => {
    dispatch(updateCartItemQuantity({ itemId, newQuantity }));
    setToatlPrice(price * newQuantity);
    dispatch(saveItemsToLocalStorage());
  };

  const handleDelteItem = (id) => {
    dispatch(deleteCartItem(id));
    dispatch(saveItemsToLocalStorage());
  };

  return (
    <div className="py-6 px-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="productImage ">
          <img src={thumbnail} alt="product" className="h-12 object-contain" />
        </div>
        <div className="aboutproduct flex flex-col text-[14px] font-medium text-slate-500">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="details flex items-center space-x-10">
        <div className="flex items-center gap-2">
          <p
            onClick={() => {
              if (quantity > 1) {
                handleQuantityChange(id, quantity - 1, price);
              }
            }}
            className="text-[20px] font-bold text-red-600 cursor-pointer"
          >
            <FaMinus />
          </p>
          <span className="text-[20px]">{quantity}</span>
          <p
            onClick={() => {
              handleQuantityChange(id, quantity + 1, price);
            }}
            className="text-[18px] text-green-700 font-bold cursor-pointer"
          >
            <FaPlus />
          </p>
        </div>
        <div>
          <p>{toatlPrice}</p>
        </div>
        <div>
          <MdDelete
            onClick={() => {
              handleDelteItem(id);
            }}
            className="text-red-500 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default itemCard;
