import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-white"}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="text-xl md:text-2xl font-bold text-gray-900">
            Mohith Baskaran
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-gray-900">About</button>
            <button onClick={() => scrollToSection("experience")} className="text-gray-600 hover:text-gray-900">Experience</button>
            <button onClick={() => scrollToSection("projects")} className="text-gray-600 hover:text-gray-900">Projects</button>
            <button onClick={() => scrollToSection("skills")} className="text-gray-600 hover:text-gray-900">Skills</button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-gray-900">Contact</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">About</button>
            <button onClick={() => scrollToSection("projects")} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Projects</button>
            <button onClick={() => scrollToSection("experience")} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Experience</button>
            <button onClick={() => scrollToSection("skills")} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Skills</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
