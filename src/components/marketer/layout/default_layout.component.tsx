import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

import Footer from "../footer.component";
import AppRoutes from "../../../app.routes";
import NavBar from "../navBar.component";

/**
 * MarketerLayout
 * @returns
 */
const MarketerLayout: React.FC = () => {
  const navigationMenus = [
    {
      id: 1,
      title: "Home",
      to: "/",
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
    {
      id: 5,
      title: "Contact",
      to: "/home/contact",
      active: false,
    },
  ];
  return (
    <>
      <CContainer fluid>
        <Suspense fallback={<CSpinner color="primary" />}>
          {" "}
          <NavBar navigationMenus={navigationMenus} />
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
