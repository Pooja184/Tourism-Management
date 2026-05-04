import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const HomeAdmin = () => {
  return (
    <div className="flex min-h-screen bg-[linear-gradient(180deg,#f7f3ea_0%,#eef7f2_100%)] text-slate-900">
      <Sidebar />
      <div className="min-w-0 flex-1 p-4 pt-20 md:p-8 md:pt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeAdmin;
