import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [active, isActive] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-hidden">
        <div className="header h-[50px] w-screen bg-brand_primary_fade flex items-center font-[600] text-[24px]">
          Welcome User ,
        </div>
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full  bg-brand_primary_fade text-brand_secondary [&>li]:text-[18px] [&>li]:my-2 hover:[&>li]:bg-brand_primary hover:[&>li]:origin-left ">
          {/* Sidebar content here */}
          <li className={`${path === "/dashboard" ? "border-l-2" : null}`}>
            <Link to={"/dashboard"}>Home</Link>
          </li>
          <li
            className={`${
              path === "/dashboard/create-product" ? "border-l-2" : null
            }`}
          >
            <Link to={"create-product"}>Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
