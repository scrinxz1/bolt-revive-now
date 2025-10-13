import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeratisationParticuliersProfessionnels = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Dératisation pour Particuliers et Professionnels à Montpellier
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Entreprise de dératisation à Montpellier intervenant auprès des particuliers et professionnels. Solutions adaptées à chaque besoin : habitations, restaurants, hôtels, commerces, entrepôts. Devis gratuit et intervention rapide 7j/7.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Dératisation pour particuliers</h2>
              
              <p className="mb-4">
                Vous avez repéré des traces de rats ou de souris dans votre maison, appartement, garage ou jardin ? Ne laissez pas la situation s'aggraver. Les rongeurs se reproduisent très rapidement et peuvent causer d'importants dégâts : câbles électriques rongés, isolation détériorée, denrées alimentaires contaminées, risques sanitaires pour votre famille. Notre équipe certifiée intervient rapidement à votre domicile à Montpellier pour un traitement professionnel et discret.
              </p>

              <p className="mb-4">
                Nous proposons des solutions de dératisation adaptées aux habitations : diagnostic complet de votre logement, identification des points d'entrée, pose de pièges sécurisés et appâts rodonticides homologués, traitement préventif pour éviter toute réinfestation. Nos interventions sont sans danger pour vos enfants et animaux domestiques. Devis gratuit et tarifs transparents pour tous les particuliers.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Dératisation pour professionnels</h2>
              
              <p className="mb-4">
                Les entreprises ont l'obligation légale de lutter contre les nuisibles pour respecter les normes d'hygiène et de sécurité. Une infestation de rats ou souris peut avoir de lourdes conséquences : fermeture administrative, atteinte à votre réputation, pertes financières, contamination des stocks. Notre entreprise certifiée CERTIBIOCIDE intervient auprès de tous types d'établissements professionnels à Montpellier : restaurants, hôtels, commerces alimentaires, boulangeries, supermarchés, entrepôts, bureaux, usines, collectivités.
              </p>

              <p className="mb-6">
                Nous mettons en place des contrats de dératisation préventive et curative adaptés à votre activité : audits réguliers, traitements programmés, registres de suivi conformes à la réglementation, interventions d'urgence 7j/7. Nos techniciens interviennent en dehors de vos heures d'ouverture pour ne pas perturber votre activité. Contactez-nous pour un devis personnalisé de dératisation professionnelle à Montpellier.
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

export default DeratisationParticuliersProfessionnels;
