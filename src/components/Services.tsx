import { CheckCircle2 } from "lucide-react";
import cafardBlatte from "@/assets/cafard_blatte.png";
import ratSourisNew from "@/assets/rat_souris_new.png";
import punaiseLit from "@/assets/punaise_ed_lit.png";
import guepesFrelons from "@/assets/guepes_frelons.png";
import hydrogeneNew from "@/assets/hydrogene_new.png";

const Services = () => {
  const services = [
    {
      icon: cafardBlatte,
      title: "Cafards et Blattes",
      subtitle: "Élimination complète",
      description: "Traitement professionnel contre les cafards et blattes avec garantie de résultat",
      features: [
        "Diagnostic gratuit",
        "Traitement par gel et pulvérisation",
        "Garantie de résultat",
        "Intervention rapide 24/7"
      ]
    },
    {
      icon: ratSourisNew,
      title: "Rats et Souris",
      subtitle: "Dératisation efficace",
      description: "Solutions professionnelles de dératisation adaptées à votre situation",
      features: [
        "Inspection complète des lieux",
        "Pose de pièges sécurisés",
        "Traitement des points d'entrée",
        "Suivi post-intervention"
      ]
    },
    {
      icon: punaiseLit,
      title: "Punaises de Lit, Fourmis et Araignées",
      subtitle: "Traitement spécialisé",
      description: "Éradication totale des punaises de lit et contrôle des invasions d'insectes",
      features: [
        "Détection canine disponible",
        "Traitement thermique et chimique",
        "Barrières préventives",
        "Plusieurs passages inclus"
      ]
    },
    {
      icon: guepesFrelons,
      title: "Guêpes et Frelons",
      subtitle: "Destruction de nids",
      description: "Intervention sécurisée pour la destruction des nids de guêpes et frelons",
      features: [
        "Frelons asiatiques et européens",
        "Intervention en hauteur",
        "Nacelle disponible",
        "Destruction complète"
      ]
    },
    {
      icon: hydrogeneNew,
      title: "Nettoyage Hydrogène",
      subtitle: "Désinfection professionnelle",
      description: "Nettoyage et désinfection écologique par vaporisation d'hydrogène",
      features: [
        "Désinfection complète",
        "Sans produits chimiques nocifs",
        "Écologique et efficace",
        "Idéal après infestation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions professionnelles adaptées à chaque type de nuisible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundImage: `url(${service.icon})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />
              
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-gray-200 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-white">{feature}</span>
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
