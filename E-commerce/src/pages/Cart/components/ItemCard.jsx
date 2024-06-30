import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import {
  deleteCartItem,
  saveItemsToLocalStorage,
  updateCartItemQuantity,
} from "../../../features/cart/CartSlice";

const itemCard = ({ id, name, price, thumbnail, quantity }) => {
  const dispatch = useDispatch();
  const [toatlPrice, setToatlPrice] = useState(price * quantity);

  const notify = () => toast.warn("Item deleted");

  const handleQuantityChange = (itemId, newQuantity, price) => {
    dispatch(updateCartItemQuantity({ itemId, newQuantity }));
    setToatlPrice(price * newQuantity);
    dispatch(saveItemsToLocalStorage());
  };

  const handleDelteItem = (id) => {
    dispatch(deleteCartItem(id));
    notify();
    dispatch(saveItemsToLocalStorage());
  };

  return (
    <div className="flex items-center justify-between px-3 py-6">
      <div className="flex items-center gap-3">
        <div className="productImage">
          <img src={thumbnail} alt="product" className="h-12 object-contain" />
        </div>
        <div className="aboutproduct text-slate-500 flex flex-col text-[14px] font-medium">
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
            className="cursor-pointer text-[20px] font-bold text-red-600"
          >
            <FaMinus />
          </p>
          <span className="text-[20px]">{quantity}</span>
          <p
            onClick={() => {
              handleQuantityChange(id, quantity + 1, price);
            }}
            className="cursor-pointer text-[18px] font-bold text-green-700"
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
            className="cursor-pointer text-red-500"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default itemCard;
