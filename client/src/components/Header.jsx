import React, { useState } from "react";
import userImg from "../res/user3.png";
import home from "../res/home.png";
import finance from "../res/finance.png";
import calender from "../res/calender.png";
import exam from "../res/exam.png";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function Header({ user }) {
  const [opened, setOpened] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  // const [user, setUser] = useState(user);

  const logOut = () => {
    localStorage.setItem("saved", JSON.stringify(false));
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    window.location.reload(true);
  };

  console.log("header user", user);
  console.log("header user", Object.keys(user));

  return (
    <div className="mx-auto sticky top-0 z-40 bg-blend-darken bg-[#F7F6FB]">
      <div className="px-4">
        <nav className="flex items-center justify-between">
          <div
            className="space-y-2 cursor-pointer"
            onClick={() => {
              setOpened(!opened);
            }}
          >
            <div className="w-8 h-1 bg-blue-600"></div>
            <div className="w-8 h-1 bg-blue-600"></div>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>
          <div>
            <div class="relative inline-block text-left">
              <div>
                <div
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                  type="button"
                  class="inline-flex cursor-pointer py-1 items-center w-full justify-center bg-[#F7F6FB] px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:border-2 focus:border-gray-500"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <img src={userImg} alt="" className="text-xl w-10 mr-2" />
                  <div className="flex flex-col ">
                    <span className="text-lg m-0">{user.name}</span>
                    <span className="text-sm text-center text-blue-600">
                      {user.type}
                    </span>
                  </div>
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {dropdown && (
                <div
                  class="absolute right-0 px-1 z-10 -mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <Link
                      onClick={() => {
                        setDropdown(false);
                      }}
                      to="/account"
                      class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      tabindex="-1"
                    >
                      Account
                    </Link>
                    <div
                      onClick={() => {
                        logOut();
                        setDropdown(false);
                      }}
                      class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      tabindex="-1"
                    >
                      Log Out
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div>
        {opened && (
          <div className="">
            {/* <div
              className="absolute right-0 w-[100%] lg:w-screen md:w-80 p-4 h-screen opacity-40 bg-blend-darken bg-[#F7F6FB]"
              onClick={() => {
                setOpened(!opened);
              }}
            ></div> */}
            <div
              className="
                flex flex-col absolute left-0 w-[60%] md:w-60 p-4 h-screen opacity-100 bg-blend-darken bg-[#F7F6FB] "
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white hover:text hover:text-white"
                      : ""
                  }`
                }
              >
                <img src={home} alt="" className="w-7 mr-2" />
                <span className="text-lg">Dashboard</span>
              </NavLink>
              <NavLink
                to="/students"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white hover:text hover:text-white"
                      : ""
                  }`
                }
              >
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-lg">Students</span>
              </NavLink>
              <NavLink
                to="/teachers"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white hover:text hover:text-white"
                      : ""
                  }`
                }
              >
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-lg">Teachers</span>
              </NavLink>
              <NavLink
                to="/exams"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white hover:text hover:text-white"
                      : ""
                  }`
                }
              >
                <img src={exam} alt="" className="w-7 mr-2" />
                <span className="text-lg">Exam Results</span>
              </NavLink>
              <NavLink
                to="/calender"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white hover:text hover:text-white"
                      : ""
                  }`
                }
              >
                <img src={calender} alt="" className="w-7 mr-2" />
                <span className="text-lg">calender</span>
              </NavLink>
              <NavLink
                to="/fee"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white hover:text hover:text-white"
                      : ""
                  }`
                }
              >
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-lg">Finance</span>
              </NavLink>
              <NavLink
                to="/class"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white hover:text hover:text-white"
                      : ""
                  }`
                }
              >
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-lg">Assignments</span>
              </NavLink>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive
                      ? "bg-blue-700 text-white hover:text hover:text-white"
                      : ""
                  }`
                }
              >
                <img src={user} alt="" className="w-8 mr-2" />
                <span className="text-lg">Account</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
