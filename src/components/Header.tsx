import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-700 border-b border-green-600 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Logo Nuisible Perpignan" 
              className="h-14 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Nuisible Perpignan</h1>
              <p className="text-xs text-white/80">Expert en désinsectisation</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("zones")}
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              Zones
            </button>
            <button
              onClick={() => scrollToSection("avis")}
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0650298547">
              <Button size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                06 50 29 85 47
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-600">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-white/80 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("zones")}
                className="text-white hover:text-white/80 transition-colors font-medium text-left"
              >
                Zones
              </button>
              <button
                onClick={() => scrollToSection("avis")}
                className="text-white hover:text-white/80 transition-colors font-medium text-left"
              >
                Avis
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white hover:text-white/80 transition-colors font-medium text-left"
              >
                FAQ
              </button>
              <a href="tel:0650298547" className="w-full">
                <Button size="lg" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  06 50 29 85 47
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
