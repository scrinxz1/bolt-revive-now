import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Zones = () => {
  const zones = [
    {
      city: "Perpignan",
      areas: ["Perpignan 66", "Pyrénées-Orientales", "Canet-en-Roussillon", "Saint-Cyprien"],
      icon: "☀️",
    },
    {
      city: "Alentours",
      areas: ["Argelès-sur-Mer", "Collioure", "Céret", "Prades"],
      icon: "🏖️",
    },
  ];

  return (
    <section id="zones" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Zones </span>
            <span className="gradient-text">d'Intervention</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">
            Nous intervenons rapidement dans toute la région pour éliminer vos nuisibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{zone.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{zone.city}</h3>
                  <p className="text-primary font-semibold">et alentours</p>
                </div>
              </div>
              <div className="space-y-3">
                {zone.areas.map((area, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Disponibilité</h4>
              <p className="text-gray-600">7 jours sur 7 - 24h/24</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Urgence</h4>
              <p className="text-gray-600">Intervention rapide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Déplacement</h4>
              <p className="text-gray-600">Dans toute la région</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild className="shadow-primary">
              <a href="tel:0174747847" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Appelez-nous : 01 74 74 78 47
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zones;
