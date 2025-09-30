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
      className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center relative overflow-hidden"
    >
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

              <div className="flex items-start justify-between mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight flex-1 pr-6">
                  <span className="text-gray-900">Élimination</span>
                  <br />
                  <span className="gradient-text">Professionnelle</span>
                  <br />
                  <span className="text-gray-700 text-2xl md:text-3xl lg:text-4xl">
                    des Nuisibles
                  </span>
                </h1>

                <div className="relative group">
                  <div className="relative p-4 transition-all duration-500 hover:scale-110 transform">
                    <div className="text-center mb-2">
                      <div className="inline-flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        AGRÉÉ PAR L'ÉTAT
                      </div>
                    </div>
                    <div className="relative">
                      <div className="h-16 w-20 mx-auto bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                        CERTIBIOCIDE
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <div className="text-xs font-bold text-green-600">
                        CERTIFICATION OFFICIELLE
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">
                  Dératisation • Désinsectisation • Destruction nids
                </span>
                <br />
                <span className="text-primary font-bold">
                  Intervention rapide Paris & Caen
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
          </div>

          <div className="lg:col-span-2 relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-gray-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-primary">
                  INTERVENTION D'URGENCE
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contactez-nous</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-primary/20">
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
                    href="mailto:hygopro@nuisible.fr"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700"
                  >
                    hygopro@nuisible.fr
                  </a>
                </div>

                <div className="p-4 bg-green-600 rounded-xl text-center shadow-lg">
                  <div className="text-white font-bold text-lg mb-2">DEVIS GRATUIT</div>
                  <div className="text-green-100 font-semibold">
                    Sans engagement • Particuliers & Professionnels
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
