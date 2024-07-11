import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, ListProperty, Verification } from "./pages";
import ListPropertyLayout from "./components/layout/ListPropertyLayout";

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
    {
      path: "/verification",
      element: <Verification />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
