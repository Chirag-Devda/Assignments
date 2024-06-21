import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../features/Query/QuerySlice";
import { reset } from "../features/Pagination/PaginationSlice";

const Navbar = () => {
  const [search, setsearch] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <nav className="bg-[#0000b6]">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-center px-5 sm:justify-between">
        <div className="logo hidden sm:block">
          <img width="200px" src="/logo.png" alt="Logo" />
        </div>
        <form className="search flex w-fit items-center gap-5">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search for latest"
            className="w-[60vw] rounded-md bg-white px-3 py-1 text-black sm:w-full"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(reset(1));
              dispatch(updateQuery(search));
            }}
            className="rounded-lg bg-[#c70200] px-5 py-1 font-medium text-white"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
