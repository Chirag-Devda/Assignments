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
    <nav className="sticky top-0 z-10 w-screen bg-[#2874f0]">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-3">
        <div className="flex items-center gap-6">
          <FaBars
            onClick={openDrawer}
            size={25}
            className="block cursor-pointer pt-1 sm:hidden"
            color="white"
          />
          <h1
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer text-[25px] font-bold text-white"
          >
            LootLo
          </h1>
        </div>
        <div className="flex w-fit items-center justify-between space-x-10">
          {home && (
            <Link onClick={allProductsFetched} to="/dashboard">
              <h1
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="hidden text-[23px] font-medium leading-[1px] text-white hover:cursor-pointer sm:block"
              >
                Home
              </h1>
            </Link>
          )}
          {products && (
            <Link onClick={allProductsFetched} to="/products">
              <h1 className="hidden text-[23px] font-medium leading-[1px] text-white hover:cursor-pointer sm:block">
                Products
              </h1>
            </Link>
          )}
          {Login && (
            <Menu>
              <MenuHandler>
                <Button className="hidden items-center gap-2 rounded-md bg-white px-3 py-2 font-medium text-[#2874f0] sm:flex">
                  Login
                  <MdKeyboardArrowDown
                    className="hidden font-bold sm:block"
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
                  <div className="absolute -right-2 -top-4 w-5 rounded-full bg-red-500 text-center text-[12px] text-white">
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
