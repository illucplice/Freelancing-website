import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

export const Insidenav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <nav className="bg-black text-white py-4 border-b-1 border-green-800 relative">
      <div className="container mx-auto flex items-center font-sans">
        <div className="text-3xl font-bold cursor-pointer" onClick={() => handleNavigation("/earn")}>
        <img
            src="./navLogo.png"
            alt="Freestyle logo"
            className="h-11 w-auto mr-2"
          />
        </div>
        <div className="flex items-center mr-10 ml-auto">
          <form onSubmit={handleSearch} className="rounded-full flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-4 py-2 text-black bg-white rounded-l-full w-96"
            />
            <button type="submit" className="bg-green-800 px-4 py-2 rounded-r-full">
              Search
            </button>
          </form>
        </div>

        <ul className="hidden md:flex items-center space-x-5">
          <li className="hover:text-green-800 transition duration-200 cursor-pointer" onClick={() => handleNavigation("/dashboard")}>
            Switch to buying
          </li>
          <li className="hover:text-green-800 transition duration-200 cursor-pointer" onClick={() => handleNavigation("/earn")}>
            Profile
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-3xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <ul className="md:hidden bg-black text-white p-4 space-y-2 flex flex-col items-start w-full">
          <li className="w-full">
            <form onSubmit={handleSearch} className="flex w-full border border-green-800 rounded-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-4 py-2 text-black bg-white rounded-l-md w-full"
              />
              <button type="submit" className="bg-green-800 px-4 py-2 rounded-r-md">
                Search
              </button>
            </form>
          </li>
          <li className="hover:text-green-800 transition duration-200 cursor-pointer" onClick={() => handleNavigation("/dashboard")}>
            Switch to buying
          </li>
          <li className="hover:text-green-800 transition duration-200 cursor-pointer" onClick={() => handleNavigation("/earn")}>
            Earn as a freelancer
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Insidenav;
