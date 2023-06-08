import React, { lazy, LazyExoticComponent } from "react";

const HomeInfluencer: LazyExoticComponent<any> = lazy(
  () => import("../../../pages/influencer/home_influencer.component")
);

const InfluencerAppRoutes: {
  path: string;
  name: string;
  element: LazyExoticComponent<any>;
}[] = [{ path: "/", name: "Home", element: HomeInfluencer }];

export default InfluencerAppRoutes;
