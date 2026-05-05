import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiList,
  FiLogOut,
  FiMenu,
  FiPlusCircle,
  FiUser,
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

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-secondary text-white shadow-md shadow-secondary/20"
        : "text-slate-600 hover:bg-secondary/10 hover:text-secondary"
    }`;

  const handleLogout = () => {
    dispatch(adminLogout());
    navigate("/");
  };

  return (
    <>
      <div className="fixed left-4 top-4 z-50 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/30 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          aria-label="Toggle admin menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {isOpen && (
        <button
          type="button"
          aria-label="Close admin menu"
          className="fixed inset-0 z-30 bg-slate-950/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-white/80 bg-white/95 p-5 shadow-2xl shadow-secondary/10 backdrop-blur transition-transform duration-300 md:sticky md:w-64 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="mb-7 border-b border-slate-100 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Ratnagiri
          </p>
          <h1 className="mt-1 text-2xl font-black text-secondary">
            Admin Panel
          </h1>
        </div>

        <div className="mb-7 flex items-center gap-3 rounded-2xl bg-neutral p-3">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-xl text-white">
            <FiUser />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-base font-bold text-slate-900">
              {adminName}
            </h2>
            <p className="text-sm text-slate-500">Administrator</p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-2">
          <NavLink
            to="/admin/addtours"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            <FiPlusCircle className="text-xl" />
            <span>Add Tours</span>
          </NavLink>

          <NavLink
            to="/admin/listTours"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            <FiList className="text-xl" />
            <span>List Tours</span>
          </NavLink>

          <button
            type="button"
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="mt-auto flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            <FiLogOut className="text-xl" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
