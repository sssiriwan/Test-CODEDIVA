"use client";
import { useAuth } from "@/context/AuthContext";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full text-red-500 bg-white p-4">
      <div className="w-full mx-auto flex justify-between items-center">
        <img src="/swensens/logo.jpg" alt="Logo" className="" />
        <div>
          {user ? (
            <>
              <span className="mr-4">Hi, {user.firstName}</span>
              <button onClick={logout} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="mr-4 hover:underline">
                Login
              </a>
              <a href="/register" className="hover:underline">
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
