import React from "react";
const HomeInfluencer = React.lazy(
  () => import("../../../pages/influencer/home_influencer.component")
);
const InfluencerAppRoutes = [
  { path: "/", name: "Home", element: HomeInfluencer },
];

export default InfluencerAppRoutes;
