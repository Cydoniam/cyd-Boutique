import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="section-inner">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
