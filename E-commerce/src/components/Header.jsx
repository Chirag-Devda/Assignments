import React from "react";

const Header = () => {
  return (
    <div className="bg-white   shadow-lg">
      <div className="max-w-[1280px] mx-auto text-black flex justify-between items-center py-4 ">
        <ul className="flex justify-evenly w-full">
          <li className="text-blue-500 font-bold hover:cursor-pointer">
            Mobile
          </li>
          <li className="text-blue-500 font-bold hover:cursor-pointer">
            Laptop
          </li>
          <li className="text-blue-500 font-bold hover:cursor-pointer">
            Computers
          </li>
          <li className="text-blue-500 font-bold hover:cursor-pointer">
            Accessories
          </li>
          <li className="text-blue-500 font-bold hover:cursor-pointer">
            Watch
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
