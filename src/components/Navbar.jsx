import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass =
    "px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-300";

  const activeClass =
    "px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          ✨ My React-Blog
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={location.pathname === "/" ? activeClass : linkClass}
          >
             Home
          </Link>

          <Link
            to="/register"
            className={location.pathname === "/register" ? activeClass : linkClass}
          >
             Register
          </Link>

          <div className="w-px h-6 bg-gray-300" />

          <Link
            to="/login"
            className={location.pathname === "/login" ? activeClass : linkClass}
          >
             Login
          </Link>
        </div>
      </nav>
    </header>
  );
}