import { Phone, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import certibiocide from "@/assets/certibiocide.png";

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
      className="py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 min-h-[90vh] flex items-center relative overflow-hidden"
    >
      {/* Animated Background Elements - Heartbeat Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-green-300/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-green-600/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-gray-900">Élimination</span>
                <br />
                <span className="gradient-text text-5xl md:text-6xl lg:text-7xl">Professionnelle</span>
                <br />
                <span className="text-gray-700 text-2xl md:text-3xl lg:text-4xl">
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
                <div className="text-center flex flex-col items-center justify-center">
                  <img src={certibiocide} alt="CERTIBIOCIDE Agréé" className="h-12 w-auto object-contain" />
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
