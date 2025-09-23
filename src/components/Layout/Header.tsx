import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Calendar, User, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">HealthCare+</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Register
            </Button>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => navigate("/patient")}
                className="p-2"
              >
                <User className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => navigate("/doctor")}
                className="p-2"
              >
                <Calendar className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => navigate("/admin")}
                className="p-2"
              >
                <Shield className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
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
        )}
      </div>
    </header>
  );
};

export default Header;