import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import {
  FaFileCircleExclamation,
  FaFileCircleMinus,
  FaFileCircleCheck,
  FaUserGroup,
  FaMicrosoft,
} from "react-icons/fa6";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <NavLink
              className={`flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-100  ${
                location.pathname === "/dashboard"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
              to="/dashboard"
            >
              <FaMicrosoft />
              <span className="mx-4 font-medium">Dashboard</span>
            </NavLink>

            {user && user.role === "admin" ? (
              <>
                <NavLink
                  className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                    location.pathname === "/data/thl"
                      ? "bg-blue-700 text-white"
                      : ""
                  }`}
                  to="/data/thl"
                >
                  <FaUserGroup />
                  <span className="mx-4 font-medium">Data THL</span>
                </NavLink>
              </>
            ) : null}
            <NavLink
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                location.pathname === "/reports"
                  ? "bg-blue-700 text-white "
                  : ""
              }`}
              to="/reports"
            >
              <FaFileCircleExclamation />
              <span className="mx-4 font-medium">Laporan</span>
            </NavLink>
            <NavLink
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                location.pathname === "/reports/accept"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
              to="/reports/accept"
            >
              <FaFileCircleCheck />
              <span className="mx-4 font-medium">Laporan Diterima</span>
            </NavLink>
            <NavLink
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${
                location.pathname === "/reports/reject"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
              to="/reports/reject"
            >
              <FaFileCircleMinus />
              <span className="mx-4 font-medium">Laporan Ditolak</span>
            </NavLink>

            <hr className="my-6 border-gray-200" />
            <button
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              onClick={logout}
            >
              <FiLogOut />
              <span className="mx-4 font-medium">Keluar</span>
            </button>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
