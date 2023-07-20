import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { logout } from "../../features/slice/appSlice";

const Sidebar = () => {
  const [active, isActive] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-hidden">
        <div className="header h-[50px] w-full bg-brand_primary_fade flex items-center font-[600] text-[24px] justify-between px-4">
          <h5>Welcome To Dashboard</h5>
          <div className="userImage">
            <div className="">
              <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar mt-[9px]"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={`${
                          import.meta.env.VITE_BASE_URL
                        }/files/userIcon.jpg`}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-neutral_background"
                  >
                    <li>
                      <p className="justify-between">
                        Profile
                        {/* <span className="badge">New</span> */}
                      </p>
                    </li>
                    <li>
                      <p>Settings</p>
                    </li>
                    <li
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      <p>Logout</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
