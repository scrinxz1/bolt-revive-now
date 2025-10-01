import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import certibioLogo from "@/assets/certibiocide.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logo} 
              alt="Nuisible Perpignan" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <h3 className="font-bold text-lg mb-2">Nuisible Perpignan</h3>
            <p className="text-sm text-background/80">
              Expert en désinsectisation et dératisation dans les Pyrénées-Orientales
            </p>
            <img 
              src={certibioLogo} 
              alt="CERTIBIOCIDE" 
              className="h-12 mt-4"
            />
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:0650298547" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>06 50 29 85 47</span>
              </a>
              <a 
                href="mailto:contact@nuisibleperpignan.fr" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contact@nuisibleperpignan.fr</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>• Dératisation</li>
              <li>• Désinsectisation</li>
              <li>• Traitement punaises de lit</li>
              <li>• Destruction nids de guêpes</li>
              <li>• Destruction nids de frelons</li>
              <li>• Traitement cafards et blattes</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/80">
          <p>© 2024 Nuisible Perpignan - Tous droits réservés</p>
          <p className="mt-2">Entreprise certifiée CERTIBIOCIDE - Agrément n° 066-CS-0054</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
