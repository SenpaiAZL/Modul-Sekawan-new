/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleTheme } from "../store/action/ThemeAction";
import { setLang } from "../store/action/langAction";
import { setUser } from "../store/action/userAction";
const Navbar = () => {
  const root = window.document.documentElement;
  const [theme, setTheme] = useState("dark");
  const themeSelector = useSelector((state) => state.theme.theme);
  const user = useSelector((state) => state.user.user);
  const lang = useSelector((state) => state.lang.lang);
  const dispatchRedux = useDispatch();

  useEffect(() => {
    handleTheme();
  }, [themeSelector]);

  const links = [
    { label: "Home", to: "/home" },
    { label: "About", to: "/about" },
    { label: "Restaurant", to: "/restaurant" },
    { label: "Product", to: "/product" },
    { label: "Country", to: "/country" },
    { label: "Detail", to: "/detailed" },
  ];

  // Apply theme change
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.setAttribute("data-themed", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  // Theme toggle handler
  const handleTheme = () => {
    if (themeSelector == "light") {
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
    <nav
      className={`dark:border-b-[1px] border-b-0 shadow-md ${
        theme == "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
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
            <div className="hidden sm:ml-6 sm:flex sm:space-x-3 tracking-wider text-lg">
              {links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.to}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      theme === "dark"
                        ? "text-white hover:text-gray-400"
                        : "text-black hover:text-gray-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
            <div className="relative inline-block text-left">
              <details className="dropdown">
                <summary className="btn bg-gray-800 text-white border-gray-600 hover:bg-gray-600 dark:bg-gray-100 dark:text-black dark:border-gray-100 dark:hover:bg-gray-300 m-1 w-24">
                  {lang == "en" ? <span>English</span> : <span>Indonesia</span>}
                </summary>
                <ul className="menu dropdown-content text-white dark:bg-white bg-gray-800 dark:text-black rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <button
                      className="hover:bg-gray-800 text-white focus:text-white focus:bg-gray-700 dark:focus:bg-gray-200 dark:focus:text-black dark:hover:bg-gray-200 dark:text-black dark:hover:text-black"
                      onClick={() => dispatchRedux(setLang("id"))}
                    >
                      Indonesian
                    </button>
                  </li>
                  <li>
                    <button
                      className="hover:bg-gray-800 text-white focus:text-white focus:bg-gray-700 dark:focus:bg-gray-200 dark:focus:text-black dark:hover:bg-gray-200 dark:text-black dark:hover:text-black"
                      onClick={() => dispatchRedux(setLang("en"))}
                    >
                      English
                    </button>
                  </li>
                </ul>
              </details>
            </div>
            <div className="relative inline-block text-left">
              <details className="dropdown">
                <summary className="btn bg-gray-800 text-white border-gray-600 hover:bg-gray-600 dark:bg-gray-100 dark:text-black dark:border-gray-100 dark:hover:bg-gray-300 m-1 w-24">
                  {user == "admin" ? (
                    <span>Admin</span>
                  ) : (
                    <span>Superuser</span>
                  )}
                </summary>
                <ul className="menu dropdown-content text-white dark:bg-white bg-gray-800 dark:text-black rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <button
                      className="hover:bg-gray-800 text-white focus:text-white focus:bg-gray-700 dark:focus:bg-gray-200 dark:focus:text-black dark:hover:bg-gray-200 dark:text-black dark:hover:text-black"
                      onClick={() => dispatchRedux(setUser("admin"))}
                    >
                      Admin
                    </button>
                  </li>
                  <li>
                    <button
                      className="hover:bg-gray-800 text-white focus:text-white focus:bg-gray-700 dark:focus:bg-gray-200 dark:focus:text-black dark:hover:bg-gray-200 dark:text-black dark:hover:text-black"
                      onClick={() => dispatchRedux(setUser("superadmin"))}
                    >
                      Super Admin
                    </button>
                  </li>
                </ul>
              </details>
            </div>
            {/* <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                onChange={handleTheme}
                checked={theme == "dark" ? true : false}
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
            </label> */}
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                onChange={() => dispatchRedux(toogleTheme())}
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
