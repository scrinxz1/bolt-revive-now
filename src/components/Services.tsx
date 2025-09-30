import { CheckCircle } from "lucide-react";

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
      icon: "🦟",
      title: "Autres Insectes",
      subtitle: "Désinsectisation",
      description: "Traitement contre tout type d'insecte nuisible",
      features: ["Punaises de lit", "Fourmis", "Moustiques"],
      gradient: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">Nos </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
            Expertise professionnelle dans l'élimination de tous types de nuisibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <span className="text-white text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <div className="text-base font-semibold text-primary mb-3">{service.subtitle}</div>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
