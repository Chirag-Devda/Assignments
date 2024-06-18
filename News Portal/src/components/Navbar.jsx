import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-[#ef476f]">
      <div className="h-16 flex justify-between px-5 items-center max-w-[1280px] mx-auto">
        <div className="logo">
          <p>News Vala</p>
        </div>
        <div className="search flex items-center relative w-fit">
          <input
            type="type"
            placeholder="Search for latest"
            className="bg-white text-black pl-7  py-1 rounded-md"
          />
          <FaSearch className="absolute cursor-pointer w-7" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
