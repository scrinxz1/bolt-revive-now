import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-green-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 relative">
            <span className="absolute inset-0 blur-3xl bg-green-500/40 -z-10 animate-pulse-slow"></span>
            <span className="text-white">Contactez </span>
            <span className="gradient-text">Nous</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
            Une question ? Un problème de nuisibles ? Contactez-nous maintenant !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informations de contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Téléphone</div>
                  <a
                    href="tel:0174747847"
                    className="text-primary font-bold text-xl hover:text-primary/90"
                  >
                    01 74 74 78 47
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Disponible 7j/7 24h/24</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a
                    href="mailto:contact@hygipronuisibles.fr"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    contact@hygipronuisibles.fr
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Zones d'intervention</div>
                  <p className="text-gray-700">Perpignan et ses alentours</p>
                  <p className="text-gray-700">Pyrénées-Orientales (66)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Horaires</div>
                  <p className="text-gray-700">7 jours sur 7</p>
                  <p className="text-gray-700">24 heures sur 24</p>
                  <p className="text-sm text-primary font-semibold mt-1">Urgences acceptées</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-primary">
            <h3 className="text-2xl font-bold mb-6">Demandez un devis gratuit</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Devis gratuit et sans engagement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Diagnostic précis de la situation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Conseils personnalisés</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Intervention rapide possible</span>
              </div>
            </div>
            <Button
              size="lg"
              asChild
              className="w-full bg-white text-primary hover:bg-gray-100 shadow-lg"
            >
              <a href="tel:0174747847" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Appelez pour un devis : 01 74 74 78 47
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
