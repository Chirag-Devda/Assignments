import { useState } from "react";

const Navbar = ({ search, handleSearch }) => {
  return (
    <nav className="bg-[#ef476f]">
      <div className="h-16 flex justify-between px-5 items-center max-w-[1280px] mx-auto">
        <div className="logo">
          <p>News Vala</p>
        </div>
        <div className="search flex items-center gap-5 w-fit">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search for latest"
            className="bg-white text-black px-3  py-1 rounded-md"
          />
          <button type="submit" className="bg-yellow-300 px-5 py-1 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
