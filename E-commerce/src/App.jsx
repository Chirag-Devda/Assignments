import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, Dashboard, Products, SingleProduct, Cart } from "./pages";

import { loadItemsFromLocalStorage } from "./features/cart/CartSlice";
import { fetchAllProducts } from "./features/Products/AllProducts/ProductsSlice";

function App() {
  const dispatch = useDispatch();

  const allProductsFetched = async () => {
    try {
      await dispatch(fetchAllProducts());
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    allProductsFetched();
    dispatch(loadItemsFromLocalStorage());
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
