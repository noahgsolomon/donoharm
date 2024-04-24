import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "@/components/ui/sonner.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import "./globals.css";
import Error from "./Pages/Error/Error.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

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
    <TooltipProvider delayDuration={500}>
      <RouterProvider router={router} />
    </TooltipProvider>
    <Toaster richColors position="top-center" />
  </React.StrictMode>
);
