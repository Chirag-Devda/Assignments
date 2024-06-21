import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../features/Query/QuerySlice";
import { reset } from "../features/Pagination/PaginationSlice";

const Navbar = ({ fetchNews }) => {
  const [search, setsearch] = useState("");

  const currentPage = useSelector((state) => state.page.currentPage);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <nav className="bg-[#0000b6]">
      <div className="h-16 flex justify-center sm:justify-between px-5 items-center max-w-[1280px] mx-auto">
        <div className="logo sm:block hidden">
          <img width="200px" src="/logo.png" alt="Logo" />
        </div>
        <form className="search flex items-center gap-5 w-fit">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search for latest"
            className="bg-white text-black px-3  py-1 rounded-md w-[60vw] sm:w-full"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(reset(1));
              dispatch(updateQuery(search));
            }}
            className="bg-[#c70200] text-white font-medium px-5 py-1 rounded-lg"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
