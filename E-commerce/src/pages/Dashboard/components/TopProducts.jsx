import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

import {
  fetchSingleProductStart,
  fetchSingleProductFailure,
  fetchSingleProductSuccess,
} from "../../../features/Products/SingleProduct/singleProductSlice";

const TopProducts = () => {
  const data = useSelector((state) => state.products.products);
  const Loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  const singleProductFetchedAndSaved = async (id, image) => {
    dispatch(fetchSingleProductStart());

    const API_URL = `https://api.pujakaitem.com/api/products/${id}`;
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      dispatch(fetchSingleProductSuccess({ data: data, image: image }));
      localStorage.setItem("singleProduct", JSON.stringify(data)); // saved to localStorage
      localStorage.setItem("singleProductImage", image);
    } catch (error) {
      dispatch(fetchSingleProductFailure(error.message));
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="relative mx-auto mt-14 max-w-[1280px]">
      <h1 className="px-2 text-[45px] font-bold sm:text-[60px]">
        Top Products
      </h1>
      <div className="flex w-full">
        <p className="text-slate-500 mt-3 max-w-3xl px-2 text-[13px] leading-[20px] sm:text-[17px] sm:leading-[30px]">
          Explore our Top Products! Featuring the hottest items our customers
          love, this section showcases must-haves from cutting-edge electronics
          to chic fashion. Shop now and stay ahead of the trends!
        </p>
      </div>
      <div className="mx-auto mt-5 h-[auto] rounded-lg border bg-[#fff] pb-10 shadow-lg lg:h-[60vh]">
        <div className="h-[50vh] rounded-lg bg-blue-gray-100 sm:h-[30vh]"></div>
        <div className="-mt-80 flex flex-wrap justify-center gap-5 px-5 sm:-mt-24 sm:justify-between">
          {Loading && (
            <div className="mt-20 flex w-full justify-center">
              <Spinner className="h-12 w-12" />
            </div>
          )}
          {data.slice(4, 7).map(({ id, image, name }) => (
            <Link to={`/products/${name}`} key={id}>
              <div
                onClick={() => {
                  singleProductFetchedAndSaved(id, image);
                }}
                className="Card h-[170px] w-full sm:h-[200px] sm:w-[250px]"
              >
                <img
                  className="shadow-slate-600 h-full w-full cursor-pointer rounded-xl shadow-lg sm:duration-500 sm:hover:scale-110"
                  src={image}
                  alt="Image"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
