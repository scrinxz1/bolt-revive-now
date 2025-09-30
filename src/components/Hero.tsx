import { Phone, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="py-20 bg-gradient-hero min-h-[90vh] flex items-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Geometric shapes */}
        <svg className="absolute top-10 right-20 w-32 h-32 text-green-500/10 animate-float" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-32 left-20 w-24 h-24 text-green-400/10 animate-float" style={{ animationDelay: "2s" }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
        <svg className="absolute top-1/3 right-1/4 w-20 h-20 text-green-600/10 animate-pulse-slow" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-primary rounded-full px-6 py-3 shadow-primary">
                <Shield className="w-5 h-5 text-primary-foreground mr-2" />
                <span className="text-primary-foreground font-semibold text-sm">
                  Experts Certifiés • 7j/7 24h/24
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-gray-900">Élimination</span>
                <br />
                <span className="gradient-text text-6xl md:text-7xl lg:text-8xl">Professionnelle</span>
                <br />
                <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl">
                  des Nuisibles
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">
                  Dératisation • Désinsectisation • Destruction nids
                </span>
                <br />
                <span className="text-primary font-bold">
                  Intervention rapide Perpignan et ses alentours
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-primary">
                <a href="tel:0174747847" className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>Appelez maintenant</span>
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FileText className="w-5 h-5 mr-3" />
                <span>Devis gratuit</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-green-100">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">7/7</div>
                  <div className="text-sm text-gray-600 font-medium">Disponible</div>
                  <div className="text-xs text-gray-500">24h/24 pour urgences</div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-green-100">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">Perpignan</div>
                  <div className="text-sm text-gray-600 font-medium">& Alentours</div>
                  <div className="text-xs text-gray-500">Intervention rapide</div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-green-100">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600">✓</div>
                  <div className="text-sm text-gray-600 font-medium">CERTIBIOCIDE</div>
                  <div className="text-xs text-gray-500">Agréé par l'État</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-primary animate-pulse-slow">
                  INTERVENTION D'URGENCE
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contactez-nous</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-primary/20">
                  <span className="font-semibold text-gray-900">Téléphone :</span>
                  <a
                    href="tel:0174747847"
                    className="text-xl font-bold text-primary hover:text-primary/90"
                  >
                    01 74 74 78 47
                  </a>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <span className="font-semibold text-gray-900">Email :</span>
                  <a
                    href="mailto:contact@hygipronuisibles.fr"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 break-all"
                  >
                    contact@hygipronuisibles.fr
                  </a>
                </div>

                <div className="p-6 bg-gradient-primary rounded-xl text-center shadow-lg">
                  <div className="text-white font-bold text-xl mb-2">DEVIS GRATUIT</div>
                  <div className="text-green-100 font-semibold text-sm">
                    Sans engagement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
