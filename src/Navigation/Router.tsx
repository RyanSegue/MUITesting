import React from "react";
import { Route, Routes } from "react-router";
import PATHS from "./Paths";
import PageNotFound from "../Pages/PageNotFound";
import Dashboard from "../Pages/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={PATHS.Dashboard}
        element={<Dashboard />}
      />
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  );
};

export default AppRouter;
