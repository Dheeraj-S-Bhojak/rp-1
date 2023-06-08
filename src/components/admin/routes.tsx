import React, { ReactComponentElement, lazy, LazyExoticComponent } from "react";

const Page404: LazyExoticComponent<any> = React.lazy(
  () => import("./views/pages/page404/Page404")
);
const Page500: LazyExoticComponent<any> = React.lazy(
  () => import("./views/pages/page500/Page500")
);
const Dashboard: LazyExoticComponent<any> = React.lazy(
  () => import("./views/dashboard/Dashboard")
);
const Charts: LazyExoticComponent<any> = React.lazy(
  () => import("./views/charts/Charts")
);
const Widgets: LazyExoticComponent<any> = React.lazy(
  () => import("./views/widgets/Widgets")
);

// define Admin Routes as array
const routes: {
  path: string;
  name: string;
  element: LazyExoticComponent<any>;
}[] = [
  // { path: "/", name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/charts", name: "Charts", element: Charts },
  { path: "/widgets", name: "Widgets", element: Widgets },
  { path: "/not-found", name: "error404", element: Page404 },
  { path: "/server-error", name: "error500", element: Page500 },
];

export default routes;
