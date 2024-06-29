import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllProducts,
  fiterCategory,
} from "../features/Products/AllProducts/ProductsSlice";

const Header = () => {
  const dispatch = useDispatch();

  const categories = ["Mobile", "Laptop", "Computer", "Accessories", "Watch"];

  const handleFilter = async (category) => {
    await dispatch(fetchAllProducts());
    dispatch(fiterCategory({ category: category }));
  };

  return (
    <div className="bg-white shadow-lg">
      <div className="max-w-[1280px] mx-auto text-black flex justify-between items-center py-4 ">
        <ul className="flex justify-evenly w-full">
          {categories.map((category, i) => (
            <Link
              onClick={(e) => {
                handleFilter(e.target.innerHTML.toLowerCase());
              }}
              to={`/products`}
              key={i}
            >
              <li className="text-blue-500 font-bold hover:cursor-pointer">
                {category}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
