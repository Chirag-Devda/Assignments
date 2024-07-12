import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  ListFeatures,
  ListImages,
  ListLocation,
  ListPrice,
  ListProperty,
  PostConfirmation,
  Preview,
  Verification,
} from "./pages";
import ListPropertyLayout from "./components/layout/ListPropertyLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/verification",
      element: <Verification />,
    },
    {
      path: "/listproperty",
      element: <ListProperty />,
    },
    {
      path: "/listlocation",
      element: <ListLocation />,
    },
    {
      path: "/listfeatures",
      element: <ListFeatures />,
    },
    {
      path: "/listprice",
      element: <ListPrice />,
    },
    {
      path: "/listimages",
      element: <ListImages />,
    },
    {
      path: "/post-confirmation",
      element: <PostConfirmation />,
    },
    {
      path: "/preview",
      element: <Preview />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
