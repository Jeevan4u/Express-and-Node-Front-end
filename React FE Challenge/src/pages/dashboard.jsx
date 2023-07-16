import React from "react";
import Sidebar from "../layout/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
    </>
  );
};

export default Dashboard;
