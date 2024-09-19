import { Link, useNavigate } from "react-router-dom";
import { RecycleIcon, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
 const handleLogin = () => {
  navigate("/login")
 }
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b bg-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <RecycleIcon className="h-8 w-8 text-green-500 mr-2" />
        <span className="text-green-700 text-xl font-bold">Recycle</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {["Home", "About", "Blog", "FAQ", "Projects", "Contact Us"].map(
          (item) => (
            <li key={item} className="list-none">
              <Link
                to="#"
                className="text-gray-600 hover:text-green-500 transition"
              >
                {item}
              </Link>
            </li>
          )
        )}
      </nav>

      {/* Mobile Menu and Login Button */}
      <div className="flex items-center space-x-4">
        {/* Login Button */}
        <button onClick={handleLogin} className="hidden md:inline bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
          Login
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      {showMobileMenu && (
        <nav className="fixed top-0 right-0 w-2/3 h-full bg-gray-100 p-4 shadow-lg transition-transform transform translate-x-0 md:hidden">
          <ul className="flex flex-col space-y-4">
            {["Home", "About", "Blog", "FAQ", "Projects", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to="#"
                    onClick={() => setShowMobileMenu(false)}
                    className="text-gray-600 hover:text-green-500 transition"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}

      {/* Overlay when mobile menu is open */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setShowMobileMenu(false)}
        />
      )}
    </header>
  );
}
