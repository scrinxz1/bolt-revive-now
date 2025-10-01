import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TraitementInsectesPerpignan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Traitement Professionnel des Insectes à Perpignan
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Spécialiste du traitement des insectes nuisibles à Perpignan : cafards, punaises de lit, fourmis, guêpes, frelons. Intervention rapide 7j/7, produits professionnels efficaces, devis gratuit. Entreprise certifiée CERTIBIOCIDE.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Expert en désinsectisation à Perpignan</h2>
              
              <p className="mb-4">
                Les insectes nuisibles peuvent rapidement envahir votre habitation ou vos locaux professionnels et causer d'importants désagréments. Cafards dans la cuisine, punaises de lit dans les chambres, fourmis dans les pièces de vie, guêpes ou frelons sur votre propriété : chaque infestation nécessite un traitement spécifique et professionnel. Notre entreprise spécialisée intervient à Perpignan et dans les Pyrénées-Orientales pour éliminer tous types d'insectes nuisibles.
              </p>

              <p className="mb-4">
                Nous sommes certifiés CERTIBIOCIDE et nos techniciens sont formés aux dernières techniques de désinsectisation. Nous utilisons des produits biocides professionnels homologués, adaptés à chaque type d'insecte et à chaque environnement. Nos méthodes garantissent une élimination complète et durable : traitement par pulvérisation, fumigation, pièges spécifiques, gels insecticides, et solutions préventives pour éviter toute réinfestation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Tous types d'insectes traités efficacement</h2>
              
              <p className="mb-4">
                Nos services couvrent l'élimination des cafards et blattes, l'éradication des punaises de lit, le traitement des fourmis charpentières et autres espèces, la destruction des nids de guêpes et frelons asiatiques, ainsi que le traitement des araignées et autres insectes rampants ou volants. Nous intervenons chez les particuliers comme chez les professionnels : restaurants, hôtels, commerces alimentaires, bureaux, écoles et collectivités.
              </p>

              <p className="mb-6">
                Intervention rapide 7j/7, généralement sous 24 heures. Devis gratuit et tarifs transparents. Chaque traitement est suivi d'un contrôle pour vérifier son efficacité. Nous vous accompagnons également avec des conseils préventifs pour maintenir un environnement sain et protégé. Contactez-nous pour un traitement professionnel des insectes nuisibles à Perpignan.
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

export default TraitementInsectesPerpignan;
