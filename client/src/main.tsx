import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "@/components/ui/sonner.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import "./globals.css";
import Error from "./Pages/Error/Error.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import Login from "./Pages/Login/Login.tsx";
import Signup from "./Pages/Signup/Signup.tsx";
import useUserStore from "./UserStore.tsx";

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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  const checkLoginStatus = useUserStore((state) => state.checkLoginStatus);

  React.useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  return (
    <React.StrictMode>
      <TooltipProvider delayDuration={0}>
        <RouterProvider router={router} />
      </TooltipProvider>
      <Toaster richColors position="top-center" />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
