import { Suspense } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "./components/admin/layout/DefaultAdminLayout.layout";
import MarketerLayout from "./components/marketer/layout/default_layout.component";
import Influencerlayout from "./components/influencer/layout/Influencer_layout.component";
import RegistrationForm from "./pages/register/sign-up.pages";
import LoginForm from "./pages/login/login.pages";

/**
 * App
 * @returns
 */
const App = () => {
  const loading = <div>Loading...</div>;

  return (
    <>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<MarketerLayout />} />
            <Route path="/influencer/*" element={<Influencerlayout />} />
            <Route path="/sign-up" element={<RegistrationForm />} />
            <Route path="login" element={<LoginForm />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
};

export default App;
