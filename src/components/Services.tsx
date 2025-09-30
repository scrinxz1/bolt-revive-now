import { CheckCircle2 } from "lucide-react";
import cafardBlatte from "@/assets/cafard_blatte.png";
import ratSouris from "@/assets/rat_et_souris.png";
import punaiseLit from "@/assets/punaise_ed_lit.png";
import guepes from "@/assets/guepes.png";
import frelons from "@/assets/frelons.png";
import punaiseFourmis from "@/assets/punaise_arraigner_fourmis.png";

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
      icon: ratSouris,
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
      title: "Punaises de Lit",
      subtitle: "Traitement spécialisé",
      description: "Éradication totale des punaises de lit avec méthodes professionnelles",
      features: [
        "Détection canine disponible",
        "Traitement thermique et chimique",
        "Préparation guidée",
        "Plusieurs passages inclus"
      ]
    },
    {
      icon: guepes,
      title: "Guêpes",
      subtitle: "Destruction de nids",
      description: "Intervention sécurisée pour la destruction des nids de guêpes",
      features: [
        "Intervention en hauteur",
        "Équipement de protection",
        "Destruction du nid",
        "Prévention des retours"
      ]
    },
    {
      icon: frelons,
      title: "Frelons",
      subtitle: "Élimination sécurisée",
      description: "Traitement professionnel des nids de frelons européens et asiatiques",
      features: [
        "Intervention rapide",
        "Nacelle disponible",
        "Destruction complète",
        "Respect de l'environnement"
      ]
    },
    {
      icon: punaiseFourmis,
      title: "Fourmis et Araignées",
      subtitle: "Contrôle des invasions",
      description: "Solutions durables contre les invasions de fourmis et araignées",
      features: [
        "Traitement extérieur/intérieur",
        "Barrières préventives",
        "Produits résiduels",
        "Conseils de prévention"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
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
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Image de fond */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${service.icon})` }}
              />
              
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
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
