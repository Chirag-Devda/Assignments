import { Home, Dashboard, Products, SingleProduct } from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
