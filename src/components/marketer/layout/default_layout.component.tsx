import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

import Footer from "../footer.component";
import AppRoutes from "../../../app.routes";
import NavBar from "../navBar.component";
const MarketerLayout = () => {
  return (
    <>
      <CContainer fluid>
        <Suspense fallback={<CSpinner color="primary" />}>
          {" "}
          <NavBar />
          <Routes>
            {AppRoutes.map((route, idx) => {
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

export default MarketerLayout;
