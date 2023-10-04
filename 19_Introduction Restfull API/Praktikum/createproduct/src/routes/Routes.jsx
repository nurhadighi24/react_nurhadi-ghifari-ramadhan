import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import CreateProduct from "../CreateProduct";
import DetailPageProduct from "../components/DetailPageProduct/DetailPageProduct";

import { setAxiosConfig } from "../utils/api/axiosWithConfig";
import { useEffect } from "react";

export default function Router() {
  useEffect(() => {
    setAxiosConfig("", "https://651a7c65340309952f0d5f71.mockapi.io/products");
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/products",
      element: <CreateProduct />,
    },
    {
      path: "/products/:id",
      element: <DetailPageProduct />,
    },
  ]);

  return <RouterProvider router={router} />;
}
