import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const HomeAdmin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        {/* Child routes will render here */}
        <Outlet />
      </div>
    </div>
  )
}

export default HomeAdmin
