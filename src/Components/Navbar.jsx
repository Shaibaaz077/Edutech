import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/joy/Avatar";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <section>
      <div className="w-full h-18 flex items-center px-4 py-2 bg-bg-nav shadow-sm sticky top-0 z-50 text-text">
        {" "}
        {/* Left: Menu + Logo */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-18 flex items-center justify-between ">
          <div className="md:flex items-center space-x-6 lg:pl-6">
            <h1 className="text-2xl md:text-4xl p-2 text-primary font-bold sm:ml-6">
              Edutech
            </h1>
            <div className="hidden lg:w-1/2 lg:flex md:items-center lg:border lg:border-gray-400 lg:rounded-sm lg:focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-6 h-6 ml-2"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 16.5L20 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Course"
                className="lg:px-4 lg:py-2 lg:w-full lg:text-md lg:text-gray-700 lg:font-semibold lg:focus:outline-none"
              />
            </div>
          </div>
          {/* Right: Nav & User */}
          <div className="flex items-center space-x-4 lg:pr-6">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6 lg:pr-4">
              <Link to="#" className="hover:font-semibold">
                Home
              </Link>
              {user && (
                <Link to="#" className="hover:font-semibold">
                  My Learning
                </Link>
              )}
              <Link to="#" className="hover:font-semibold">
                Careers
              </Link>
            </nav>

            {/* User / Auth */}
            {user ? (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="hidden lg:flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <Avatar
                    color="primary"
                    alt={user?.name || ""}
                    src={user?.avatar || ""}
                  />
                </button>
                {/* Dropdown */}{" "}
                {open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                    {" "}
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                      onClick={() => setOpen(false)}
                    >
                      {" "}
                      Profile{" "}
                    </Link>{" "}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-red-600"
                    >
                      {" "}
                      Logout{" "}
                    </button>{" "}
                  </div>
                )}{" "}
              </div>
            ) : (
              <div className="hidden lg:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-primary font-semibold hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-primary font-semibold text-white rounded hover:bg-primary/90"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          {/* Mobile Search Icon */}
          <button
            className="lg:hidden text-black"
            onClick={() => setSearchOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 16.5L20 20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 space-y-6">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {/* Logo */}
            <h2 className="text-2xl font-bold text-primary">Edutech</h2>
            <hr className="my-4 text-gray-600 w-full" />

            {/* Nav Links */}
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/careers" onClick={() => setMenuOpen(false)}>
                Careers
              </Link>
              {user && (
                <Link to="#" onClick={() => setMenuOpen(false)}>
                  My Learning
                </Link>
              )}
            </nav>

            {/* Auth / User */}
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link
                  to="/login"
                  className="text-primary font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-primary text-white rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Search Drawer */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
          <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 space-y-6">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setSearchOpen(false)}
            >
              ✕
            </button>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search Course"
              className="w-full border px-4 py-2 rounded focus:outline-none"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
