import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<DashboardRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
