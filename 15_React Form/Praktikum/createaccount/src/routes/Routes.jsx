import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "../pages/Register";
import FormLogin from "../components/form/FormLogin";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <FormLogin />,
    },
  ]);
  return <RouterProvider router={router} />;
}
