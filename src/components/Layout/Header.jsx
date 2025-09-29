import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Menu, X, Calendar, User, Shield, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const dashboardItems = [
    { name: "Patient", path: "/patient", icon: User, color: "text-primary" },
    { name: "Doctor", path: "/doctor", icon: Calendar, color: "text-secondary" },
    { name: "Admin", path: "/admin", icon: Shield, color: "text-medical-info" },
  ];

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDashboardDropdownOpen) setIsDashboardDropdownOpen(false);
  };

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border shadow-soft sticky top-0 z-50">
      <div className="responsive-container py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => navigate("/")}
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">HealthCare+</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            
            {/* Dashboard Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsDashboardDropdownOpen(!isDashboardDropdownOpen)}
                className="flex items-center gap-1 text-muted-foreground hover:text-primary"
              >
                Dashboards
                <ChevronDown className={`h-4 w-4 transition-transform ${isDashboardDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isDashboardDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-medium py-2 z-10">
                  {dashboardItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          navigate(item.path);
                          setIsDashboardDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-muted/50 transition-colors flex items-center gap-3"
                      >
                        <IconComponent className={`h-4 w-4 ${item.color}`} />
                        <span className="text-foreground">{item.name} Dashboard</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-200"
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu-animation overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Dashboard Links */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-muted-foreground mb-3">Dashboards</p>
                <div className="space-y-2">
                  {dashboardItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          navigate(item.path);
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-muted/50 transition-colors"
                      >
                        <IconComponent className={`h-4 w-4 ${item.color}`} />
                        <span className="text-foreground">{item.name}</span>
                        <Badge variant="secondary" className="ml-auto text-xs">
                          Dashboard
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navigate("/register");
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;