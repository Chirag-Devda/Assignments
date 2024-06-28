import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Dashboard, Products, SingleProduct, Cart } from "./pages";
import { useDispatch } from "react-redux";
import { setProducts } from "./features/Products/AllProducts/ProductsSlice";

function App() {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  const dispatch = useDispatch();

  const allProductsFetched = async () => {
    const API_URL = "https://api.pujakaitem.com/api/products";
    try {
      setloading(true); // set loader before fetching

      const response = await fetch(API_URL);
      const data = await response.json();

      dispatch(setProducts(data));
    } catch (error) {
      console.error("Error fetching products:", error);
      seterror(error);
    } finally {
      setloading(false); // after fetching remove loader
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
      element: <Products loading={loading} />,
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
