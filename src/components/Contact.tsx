import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground">
            Nous sommes à votre disposition 7j/7 et 24h/24
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Nos coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                    <a href="tel:0668053434" className="text-primary hover:underline text-lg">
                      06 68 05 34 34
                    </a>
                    <p className="text-sm text-muted-foreground">Disponible 24h/24</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:contact@nuisibleperpignan.fr" className="text-primary hover:underline">
                      contact@nuisibleperpignan.fr
                    </a>
                    <p className="text-sm text-muted-foreground">Réponse sous 2h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Zone d'intervention</h4>
                    <p className="text-muted-foreground">
                      Perpignan et Pyrénées-Orientales
                    </p>
                    <p className="text-sm text-muted-foreground">Rayon de 50 km</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horaires</h4>
                    <p className="text-muted-foreground">7 jours sur 7</p>
                    <p className="text-muted-foreground">24 heures sur 24</p>
                    <p className="text-sm text-muted-foreground mt-1">Intervention d'urgence possible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Devis gratuit et sans engagement
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Obtenez une estimation rapide et précise pour votre intervention
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Diagnostic gratuit de votre situation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Intervention rapide sous 2h</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Garantie de résultat</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">Tarifs transparents</span>
              </li>
            </ul>

            <Button 
              size="lg" 
              className="w-full text-lg"
              asChild
            >
              <a href="tel:0668053434">
                <Phone className="mr-2 h-5 w-5" />
                Appelez maintenant
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
