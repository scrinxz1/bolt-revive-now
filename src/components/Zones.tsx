import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Zones = () => {
  const zones = [
    {
      city: "Perpignan",
      areas: ["Perpignan 66", "Pyrénées-Orientales", "Canet-en-Roussillon", "Saint-Cyprien"],
    },
    {
      city: "Alentours",
      areas: ["Argelès-sur-Mer", "Collioure", "Céret", "Prades"],
    },
  ];

  return (
    <section id="zones" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">Zones </span>
            <span className="gradient-text">d'Intervention</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
            Nous intervenons rapidement dans toute la région pour éliminer vos nuisibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900">{zone.city}</h3>
                <p className="text-primary font-semibold">et alentours</p>
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

        {/* Carte avec marqueurs */}
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-300" style={{ height: '500px' }}>
          {/* Carte Google Maps intégrée */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185364.98382396464!2d2.7394498999999998!3d42.6886591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06db68e5e8b69%3A0x4079235db2bb1e0!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          
          {/* Zone d'intervention - Bas gauche */}
          <div className="absolute bottom-6 left-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-lg z-10">
            Zone d'intervention
          </div>
          
          {/* 24H/24 - Haut droite clignotant */}
          <div className="absolute top-6 right-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg font-black text-xl animate-pulse z-10">
            24H/24
          </div>
          
          {/* Point clignotant sur Perpignan */}
          <div className="absolute top-[55%] left-[50%] z-10">
            <div className="relative">
              <div className="w-6 h-6 bg-red-600 rounded-full animate-ping absolute"></div>
              <div className="w-6 h-6 bg-red-600 rounded-full relative border-4 border-white shadow-lg"></div>
            </div>
          </div>
          
          {/* Point clignotant sur zone côtière */}
          <div className="absolute top-[60%] left-[55%] z-10">
            <div className="relative">
              <div className="w-6 h-6 bg-red-600 rounded-full animate-ping absolute" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-6 h-6 bg-red-600 rounded-full relative border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zones;
