/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const root = window.document.documentElement;
  // Apply theme change
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.setAttribute("data-themed", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  // Theme toggle handler
  // Function kamu didalam function lagi, ya pasti nggak bisa
  const handleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      setTheme("light");
      root.classList.remove("light");
      root.classList.add("dark");
    }
  };
  return (
    <nav className={`shadow-md ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link
                to="#"
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Review Website
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/Home"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400"
                    : "text-black hover:text-gray-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/About"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400"
                    : "text-black hover:text-gray-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/restaurant"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400"
                    : "text-black hover:text-gray-600"
                }`}
              >
                Restaurant
              </Link>
              <Link
                to="/Product"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400"
                    : "text-black hover:text-gray-600"
                }`}
              >
                Product
              </Link>
              <Link
                to="/Country"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400"
                    : "text-black hover:text-gray-600"
                }`}
              >
                Country
              </Link>
              <Link
                to="/Detailed"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  theme === "dark"
                    ? "text-white hover:text-gray-400"
                    : "text-black hover:text-gray-600"
                }`}
              >
                Detail
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className={`font-medium flex items-center ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 19.071a7 7 0 1113.758 0M12 11a5 5 0 110-10 5 5 0 010 10z"
                />
              </svg>
              Hello, Myomi
            </span>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                onChange={handleTheme}
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <div className="-mr-2 flex items-center sm:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
