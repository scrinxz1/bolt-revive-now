import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NuisiblePerpignan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Traitement Anti-Nuisibles à Perpignan - Expert Certifié
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Vous recherchez un expert en traitement anti-nuisibles à Perpignan ? Notre entreprise spécialisée intervient rapidement pour éliminer tous types de nuisibles : rats, souris, cafards, punaises de lit, guêpes, frelons. Solutions professionnelles et durables garanties.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Votre spécialiste anti-nuisibles à Perpignan</h2>
              
              <p className="mb-4">
                Les nuisibles peuvent rapidement transformer votre quotidien en cauchemar. Qu'il s'agisse de rongeurs dans vos murs, de cafards dans votre cuisine, de punaises de lit dans votre chambre ou de nids de guêpes sur votre propriété, chaque infestation nécessite une intervention professionnelle rapide et efficace. Notre entreprise certifiée CERTIBIOCIDE intervient dans tout Perpignan et les Pyrénées-Orientales pour traiter tous types de nuisibles.
              </p>

              <p className="mb-4">
                Nous proposons une gamme complète de services anti-nuisibles : dératisation professionnelle contre rats et souris, désinsectisation pour éliminer cafards, blattes, punaises de lit, fourmis et araignées, destruction de nids de guêpes et frelons asiatiques, ainsi que des traitements préventifs pour protéger durablement votre propriété. Nos techniciens formés utilisent des méthodes éprouvées et des produits biocides homologués pour garantir des résultats optimaux.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Intervention rapide et efficace</h2>
              
              <p className="mb-4">
                Face à une infestation de nuisibles, la rapidité d'intervention est cruciale. Plus vous attendez, plus les nuisibles se reproduisent et envahissent votre espace. Notre équipe se déplace rapidement à Perpignan, généralement sous 24 heures, pour évaluer la situation et mettre en place le traitement adapté. Nous intervenons auprès des particuliers comme des professionnels : restaurants, hôtels, commerces, bureaux et collectivités.
              </p>

              <p className="mb-6">
                Nos tarifs sont transparents et nos devis gratuits. Chaque intervention est suivie d'un contrôle pour vérifier l'efficacité du traitement. Nous vous accompagnons également avec des conseils préventifs pour éviter toute nouvelle infestation. Contactez-nous maintenant pour une intervention rapide à Perpignan et retrouvez un environnement sain et sécurisé.
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

export default NuisiblePerpignan;
