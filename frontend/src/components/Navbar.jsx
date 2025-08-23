import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../features/user/userSlice.JS"; // adjust path if needed
import { adminLogout } from "../features/admin/adminSlice.JS"; // adjust path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userToken:userToken, user } = useSelector((state) => state.user);
  const { adminToken:adminToken, admin } = useSelector((state) => state.admin);

  // console.log(user)
  // console.log(token)

  const handleLogoutUser = () => {
    dispatch(userLogout());
    setMobileDropdownOpen(false);
    setMenuOpen(false);
    navigate("/");
  };
  
  const handleLogoutAdmin = () => {
    dispatch(adminLogout());
    setMobileDropdownOpen(false);
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-40 px-4 md:px-10 py-4 flex items-center justify-between">
        <h1 className="text-primary text-2xl font-bold">Ratnagiri Tourism</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-neutral font-semibold items-center">
          <NavLink to="/" className="hover:text-accent hover:underline underline-offset-4 transition">Home</NavLink>
          <NavLink to="/destinations" className="hover:text-accent hover:underline underline-offset-4 transition">Destinations</NavLink>
          <NavLink to="/tours" className="hover:text-accent hover:underline underline-offset-4 transition">Book Tour</NavLink>
          <NavLink to="/contact" className="hover:text-accent hover:underline underline-offset-4 transition">Contact</NavLink>

          {/* Profile Dropdown - Desktop */}
          <div className="relative group">
            <FaUserCircle className="text-2xl cursor-pointer hover:text-accent transition" />
            <div className="absolute text-sm right-0 mt-3 w-44 bg-white rounded shadow-md py-3 px-4 text-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {userToken ? (
                <>
                  <p className="mb-2">Hii, {user?.name || "User"}</p>
                  <p onClick={handleLogoutUser} className="cursor-pointer hover:text-accent">Logout</p>
                </>
              ) :
              adminToken?(
                <>
                <p className="mb-2">Hii, {admin?.name || "Admin"}</p>
                  <p onClick={()=>navigate('/admin')} className="cursor-pointer hover:text-accent mb-2">Home</p>
                  <p onClick={handleLogoutAdmin} className="cursor-pointer hover:text-accent ">Logout</p>

                </>
              )
               :(
                <>
                  <p onClick={() => navigate("/login")} className="cursor-pointer hover:text-accent mb-2">Sign Up/In as User</p>
                  <p onClick={() => navigate("/adminlogin")} className="cursor-pointer hover:text-accent">Sign Up/In as Admin</p>
                </>
              )}
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
          <NavLink to="/tours" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">Book Tour</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">Contact</NavLink>

          {/* Mobile Dropdown */}
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer hover:text-accent transition"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            />
            {mobileDropdownOpen && (
              <div className="mt-3 flex flex-col gap-2 bg-white text-gray-700 p-4 rounded shadow-md w-40">
                {token ? (
                  <>
                    <p>Hii, {user?.name || "User"}</p>
                    <p onClick={handleLogoutUser} className="cursor-pointer hover:text-accent">Logout</p>
                  </>
                ) : (
                  <>
                    <p onClick={() => navigate("/login")} className="cursor-pointer hover:text-accent">Sign Up/In as User</p>
                    <p onClick={() => navigate("/adminlogin")} className="cursor-pointer hover:text-accent">Sign Up/In as Admin</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
