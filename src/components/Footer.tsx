import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <div className="text-white font-bold text-lg">Hygipro Nuisibles</div>
            </div>
            <p className="text-sm leading-relaxed">
              Expert en dératisation et désinsectisation à Perpignan et ses alentours. Intervention rapide 7j/7
              24h/24 pour tous vos problèmes de nuisibles.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:0174747847"
                className="flex items-center space-x-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>01 74 74 78 47</span>
              </a>
              <a
                href="mailto:contact@hygipronuisibles.fr"
                className="flex items-center space-x-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@hygipronuisibles.fr</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Dératisation (rats, souris)</li>
              <li>Désinsectisation (cafards, blattes)</li>
              <li>Destruction nids (frelons, guêpes)</li>
              <li>Traitement punaises de lit</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Hygipro Nuisibles. Tous droits réservés.</p>
          <p className="mt-2 text-gray-500">
            Agrément CERTIBIOCIDE - Interventions certifiées et garanties
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
