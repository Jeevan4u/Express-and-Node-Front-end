import React from "react";
import { SignInIcon } from "../../utils/icons";
import logo from "../../assets/images/Logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <nav className="flex justify-between p-4 font-[500] text-[18px] tracking-wider">
        <Link to={"/"}>
          <div className="logoContainer image-full">
            <img src={logo} alt="" className="object-contain pl-4 pt-4" />
          </div>
        </Link>

        <ul className="navLists">
          <Link to={`${path === "/login" ? "/" : "/login"}`}>
            {path === "/login" ? (
              <button className="btn  bg-brand_primary_fade navItems px-10 hover:bg-brand_primary hover:text-white transition-colors duration-150 ease-in-out">
                Back
                <SignInIcon />
              </button>
            ) : path === "/" ? (
              <button className="btn  bg-brand_primary_fade navItems px-10 hover:bg-brand_primary hover:text-white transition-colors duration-150 ease-in-out">
                Login
                <SignInIcon />
              </button>
            ) : null}
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
