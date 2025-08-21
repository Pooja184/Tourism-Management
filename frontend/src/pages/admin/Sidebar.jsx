import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiPlusCircle, FiList, FiShoppingBag, FiLogOut } from "react-icons/fi"
import { useDispatch } from 'react-redux';
import { adminLogout } from "../../features/admin/adminSlice.js"; // adjust path if needed
 // adjust path if needed

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogout = () => {
    // Clear local storage or token
     dispatch(adminLogout());
    navigate("/"); // Redirect to admin login page
  };

  return (
    <div className='w-[18%] min-h-screen border-r-2 p-4 flex flex-col justify-between'>
      {/* Top Links */}
      <div className='flex flex-col gap-4'>
        
        <NavLink 
          to="/admin/addtours"
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
          className={({ isActive }) =>
            isActive 
              ? "flex items-center gap-3 px-3 py-2 bg-blue-100 text-blue-600 font-semibold rounded"
              : "flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
          }
        >
          <FiShoppingBag className="text-xl" />
          <span>Orders</span>
        </NavLink>
<button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded w-full"
        >
          <FiLogOut className="text-xl" />
          <span>Logout</span>
        </button>
      </div>

     
    </div>
  )
}

export default Sidebar
