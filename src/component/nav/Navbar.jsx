import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <nav className="bg-black text-white py-4 border-b-1 border-green-800 relative p-2">
      <div className="container mx-auto flex justify-between items-center font-sans">
        <div
          className="text-3xl font-bold cursor-pointer flex items-center"
          onClick={() => handleNavigation("/")}
        >
          <img
            src="./navLogo.png"
            alt="Freestyle logo"
            className="h-11 w-auto mr-2"
          />
          
        </div>

        <ul className="hidden md:flex items-center space-x-5">
          <li
            className="hover:text-green-800 transition duration-200 cursor-pointer"
            onClick={() => handleNavigation("/login")}
          >
            Hire a freelancer
          </li>
          <li
            className="hover:text-green-800 transition duration-200 cursor-pointer"
            onClick={() => handleNavigation("/login")}
          >
            Earn as a freelancer
          </li>
          <li
            className="hover:text-green-800 transition duration-200 cursor-pointer"
            onClick={() => handleNavigation("/login")}
          >
            LOG IN
          </li>
          <li>
            <button
              className="rounded-full bg-transparent border text-green-700 border-green-700 hover:border-transparent hover:bg-green-800 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
              onClick={() => handleNavigation("/signup")}
            >
              SIGN UP
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-3xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <ul className="md:hidden bg-black text-white p-4 space-y-2">
          <li
            className="hover:text-green-800 transition duration-200 cursor-pointer"
            onClick={() => handleNavigation("/hire")}
          >
            Hire a freelancer
          </li>
          <li
            className="hover:text-green-800 transition duration-200 cursor-pointer"
            onClick={() => handleNavigation("/earn")}
          >
            Earn as a freelancer
          </li>
          <li
            className="hover:text-green-800 transition duration-200 cursor-pointer"
            onClick={() => handleNavigation("/login")}
          >
            LOG IN
          </li>
          <li>
            <button
              className="cursor-pointer text-white hover:text-green-700 transition duration-200"
              onClick={() => handleNavigation("/signup")}
            >
              SIGN UP
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
