"use client";
import {useAuth} from "@/context/AuthContext";
import {useState} from "react";

export function Navbar() {
  const {user, logout} = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full text-red-500 bg-white p-4">
      <div className="w-full mx-auto flex justify-between items-center">
        <a href="/">
          <img src="/swensens/logo.jpg" alt="Logo" className="" />
        </a>
        <div className="">
          {user ? (
            <>
              {/* Button with username */}
              <button
                onClick={toggleDropdown}
                className="bg-white text-red-500 px-6 py-3 rounded-full border border-red-500 hover:bg-red-100 focus:outline-none"
              >
                Hi, {user.firstName}
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
                  <a
                    href="/admin"
                    className="block px-4 py-2 text-red-500 hover:bg-red-100"
                  >
                    Admin
                  </a>

                  {/* เส้นกั้นระหว่างตัวเลือก */}
                  <div className="border-t border-gray-200"></div>

                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <a
                href="/login"
                className="mr-4 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300"
              >
                Login
              </a>
              <a
                href="/register"
                className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300"
              >
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
