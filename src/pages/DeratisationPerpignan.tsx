import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeratisationPerpignan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Dératisation à Perpignan - Entreprise Certifiée CERTIBIOCIDE
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Entreprise de dératisation à Perpignan spécialisée dans l'élimination des rats et souris. Intervention rapide 7j/7, devis gratuit, traitement professionnel et garantie de résultats durables. Experts certifiés depuis plus de 10 ans.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Votre expert en dératisation à Perpignan</h2>
              
              <p className="mb-4">
                Les rongeurs représentent un danger sanitaire majeur pour votre habitation ou vos locaux professionnels. Rats noirs, rats bruns et souris se reproduisent rapidement et peuvent causer d'importants dégâts matériels : câbles électriques rongés, isolation détériorée, denrées contaminées. Notre entreprise de dératisation intervient rapidement à Perpignan et dans tout le département des Pyrénées-Orientales pour éliminer définitivement ces nuisibles.
              </p>

              <p className="mb-4">
                Nous sommes une entreprise certifiée CERTIBIOCIDE spécialisée dans la lutte contre les rongeurs. Nos techniciens qualifiés effectuent un diagnostic précis de votre situation avant toute intervention. Nous utilisons des méthodes professionnelles adaptées à chaque type d'infestation : pose de pièges sécurisés, appâts rodonticides homologués, dispositifs mécaniques, et solutions préventives pour empêcher toute nouvelle intrusion.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Intervention rapide contre rats et souris</h2>
              
              <p className="mb-4">
                Face à une infestation de rongeurs, chaque jour compte. Plus vous attendez, plus les rats et souris se multiplient et causent de dégâts. Notre équipe intervient rapidement, généralement sous 24 heures, pour traiter efficacement votre problème de dératisation à Perpignan. Nous intervenons chez les particuliers comme chez les professionnels : restaurants, commerces, hôtels, entrepôts, copropriétés et collectivités.
              </p>

              <p className="mb-6">
                Devis gratuit dératisation Perpignan, tarifs transparents et intervention garantie. Nous assurons également un suivi post-traitement pour vérifier l'efficacité de nos solutions et vous conseillons sur les bonnes pratiques pour éviter toute nouvelle infestation. Contactez-nous maintenant pour une élimination durable des rats, souris et autres rongeurs nuisibles.
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

export default DeratisationPerpignan;
