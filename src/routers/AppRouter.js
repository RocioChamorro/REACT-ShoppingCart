import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
