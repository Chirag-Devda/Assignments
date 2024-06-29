import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ItemCard from "./components/ItemCard.jsx";
import { saveItemsToLocalStorage } from "../../features/cart/CartSlice.js";

import { Navbar } from "../../components";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <Navbar Login={true} cart={true} home={true} products={true} />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
          <div>
            <div className="flex items-center gap-3 border-b-2 ">
              <Link to="/products">
                <span className="text-[30px] font-bold cursor-pointer">
                  &larr;
                </span>
              </Link>
              <p className="pt-1">Continue Shopping</p>
            </div>
            <div className="h-[80vh] shadow-lg overflow-scroll">
              {items.map((item, index) => (
                <ItemCard {...item} key={index} />
              ))}
            </div>
          </div>
          {/* Bill */}
          <div className="shadow-lg flex flex-col h-fit py-2 rounded-lg">
            <h1 className="text-[#434343] font-bold text-[20px]">
              ORDER SUMMARY
            </h1>
            <div className="border-2 opacity-[0.4] my-3 border-[#a09e9e]" />
            <div className="flex flex-col text-[#434343] font-medium">
              <div className="flex justify-between">
                <p>Sub Total</p>
                <p>{cartTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Charges</p>
                <p>TBD</p>
              </div>
              <div className="flex justify-between">
                <p>Sales Tax</p>
                <p>TBD</p>
              </div>
            </div>
            <div className="border-2 opacity-[0.4] my-3 border-[#a09e9e]" />
            <div className="flex justify-between text-[#434343] font-medium text-[18px]">
              <p>Estimated Total</p>
              <p>{cartTotal}</p>
            </div>
            <div className="border-2 opacity-[0.4] my-3 border-[#a09e9e]" />
            <button className="bg-blue-600 w-fit mx-auto py-3 px-4 rounded-lg text-white font-bold hover:scale-110 duration-500">
              PROCEED TO CHECKOUT
            </button>
            <div className="border-2 opacity-[0.4] my-3 border-[#a09e9e]" />

            <p className="text-center text-[#434343]">
              * Delivery Charges And The Sales Tax Be Calculated In The Checkout
              Page*
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
