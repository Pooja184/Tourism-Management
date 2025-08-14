import React from 'react'
  import { ToastContainer, toast } from 'react-toastify';
import Hero from './components/Hero'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Destinations from './pages/Destinations'
import Footer from './components/Footer'
import Beaches from './pages/Beaches'
import Trekking from './pages/Trekking'
import Temples from './pages/Temples'
import Waterfalls from './pages/Waterfalls'
import Login from './pages/Login'
import LoginAdmin from './pages/admin/LoginAdmin';
import AddTours from './pages/admin/AddTours';
import HomeAdmin from './pages/admin/Home';

const App = () => {
  return (
    <div>
      <ToastContainer/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/destinations' element={<Destinations/>}/>
    <Route path='/destinations' element={<Destinations/>}/>
    <Route path='/beaches' element={<Beaches/>}/>
    <Route path='/trekking' element={<Trekking/>}/>
    <Route path='/temples' element={<Temples/>}/>
    <Route path='/waterfalls' element={<Waterfalls/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/adminlogin' element={<LoginAdmin/>}/>
    <Route path='/home' element={<HomeAdmin/>}/>
    <Route path='/addtours' element={<AddTours/>}/>


   </Routes>
   <Footer/>
    </div>
  )
}

export default App

