import React from "react";
import LoginForm from "./pages/login/login.pages";

const Login = React.lazy(
  () => import("./components/admin/views/pages/login/Login")
);
const Register = React.lazy(
  () => import("./components/admin/views/pages/register/Register")
);
const Page404 = React.lazy(
  () => import("./components/admin/views/pages/page404/Page404")
);
const Page500 = React.lazy(
  () => import("./components/admin/views/pages/page500/Page500")
);
const RegistrationForm = React.lazy(
  () => import("./pages/register/sign-up.pages")
);

const MarketerHome = React.lazy(() => import("./pages/marketer/home_marketer"));
const AppRoutes = [
  { path: "/", name: "Home", element: MarketerHome },
  { path: "/sign-in", name: "Login", element: Login },
  { path: "/sign-up", name: "SignUp", element: Register },
  { path: "/not-found", name: "error404", element: Page404 },
  { path: "/server-error", name: "error500", element: Page500 },
  { path: "/register", name: "Register", element: RegistrationForm },
  { path: "/login", name: "Log-in", element: LoginForm },
];

export default AppRoutes;
