import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Dashboard, Products, SingleProduct, Cart } from "./pages";
import { useDispatch } from "react-redux";
import {
  fetchAllProductFailure,
  fetchAllProductStart,
  fetchAllProductSuccess,
} from "./features/Products/AllProducts/ProductsSlice";

function App() {
  const dispatch = useDispatch();

  const allProductsFetched = async () => {
    dispatch(fetchAllProductStart());

    const API_URL = "https://api.pujakaitem.com/api/products";
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      dispatch(fetchAllProductSuccess(data));
    } catch (error) {
      dispatch(fetchAllProductFailure(error.message));
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    allProductsFetched();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: `/products/:category`,
      element: <SingleProduct />,
    },
    {
      path: `/cart`,
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
