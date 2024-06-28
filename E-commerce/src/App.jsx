import Drawer from "./components/Sidenav";
import { Home, Dashboard, Products, SingleProduct, Cart } from "./pages";

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
    {
      path: `/cart`,
      element: <Cart />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
