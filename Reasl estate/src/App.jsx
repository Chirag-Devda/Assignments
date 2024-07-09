import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, ListProperty } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/listproperty",
      element: <ListProperty />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
