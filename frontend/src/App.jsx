import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Footer from "./components/Footer";
import Beaches from "./pages/Beaches";
import Trekking from "./pages/Trekking";
import Temples from "./pages/Temples";
import Waterfalls from "./pages/Waterfalls";
import Login from "./pages/Login";
import LoginAdmin from "./pages/admin/LoginAdmin";
import AddTours from "./pages/admin/AddTours";
import HomeAdmin from "./pages/admin/Home"; // layout with sidebar
import AllTours from "./pages/admin/AllTours";
import Tours from "./pages/Tours"
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* User Side */}
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/trekking" element={<Trekking />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/waterfalls" element={<Waterfalls />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tours" element={<Tours/>} />

        {/* Admin Side */}
        <Route path="/adminlogin" element={<LoginAdmin />} />

        <Route path="/admin" element={<HomeAdmin />}>
          <Route path="addtours" element={<AddTours />} />
          <Route path="listTours" element={<AllTours />} />

        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
