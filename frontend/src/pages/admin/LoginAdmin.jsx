import React, { useState } from 'react'

const LoginAdmin = () => {
      const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="bg-[#F5EFE6] min-h-screen flex justify-center items-center">
      <form className="bg-white shadow-lg rounded-xl p-8 w-[90%] sm:max-w-md">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          {currentState}
        </h2>

        {currentState !== "Login" && (
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <input
          type="password"
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

        <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  )
}

export default LoginAdmin
