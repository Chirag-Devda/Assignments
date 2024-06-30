import { FaTruckFast } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer, Navbar } from "../../components";
import Services from "./components/Services";

import { fetchSingleProductSuccess } from "../../features/Products/SingleProduct/singleProductSlice";
import {
  addItemToCart,
  saveItemsToLocalStorage,
} from "../../features/cart/CartSlice";

const SingleProduct = () => {
  const notify = () => toast.success("Added to cart");

  const { name, company, price, description, stock, reviews, stars } =
    useSelector((state) => state.singleProduct.product);

  const data = useSelector((state) => state.singleProduct.product);

  const ProductImage = useSelector((state) => state.singleProduct.image);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCart = (product, quantity, thumbnail) => {
    dispatch(
      addItemToCart({
        product: product,
        quantity: quantity,
        thumbnail: thumbnail,
      }),
    );
    notify();
    dispatch(saveItemsToLocalStorage());
  };

  const [fakeMrp, setFakeMrp] = useState(0);
  useEffect(() => {
    const data = localStorage.getItem("singleProduct");
    const image = localStorage.getItem("singleProductImage");

    if (data && image) {
      dispatch(
        fetchSingleProductSuccess({ data: JSON.parse(data), image: image }),
      );
    }
  }, []);

  useEffect(() => {
    if (price) {
      const markupPercentage = 0.1;
      const fakePrice = price * (1 + markupPercentage);
      setFakeMrp(fakePrice.toFixed(2));
    }
  }, [data]);

  return (
    <>
      <Navbar cart={true} home={true} products={true} Login={true} />
      <ToastContainer
        className="mt-16"
        position="top-right"
        autoClose={3000}
        limit={1}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <img
              className="h-full object-contain"
              src={ProductImage}
              alt="Product"
            />
          </div>
          <div className="flex flex-col gap-5 bg-white p-[0.7rem] sm:p-6">
            <h2 className="text-5xl font-medium">{name}</h2>
            <p>Ratings: {stars}</p>
            <p>Reviews: {reviews}</p>
            <p className="text-lg text-gray-500">
              MRP: <del className="">{fakeMrp}</del>
            </p>
            <p className="font-bold text-purple-700">Deal of the Day:{price}</p>
            <p className="text-slate-500 text-[12px] sm:text-[14px]">
              {description}
            </p>
            <div className="flex justify-between border-b-2 pb-1">
              <Services Icon={FaTruckFast} text="Free Delivery" />
              <Services Icon={FaClockRotateLeft} text="30 Days Replacement" />
              <Services Icon={FaTruckFast} text="LootLo Delivery" />
              <Services Icon={GiConfirmed} text="2 Years Warranty" />
            </div>
            <p>
              Available: <b>{stock}</b>
            </p>
            <p>
              Brand: <b>{company}</b>
            </p>
            <div className="flex justify-between px-5">
              <div className="">
                <button
                  onClick={handleDecrement}
                  className="rounded-lg bg-[#2874f0] px-2 py-2"
                >
                  <FaMinus />
                </button>
                <span className="bg-slate-200 rounded-lg px-4 py-1">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="rounded-lg bg-[#2874f0] px-2 py-2"
                >
                  <FaPlus />
                </button>
              </div>
              <button
                onClick={() => {
                  handleCart(data, quantity, ProductImage);
                }}
                className="flex items-center gap-1 rounded-lg bg-[#2874f0] px-5 py-2 text-[12px] font-bold text-white sm:gap-3 sm:text-base"
              >
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
