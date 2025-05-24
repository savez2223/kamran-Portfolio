
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Briefcase, Code, Database, Building } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/publications", label: "Publications", icon: BookOpen },
    { path: "/work", label: "Work", icon: Briefcase },
    { path: "/nitp", label: "NITP", icon: Building },
    { path: "/codes", label: "Codes", icon: Code },
    { path: "/datasets", label: "Datasets", icon: Database },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10">
              <img 
                src="/lovable-uploads/16e5dbdf-5449-4d4b-a581-1670fa21a7e9.png" 
                alt="DOCEL.in Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl text-blue-900">
              Kamran Sohail
            </span>
          </Link>
          
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              {navItems.map(({ path, label }) => (
                <option key={path} value={path}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
