import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const InterventionRapide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Intervention Rapide Anti-Nuisibles - Disponible 7j/7 à Montpellier
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Besoin d'une intervention rapide contre les nuisibles à Montpellier ? Notre équipe se déplace en urgence 7j/7 pour traiter rats, souris, cafards, punaises de lit, guêpes et frelons. Devis gratuit et réactivité garantie sous 24h.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Réactivité et professionnalisme garantis</h2>
              
              <p className="mb-4">
                Face à une invasion de nuisibles, la rapidité d'action est essentielle. Chaque jour d'attente permet aux rats, cafards, punaises de lit ou autres nuisibles de se multiplier et d'aggraver l'infestation. Notre entreprise spécialisée dans la lutte contre les nuisibles intervient rapidement à Montpellier et dans l'Hérault, généralement sous 24 heures, week-ends et jours fériés compris.
              </p>

              <p className="mb-4">
                Nous comprenons l'urgence de votre situation. C'est pourquoi nous avons mis en place un service d'intervention rapide 7j/7 pour répondre à tous vos besoins en dératisation, désinsectisation et destruction de nids de guêpes ou frelons. Nos techniciens certifiés CERTIBIOCIDE sont équipés de produits biocides professionnels et de matériel adapté pour intervenir efficacement, quelle que soit l'ampleur de l'infestation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Tous types de nuisibles traités en urgence</h2>
              
              <p className="mb-4">
                Nos services d'intervention rapide couvrent tous les types de nuisibles : élimination des rats et souris, traitement des cafards et blattes, éradication des punaises de lit, destruction de nids de guêpes et frelons asiatiques, traitement des fourmis et araignées. Nous intervenons aussi bien chez les particuliers que dans les locaux professionnels : restaurants, hôtels, commerces, bureaux, entrepôts et collectivités.
              </p>

              <p className="mb-6">
                Tarifs transparents et devis gratuit avant toute intervention. Nous vous garantissons un traitement efficace, discret et respectueux des normes en vigueur. Chaque intervention est suivie d'un contrôle pour vérifier l'efficacité du traitement. Contactez-nous maintenant pour une intervention rapide contre les nuisibles à Montpellier.
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
                  Demander un devis gratuit
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

export default InterventionRapide;
