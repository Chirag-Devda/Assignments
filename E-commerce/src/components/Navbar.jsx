import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../features/Products/AllProducts/ProductsSlice";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import Sidenav from "./Sidenav";

const Navbar = ({ Login, cart, home, products }) => {
  const items = useSelector((state) => state.cart.items);

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const allProductsFetched = async () => {
    try {
      await dispatch(fetchAllProducts());
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

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
        <div className="flex items-center justify-between w-fit space-x-10">
          {home && (
            <Link onClick={allProductsFetched} to="/dashboard">
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
            <Link onClick={allProductsFetched} to="/products">
              <h1 className="sm:block hidden text-white text-[23px] leading-[1px] font-medium hover:cursor-pointer ">
                Products
              </h1>
            </Link>
          )}
          {Login && (
            <Menu>
              <MenuHandler>
                <Button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-white text-[#2874f0] font-medium">
                  Login
                  <MdKeyboardArrowDown
                    className="font-bold sm:block hidden"
                    size={20}
                  />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Sign up</MenuItem>
                <MenuItem>Login in</MenuItem>
              </MenuList>
            </Menu>
          )}
          {cart && (
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart
                  className="cursor-pointer"
                  color="white"
                  size={25}
                />
                {items.length > 0 && (
                  <div className="absolute  -top-4 -right-2 bg-red-500 text-white text-[12px] w-5 text-center rounded-full">
                    {items.length}
                  </div>
                )}
              </div>
            </Link>
          )}
        </div>
      </div>
      <Sidenav open={open} closeDrawer={closeDrawer} />
    </nav>
  );
};

export default Navbar;
