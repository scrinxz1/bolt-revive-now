import { useState } from "react";
import { Menu, Phone, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-700 border-b border-green-500 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-primary">
              <span className="text-primary-foreground font-bold text-xl">H</span>
            </div>
            <div>
              <div className="text-xl font-bold text-white">Hygipro Nuisibles</div>
              <div className="text-sm font-medium text-accent">Experts en dératisation & nuisibles</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {["accueil", "services", "zones", "avis", "faq", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-accent transition-colors duration-200 font-medium capitalize"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <FileText className="w-4 h-4 mr-2" />
              Devis gratuit
            </Button>

            <div className="text-right">
              <div className="text-sm text-gray-400 font-medium">Urgence 7/7 24h/24</div>
              <a
                href="tel:0174747847"
                className="text-xl font-bold text-accent hover:text-accent/90 flex items-center transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                01 74 74 78 47
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-green-700 shadow-lg border-t border-green-500">
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {["accueil", "services", "zones", "avis", "faq", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-accent font-medium py-2 px-3 rounded text-center text-sm capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-green-600 hover:bg-green-700 text-white mb-2"
              >
                <FileText className="w-4 h-4 mr-2" />
                Devis gratuit
              </Button>
              <a
                href="tel:0174747847"
                className="flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-4 rounded-lg font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                01 74 74 78 47
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
