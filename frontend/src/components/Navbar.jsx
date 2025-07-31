import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-40 px-4 md:px-10 py-4 flex items-center justify-between">
        <h1 className="text-primary text-2xl font-bold">Ratnagiri Tourism</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-neutral font-semibold items-center">
          <NavLink to="/" className="hover:text-accent hover:underline underline-offset-4 transition">
            Home
          </NavLink>
          <NavLink to="/destinations" className="hover:text-accent hover:underline underline-offset-4 transition">
            Destinations
          </NavLink>
          <NavLink to="/book" className="hover:text-accent hover:underline underline-offset-4 transition">
            Book Tour
          </NavLink>
          <NavLink to="/contact" className="hover:text-accent hover:underline underline-offset-4 transition">
            Contact
          </NavLink>

          {/* Profile Dropdown - Hover on Desktop */}
          <div className="relative group">
            <FaUserCircle className="text-2xl cursor-pointer hover:text-accent transition" />
            <div className="absolute text-sm right-0 mt-3 w-40 bg-white rounded shadow-md py-3 px-4 text-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <p onClick={() => navigate("/login")} className="cursor-pointer hover:text-accent  mb-2">Sign Up/In as User</p>
              <p onClick={() => navigate("/adminlogin")} className="cursor-pointer hover:text-accent">Sign Up/In as Admin</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-neutral text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-neutral flex flex-col items-center space-y-4 py-6 z-40 md:hidden">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">Home</NavLink>
          <NavLink to="/destinations" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">Destinations</NavLink>
          <NavLink to="/book" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">Book Tour</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">Contact</NavLink>

          {/* Mobile Dropdown */}
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer hover:text-accent transition"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            />
            {mobileDropdownOpen && (
              <div className="mt-3 flex flex-col gap-2 bg-white text-gray-700 p-4 rounded shadow-md w-40">
                <p onClick={() => navigate("/")} className="cursor-pointer hover:text-accent">Sign Up/In as User</p>
                <p onClick={() => navigate("/")} className="cursor-pointer hover:text-accent">Sign Up/In as admin</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
