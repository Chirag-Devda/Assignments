import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../features/Query/QuerySlice";

const Navbar = ({ fetchNews }) => {
  const [search, setsearch] = useState("");

  const currentPage = useSelector((state) => state.page.currentPage);
  const currentQuery = useSelector((state) => state.query.currentQuery);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  useEffect(() => {
    console.log(`CurrentPage is ${currentPage} and Query is ${currentQuery}`);
  }, [currentQuery]);

  return (
    <nav className="bg-[#ef476f]">
      <div className="h-16 flex justify-between px-5 items-center max-w-[1280px] mx-auto">
        <div className="logo">
          <p>News Vala</p>
        </div>
        <form className="search flex items-center gap-5 w-fit">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search for latest"
            className="bg-white text-black px-3  py-1 rounded-md"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(updateQuery(search));
              fetchNews(currentPage, search);
            }}
            className="bg-yellow-300 px-5 py-1 rounded-lg"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
