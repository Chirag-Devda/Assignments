import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Sidenav from "./Sidenav";

import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ Login, seller, cart, home, products }) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <nav
      className="bg-[#2874f0] sticky top-0 z-10 w-screen
    "
    >
      <div className="max-w-[1280px] h-[72px] mx-auto flex justify-between items-center px-3">
        <div className="flex items-center gap-6">
          <FaBars
            onClick={openDrawer}
            size={25}
            className="pt-1 cursor-pointer sm:hidden block"
            color="white"
          />
          <h1
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold text-white text-[25px] cursor-pointer"
          >
            LootLo
          </h1>
        </div>
        <div className="flex items-center justify-between w-[20vw] sm:w-[55vw] lg:w-[40vw] xl:w-[30vw]">
          {home && (
            <Link to="/dashboard">
              <h1
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="sm:block hidden text-white text-[23px] leading-[1px] font-medium hover:cursor-pointer "
              >
                Home
              </h1>
            </Link>
          )}
          {products && (
            <Link to="/products">
              <h1 className="sm:block hidden text-white text-[23px] leading-[1px] font-medium hover:cursor-pointer ">
                Products
              </h1>
            </Link>
          )}
          {Login && (
            <button className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white text-[#2874f0] font-medium">
              Login
              <MdKeyboardArrowDown
                className="font-bold sm:block hidden"
                size={20}
              />
            </button>
          )}
          {seller && (
            <p className="sm:block hidden text-white text-[16px] leading-[1px] font-medium">
              Become a Seller
            </p>
          )}
          {cart && (
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart
                  className="cursor-pointer"
                  color="white"
                  size={25}
                />
                <div className="absolute -top-4 -right-2 bg-red-500 text-white text-[12px] w-5 text-center rounded-full">
                  1
                </div>
              </div>
            </Link>
          )}
          <div>
            <PiDotsThreeOutlineVerticalFill
              className="cursor-pointer"
              color="white"
              size={25}
            />
          </div>
        </div>
      </div>
      <Sidenav open={open} closeDrawer={closeDrawer} />
    </nav>
  );
};

export default Navbar;
