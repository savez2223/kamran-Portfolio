
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  BookOpen,
  Briefcase,
  Code,
  Database,
  Contact,
  Menu,
  X,
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/publications", label: "Publications", icon: BookOpen },
    { path: "/work", label: "Work", icon: Briefcase },
    { path: "/codes", label: "Codes", icon: Code },
    { path: "/datasets", label: "Datasets", icon: Database },
    { path: "/contact", label: "Contact", icon: Contact },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-blue-900">
              Kamran Sohail
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
