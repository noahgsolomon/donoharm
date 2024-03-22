import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "@/components/ui/sonner.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import "./globals.css";
import Error from "./Pages/Error/Error.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors position="top-center" />
  </React.StrictMode>
);
