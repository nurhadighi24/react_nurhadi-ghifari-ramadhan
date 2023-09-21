import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import CreateProduct from "../CreateProduct";
import DetailPageProduct from "../components/DetailPageProduct/DetailPageProduct";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/create-product",
      element: <CreateProduct />,
    },
    {
      path: "/create-product/:id",
      element: <DetailPageProduct />,
    },
  ]);

  return <RouterProvider router={router} />;
}
