import { useDispatch } from "react-redux";
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
      <div className="mx-auto flex max-w-[1280px] items-center justify-between py-4 text-black">
        <ul className="flex w-full justify-evenly">
          {categories.map((category, i) => (
            <Link
              onClick={(e) => {
                handleFilter(e.target.innerHTML.toLowerCase());
              }}
              to={`/products`}
              key={i}
            >
              <li className="font-bold text-blue-500 hover:cursor-pointer">
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
