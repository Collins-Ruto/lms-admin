import React, { useState } from "react";
import user from "../res/user3.png";
import home from "../res/home.png";
import finance from "../res/finance.png";
import calender from "../res/calender.png";
import exam from "../res/exam.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [opened, setOpened] = useState(true);

  return (
    <div className="mx-auto sticky top-0 z-40 bg-blend-darken bg-[#F7F6FB]">
      <div className="p-4">
        <nav className="flex items-center justify-between">
          <div
            className="space-y-2"
            onClick={() => {
              setOpened(!opened);
            }}
          >
            <div className="w-8 h-1 bg-blue-600"></div>
            <div className="w-8 h-1 bg-blue-600"></div>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>
          <div>
            <img src={user} alt="" className="text-xl w-10" />
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
                  `mt-4 align-middle p-2 rounded-md flex items-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive ? "bg-blue-700 text-white hover:text hover:text-white" : ""
                  }`
                }
              >
                <img src={home} alt="" className="w-7 mr-2" />
                <span className="text-xl">Dashboard</span>
              </NavLink>
              <NavLink
                to="/students"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive ? "bg-blue-700 text-white hover:text hover:text-white" : ""
                  }`
                }
              >
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Students</span>
              </NavLink>
              <NavLink
                to="/teachers"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive ? "bg-blue-700 text-white hover:text hover:text-white" : ""
                  }`
                }
              >
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Teachers</span>
              </NavLink>
              <NavLink
                to="/exam"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive ? "bg-blue-700 text-white hover:text hover:text-white" : ""
                  }`
                }
              >
                <img src={exam} alt="" className="w-7 mr-2" />
                <span className="text-xl">Exam Results</span>
              </NavLink>
              <NavLink
                to="/calender"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive ? "bg-blue-700 text-white hover:text hover:text-white" : ""
                  }`
                }
              >
                <img src={calender} alt="" className="w-7 mr-2" />
                <span className="text-xl">calender</span>
              </NavLink>
              <NavLink
                to="/fee"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive ? "bg-blue-700 text-white hover:text hover:text-white" : ""
                  }`
                }
              >
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Finance</span>
              </NavLink>
              <NavLink
                to="/class"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive ? "bg-blue-700 text-white hover:text hover:text-white" : ""
                  }`
                }
              >
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Assignments</span>
              </NavLink>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `mt-4 align-middle p-2 rounded-md flex items-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer ${
                    isActive ? "bg-blue-700 text-white hover:text hover:text-white" : ""
                  }`
                }
              >
                <img src={user} alt="" className="w-8 mr-2" />
                <span className="text-xl">Account</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
