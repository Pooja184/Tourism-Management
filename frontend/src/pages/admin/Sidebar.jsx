import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiPlusCircle,
  FiList,
  FiShoppingBag,
  FiLogOut,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../../features/admin/adminSlice.js";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const admin = useSelector((state) => state.admin?.admin);
  const adminName = admin?.name || "Admin";

  const handleLogout = () => {
    dispatch(adminLogout());
    navigate("/");
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      <div className="md:hidden  fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-blue-600 text-white rounded-full shadow-md focus:outline-none"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-screen w-64 md:w-56 lg:w-[18%] bg-white border-r-2 shadow-md p-4 flex flex-col  z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Top Section - Admin Info */}
        <div className="flex items-center gap-3 mb-6 border-b pb-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <FiUser className="text-2xl text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{adminName}</h2>
            <p className="text-gray-500 text-sm">Admin</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          <NavLink
            to="/admin/addtours"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-3 py-2 bg-blue-100 text-blue-600 font-semibold rounded"
                : "flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            }
          >
            <FiPlusCircle className="text-xl" />
            <span>Add Tours</span>
          </NavLink>

          <NavLink
            to="/admin/listTours"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-3 py-2 bg-blue-100 text-blue-600 font-semibold rounded"
                : "flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            }
          >
            <FiList className="text-xl" />
            <span>List Tours</span>
          </NavLink>

          <NavLink
            to="/admin/orders"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-3 py-2 bg-blue-100 text-blue-600 font-semibold rounded"
                : "flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            }
          >
            <FiShoppingBag className="text-xl" />
            <span>Orders</span>
          </NavLink>
           {/* Logout Button */}
        <button
          onClick={() => {
            handleLogout();
            setIsOpen(false);
          }}
          className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded w-full mt-6"
        >
          <FiLogOut className="text-xl" />
          <span>Logout</span>
        </button>
        </div>

       
      </div>
    </>
  );
};

export default Sidebar;
