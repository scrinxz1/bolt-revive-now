import { CheckCircle } from "lucide-react";
import nuisiblePerpignan from "@/assets/nuisible_perpignan.png";
import ratSouris from "@/assets/rat_et_souris.png";
import cafardBlatte from "@/assets/cafard_blatte.png";
import cafardIcon from "@/assets/cafard_est_blates.png";
import frelons from "@/assets/frelons.png";
import guepesIcon from "@/assets/guepes.png";

const Services = () => {
  const services = [
    {
      icon: "🐭",
      title: "Dératisation",
      subtitle: "Rats & Souris",
      description: "Élimination complète et durable des rongeurs",
      features: ["Rats bruns et noirs", "Souris domestiques", "Traitement préventif"],
      gradient: "from-red-500 to-red-700",
    },
    {
      icon: "🪳",
      title: "Cafards & Blattes",
      subtitle: "Désinsectisation",
      description: "Traitement professionnel contre tous types de blattes",
      features: ["Blattes germaniques", "Blattes orientales", "Gel et pulvérisation"],
      gradient: "from-orange-500 to-orange-700",
    },
    {
      icon: "🐝",
      title: "Frelons & Guêpes",
      subtitle: "Destruction nids",
      description: "Intervention sécurisée pour la destruction de nids",
      features: ["Frelons asiatiques", "Guêpes communes", "Intervention en hauteur"],
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      icon: "🛏️",
      title: "Punaise de lit",
      subtitle: "Désinsectisation",
      description: "Traitement professionnel contre les punaises de lit",
      features: ["Détection minutieuse", "Traitement thermique", "Garantie de résultat"],
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: "🧪",
      title: "Nettoyage Hydrogène",
      subtitle: "Désinfection",
      description: "Nettoyage et désinfection par vaporisation d'hydrogène",
      features: ["Désinfection complète", "Sans produits chimiques", "Écologique"],
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: "🦟",
      title: "Fourmis & Moustiques",
      subtitle: "Désinsectisation",
      description: "Traitement contre fourmis et moustiques",
      features: ["Fourmis charpentières", "Moustiques tigres", "Solutions durables"],
      gradient: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Reflet blanc sur la section */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">Nos </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
            Expertise professionnelle dans l'élimination de tous types de nuisibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                service.title === "Dératisation" || service.title === "Cafards & Blattes" || service.title === "Frelons & Guêpes"
                  ? "relative overflow-hidden"
                  : "bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/10"
              }`}
              style={
                service.title === "Dératisation"
                  ? {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${nuisiblePerpignan})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : service.title === "Cafards & Blattes"
                  ? {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${cafardBlatte})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : service.title === "Frelons & Guêpes"
                  ? {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${frelons})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {}
              }
            >
              {/* Reflet blanc sur les cartes noires */}
              {service.title !== "Dératisation" && service.title !== "Cafards & Blattes" && service.title !== "Frelons & Guêpes" && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-xl"></div>
              )}
              
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    service.title === "Dératisation" || service.title === "Cafards & Blattes" || service.title === "Frelons & Guêpes"
                      ? "bg-white/10 border border-white/20"
                      : `bg-gradient-to-r ${service.gradient}`
                  }`}
                >
                  {service.title === "Dératisation" ? (
                    <img src={ratSouris} alt="Rat et souris" className="w-12 h-12 object-contain" />
                  ) : service.title === "Cafards & Blattes" ? (
                    <img src={cafardIcon} alt="Cafards" className="w-12 h-12 object-contain" />
                  ) : service.title === "Frelons & Guêpes" ? (
                    <img src={guepesIcon} alt="Frelons et Guêpes" className="w-12 h-12 object-contain" />
                  ) : (
                    <span className="text-white text-2xl">{service.icon}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="text-base font-semibold text-primary mb-3">{service.subtitle}</div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
