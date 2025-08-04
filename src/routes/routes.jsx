import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddExpense from "../pages/AddExpense";
import AddIncome from "../pages/AddIncome";
import NotFound from "../pages/NotFound";
import Layout from "../Layout/Layout";

function routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path : "/",
            element: <Home />
        },
        {
          path: "/add-expense",
          element: <AddExpense />,
        },
        {
          path: "/add-income",
          element: <AddIncome />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return router;
}

export default routes;
