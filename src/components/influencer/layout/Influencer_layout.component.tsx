import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { CContainer, CSpinner } from "@coreui/react";

import Footer from "../../marketer/footer.component";
import Navbar from "../../marketer/navBar.component";

import InfluencerAppRoutes from "../routes/influencer.route";

const Influencerlayout: React.FC = () => {
  return (
    <>
      <CContainer fluid>
        <Suspense fallback={<CSpinner color="primary" />}>
          <Navbar />
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
