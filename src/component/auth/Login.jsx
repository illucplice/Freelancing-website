import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
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
          LOGIN
        </h2>

        <div className="mx-5">
          <label htmlFor="user" className="sr-only">
            Username or Email
          </label>
          <input
            type="text"
            id="user"
            className="w-full p-2 mt-1 border border-white rounded bg-black text-white"
            placeholder="Enter your username or email"
            required
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 mt-3 border border-white rounded bg-black text-white"
            placeholder="Enter Your Password"
            required
          />

          <button
            type="submit"
            className="text-xl w-full border border-white text-white p-2 mt-8 rounded-full hover:bg-green-800 hover:border-transparent transition duration-200"  
            onClick={() => handleNavigation("/dashboard")}
          >
            Login
          </button>
        </div>

        <div className="mt-10 text-center">
          <span>OR</span>
          <div
            className="mt-5 font-semibold cursor-pointer hover:text-green-800 transition duration-200"
            onClick={() => handleNavigation("/signup")}
          >
            Sign up
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
