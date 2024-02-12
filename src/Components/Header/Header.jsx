import { Link, NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const headerNavLink = (
    <div className="flex w-40 justify-between header-items">
      <li>
        <NavLink
          to={"/chart"}
          className={"border-2 border-gray-300 font-semibold"}
        >
          Chart
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/form"}
          className={"border-2 border-gray-300 font-semibold"}
        >
          Form
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/semesterEndForm"}
          className={"border-2 border-gray-300 font-semibold"}
        >
          Semester End Form
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/afterGraduationForm"}
          className={"border-2 border-gray-300 font-semibold"}
        >
          After Graduation Form
        </NavLink>
      </li>
    </div>
  );
  const [theme, setTheme] = useState("cupcake");
  const handleToggleMode = () => {
    if (theme === "cupcake") {
      setTheme("dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
      localStorage.theme = "dark";
    } else {
      setTheme("cupcake");
      document.querySelector("html").setAttribute("data-theme", "cupcake");
      localStorage.theme = "cupcake";
    }
  };
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setTheme("dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  }, []);
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {headerNavLink}
            </ul>
          </div>
          <Link
            className="btn btn-ghost normal-case text-xl font-bold "
            to={"/"}
          >
            <span className="text-red-500 -mr-2">SEC</span>Statistics
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{headerNavLink}</ul>
        </div>
        <div className="navbar-end">
          <div
            className="cursor-pointer btn btn-ghost"
            onClick={handleToggleMode}
          >
            {theme === "dark" ? (
              <FaSun className="w-6 h-6 " />
            ) : (
              <FaRegSun className="w-6 h-6 " />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
