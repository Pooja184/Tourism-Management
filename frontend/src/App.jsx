import React, { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Beaches = lazy(() => import("./pages/Beaches"));
const Trekking = lazy(() => import("./pages/Trekking"));
const Temples = lazy(() => import("./pages/Temples"));
const Waterfalls = lazy(() => import("./pages/Waterfalls"));
const Login = lazy(() => import("./pages/Login"));
const LoginAdmin = lazy(() => import("./pages/admin/LoginAdmin"));
const DashboardAdmin = lazy(() => import("./pages/admin/Dashboard"));
const AddTours = lazy(() => import("./pages/admin/AddTours"));
const HomeAdmin = lazy(() => import("./pages/admin/Home"));
const AllTours = lazy(() => import("./pages/admin/AllTours"));
const Tours = lazy(() => import("./pages/Tours"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Suspense fallback={<div className="min-h-screen bg-neutral" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/trekking" element={<Trekking />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/waterfalls" element={<Waterfalls />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adminlogin" element={<LoginAdmin />} />
          <Route path="/admin" element={<HomeAdmin />}>
            <Route index element={<DashboardAdmin />} />
            <Route path="addtours" element={<AddTours />} />
            <Route path="listTours" element={<AllTours />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
