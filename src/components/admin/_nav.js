import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilCalculator,
  cilChartPie,
  cilUser,
  cilSpreadsheet,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavItem,
    name: "Profile",
    to: "/admin/",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "Table",
    to: "/admin/",
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Influencers",
        to: "/admin/",
      },
      {
        component: CNavItem,
        name: "Companies",
        to: "/admin/",
      },
    ],
  },
  {
    component: CNavItem,
    name: "Charts",
    to: "/admin/charts",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Widgets",
    to: "/admin/widgets",
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Extras",
  },
  {
    component: CNavGroup,
    name: "Pages",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Login",
        to: "/admin/login",
      },
      {
        component: CNavItem,
        name: "Register",
        to: "/admin/register",
      },
      {
        component: CNavItem,
        name: "Error 404",
        to: "/admin/404",
      },
      {
        component: CNavItem,
        name: "Error 500",
        to: "/admin/500",
      },
    ],
  },
];

export default _nav;
