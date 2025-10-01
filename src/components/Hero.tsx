import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import certibioLogo from "@/assets/certibiocide.png";
import nuisiblePerpignan from "@/assets/nuisible_perpignan.png";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="accueil"
      className="relative pt-32 pb-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${nuisiblePerpignan})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuisible Perpignan, votre expert en dératisation dans les Pyrénées-Orientales
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Nous vous proposons une solution rapide, efficace et vérifiée contre les nuisibles. 
            Nous intervenons pour la dératisation, désinsectisation et désinfection 7j/7 et 24h/24.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Nous contacter
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="tel:0650298547">
                <Phone className="mr-2 h-5 w-5" />
                06 50 29 85 47
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Intervention rapide</h3>
              <p className="text-sm text-white/90">Notre équipe est à votre disposition 24h/24 et 7j/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Solutions efficaces</h3>
              <p className="text-sm text-white/90">Produits professionnels innovants et performants</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2">Savoir-faire vérifié</h3>
              <p className="text-sm text-white/90">Service de qualité et de confiance</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img 
              src={certibioLogo} 
              alt="CERTIBIOCIDE Agréé" 
              className="h-16 md:h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
