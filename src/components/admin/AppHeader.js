import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilEnvelopeOpen, cilList, cilMenu } from "@coreui/icons";
import _ from "lodash";

import { AppHeaderDropdown } from "./header/index.header";
import { logo } from "../../assets/brand/logo";

const AppHeader = () => {
  const AdminNav = [
    { id: 1, title: "dashboard", path: "#/admin/dashboard" },
    { id: 2, title: "user", path: "#/admin/dashboard" },
    { id: 3, title: "settings", path: "#/admin/dashboard" },
    { id: 4, title: "notification", path: "#/admin/dashboard" },
  ];
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          {AdminNav.map((navOption) => (
            <CNavItem key={navOption.id}>
              <CNavLink to={navOption.path} component={NavLink}>
                {_.startCase(navOption.title)}
              </CNavLink>
            </CNavItem>
          ))}
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink to="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
