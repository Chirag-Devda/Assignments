import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="bg-[#2874f0] w-full">
      <div className="max-w-[1280px] h-[72px] mx-auto flex justify-between items-center px-3">
        <h1 className="text-white font-bold text-[25px]">LootLo</h1>
        <div className="flex items-center justify-between w-[19vw] sm:w-[50vw] lg:w-[30vw] xl:w-1/4">
          <button className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white text-[#2874f0] font-medium">
            Login
            <MdKeyboardArrowDown
              className="font-bold sm:block hidden"
              size={20}
            />
          </button>
          <p className="sm:block hidden text-white text-[16px] leading-[1px] font-medium">
            Become a Seller
          </p>
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
          <div>
            <PiDotsThreeOutlineVerticalFill
              className="cursor-pointer"
              color="white"
              size={25}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;