import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { Navbar } from "../../components";

import ItemCard from "./components/ItemCard.jsx";
import BillCard from "./components/BillCard.jsx";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <Navbar Login={true} cart={true} home={true} products={true} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
          <div>
            <div className="flex items-center gap-3 border-b-2 bg-[#2f7cf8]">
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
          <BillCard cartTotal={cartTotal} />
        </div>
      </div>
    </>
  );
};

export default Cart;
