import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));

const routes = [
  { path: "/", name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/charts", name: "Charts", element: Charts },
  { path: "/widgets", name: "Widgets", element: Widgets },
];

export default routes;
