import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <form 
      className="h-screen flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div
        className="absolute text-3xl top-5 left-5 font-bold cursor-pointer"
        onClick={() => handleNavigation("/")}
      >
        <img
            src="./navLogo.png"
            alt="Freestyle logo"
            className="h-11 w-auto mr-2"
          />
      </div>

      <div className="w-96 border border-white p-5 rounded-lg bg-black text-white">
        <h2 className="py-8 text-3xl font-bold text-center cursor-pointer">
          SIGN UP
        </h2>

        <div className="mx-5">
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 mt-1 border border-white rounded bg-black text-white"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 mt-3 border border-white rounded bg-black text-white"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password" className="sr-only">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 mt-3 border border-white rounded bg-black text-white"
            placeholder="Create a Password"
            required
          />

          <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 mt-3 border border-white rounded bg-black text-white"
            placeholder="Confirm Password"
            required
          />

          <button
            type="submit"
            className="text-xl w-full border border-white text-white p-2 mt-8 rounded-full hover:bg-green-800 hover:border-transparent transition duration-200"
          >
            Sign up
          </button>
        </div>

        <div className="mt-4 text-center">
          <span>OR</span>
          <div
            className="mt-3 font-semibold cursor-pointer hover:text-green-800 transition duration-200"
            onClick={() => handleNavigation("/login")}
          >
            LOG IN
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
