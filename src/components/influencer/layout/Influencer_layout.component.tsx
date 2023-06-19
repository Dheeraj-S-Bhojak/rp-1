import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { CContainer, CSpinner } from "@coreui/react";

import Footer from "../../marketer/footer.component";
import NavBar from "../../marketer/navBar.component";

import InfluencerAppRoutes from "../routes/influencer.route";

const InfluencerNavBarOption = [
  {
    id: 1,
    title: "DashBoard",
    to: "dashboard",
    active: true,
  },
  {
    id: 2,
    title: "About",
    to: "about",
    active: false,
  },
  {
    id: 3,
    title: "Services",
    to: "services",
    active: false,
  },
  {
    id: 4,
    title: "Pricing",
    to: "pricing",
    active: false,
  },
];

const Influencerlayout: React.FC = () => {
  return (
    <>
      <CContainer fluid>
        <Suspense fallback={<CSpinner color="primary" />}>
          <NavBar navigationMenus={InfluencerNavBarOption} />
          <Routes>
            {InfluencerAppRoutes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.element />}
                  />
                )
              );
            })}
          </Routes>
          <Footer />
        </Suspense>
      </CContainer>
    </>
  );
};
export default Influencerlayout;
