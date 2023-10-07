import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import CreateProduct from "../CreateProduct";
import DetailPageProduct from "../components/DetailPageProduct/DetailPageProduct";

import { setAxiosConfig } from "../utils/api/axiosWithConfig";
import { useEffect } from "react";
import { useToken } from "../utils/states/token-context";
import Login from "../components/Login/Login";

export default function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", "https://651a7c65340309952f0d5f71.mockapi.io/products");
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/products",
      element: token === "" ? <Navigate to="/login" /> : <CreateProduct />,
    },
    {
      path: "/products/:id",
      element: token === "" ? <Navigate to="/login" /> : <DetailPageProduct />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
