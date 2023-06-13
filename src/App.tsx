import { Suspense } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "./components/admin/layout/DefaultAdminLayout.layout";
import MarketerLayout from "./components/marketer/layout/default_layout.component";
import Influencerlayout from "./components/influencer/layout/Influencer_layout.component";

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
          </Routes>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/*" element={<MarketerLayout />} />
          </Routes>
          <Routes>
            <Route path="/influencer/*" element={<Influencerlayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
};

export default App;
