import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToContact } from "@/utils/scrollToContact";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetInTouch = () => {
    navigate("/contact");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 py-1">
          {isScrolled ? (
            <img
              src="/assets/new-logo/logo-blue.png"
              alt="Dexterz Technologies Logo"
              className="h-8 md:h-10 object-contain"
            />
          ) : (
            <img
              src="/assets/new-logo/logo-blue.png"
              alt="Dexterz Technologies Logo"
              className="h-8 md:h-10 object-contain"
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = link.path === "/services" 
              ? location.pathname.startsWith("/services")
              : location.pathname === link.path;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-brand-teal font-semibold"
                    : "text-gray-700 hover:text-brand-teal"
                }`}>
                {link.name}
              </Link>
            );
          })}
          <Button
            className="bg-brand-teal hover:bg-brand-teal/90 text-white"
            onClick={handleGetInTouch}>
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-brand-teal">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = link.path === "/services" 
                ? location.pathname.startsWith("/services")
                : location.pathname === link.path;
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors py-2 border-b border-gray-100 ${
                    isActive
                      ? "text-brand-teal font-semibold"
                      : "text-gray-700 hover:text-brand-teal"
                  }`}
                  onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              );
            })}
            <Button
              className="bg-brand-teal hover:bg-brand-teal/90 text-white w-full"
              onClick={() => {
                setIsMenuOpen(false);
                handleGetInTouch();
              }}>
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
