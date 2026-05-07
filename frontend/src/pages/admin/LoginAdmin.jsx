import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, registerAdmin } from "../../features/admin/adminSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.admin);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    let result;

    if (currentState === "Login") {
      result = await dispatch(loginAdmin(formData));
    } else {
      result = await dispatch(registerAdmin(formData));
    }

    if (result.payload?.success) {
      setSuccess(true);
      setFormData({ name: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    } else {
      setSuccess(false);
      toast(result.payload?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-[#F5EFE6] min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-[90%] sm:max-w-md"
      >
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          {currentState}
        </h2>

        {currentState !== "Login" && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <div className="flex justify-between text-sm mb-4">
          <p className="cursor-pointer text-gray-600 hover:text-orange-500">
            Forgot Password?
          </p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer text-orange-500 hover:underline"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create Account
            </p>
          ) : (
            <p
              className="cursor-pointer text-orange-500 hover:underline"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>

        {loading && (
          <p className="text-center text-sm text-gray-500">Processing...</p>
        )}
        {error && <p className="text-center text-sm text-red-500">{error}</p>}
        {success && (
          <p className="text-center text-sm text-green-600">
            {currentState === "Login"
              ? "Login Successful!"
              : "Registration Successful!"}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
