import { Phone, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DevisRapidePerpignan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Devis Rapide à Montpellier - Intervention Anti-Nuisibles 24h/24
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Besoin d'une intervention rapide contre les nuisibles à Montpellier ? Obtenez votre devis gratuit immédiatement et bénéficiez d'une intervention express sous 24 heures. Dératisation, désinsectisation, désinfection - Experts certifiés disponibles 7j/7.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <Clock className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Réponse immédiate</h3>
                  <p className="text-sm">Devis en ligne ou par téléphone en quelques minutes</p>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <MapPin className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Montpellier et alentours</h3>
                  <p className="text-sm">Intervention dans tout le département 34</p>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Sans engagement</h3>
                  <p className="text-sm">Devis 100% gratuit et tarifs transparents</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Service express à Montpellier</h2>
              
              <p className="mb-4">
                Face à une urgence nuisibles, chaque minute compte. C'est pourquoi nous avons mis en place un service de devis rapide et d'intervention express à Montpellier. Appelez-nous maintenant au 06 50 29 85 47 et obtenez une réponse immédiate. Notre équipe évalue votre situation par téléphone et vous communique un devis précis en quelques minutes seulement. Pas d'attente, pas de formulaire compliqué, juste une solution rapide à votre problème de nuisibles.
              </p>

              <p className="mb-4">
                Nous intervenons en urgence pour tous types de situations : invasion de rats ou souris, infestation de cafards, punaises de lit, nids de guêpes ou frelons dangereux. Nos techniciens certifiés CERTIBIOCIDE sont disponibles 7 jours sur 7 et se déplacent rapidement dans tout Montpellier et les communes environnantes : Lattes, Mauguio, Pérols, Castelnau-le-Lez, Saint-Jean-de-Védas, Juvignac, Baillargues, Lunel et dans tout le département de l'Hérault.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi choisir notre service rapide ?</h2>
              
              <p className="mb-4">
                Notre réactivité s'accompagne d'une expertise reconnue. Tous nos techniciens sont formés aux dernières techniques de lutte antiparasitaire et utilisent des équipements professionnels de pointe. Nous garantissons une intervention efficace dès le premier passage dans la plupart des cas. Nos tarifs sont compétitifs et fixés à l'avance dans le devis, sans surprise ni coût caché.
              </p>

              <p className="mb-6">
                Ne laissez pas les nuisibles envahir votre quotidien. Agissez maintenant et profitez de notre service de devis rapide. Un simple appel suffit pour obtenir une solution professionnelle à votre problème. Intervention possible dès aujourd'hui à Montpellier.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a href="tel:+33650298547">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler le 06 50 29 85 47
                </Button>
              </a>
              
              <Link to="/devis">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Formulaire express
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DevisRapidePerpignan;
