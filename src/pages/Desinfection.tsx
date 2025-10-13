import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Desinfection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Désinfection Professionnelle à Montpellier - Hygiène Garantie
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Besoin d'une désinfection complète de vos locaux à Montpellier ? Notre équipe d'experts intervient pour éliminer bactéries, virus et germes pathogènes avec des protocoles professionnels certifiés et des produits désinfectants de haute qualité.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Service de désinfection professionnel</h2>
              
              <p className="mb-4">
                La désinfection professionnelle est essentielle pour maintenir un environnement sain et sécurisé, que ce soit dans votre habitation, vos locaux commerciaux ou vos espaces professionnels. Après une infestation de nuisibles, un sinistre ou simplement pour assurer une hygiène optimale, notre service de désinfection à Montpellier utilise des techniques éprouvées et des produits biocides homologués pour éliminer tous les agents pathogènes.
              </p>

              <p className="mb-4">
                Nous intervenons dans tous types de locaux : habitations, restaurants, bureaux, commerces, établissements de santé et collectivités. Nos techniciens certifiés CERTIBIOCIDE appliquent des protocoles stricts conformes aux normes sanitaires en vigueur. La désinfection peut être réalisée par pulvérisation, nébulisation ou fumigation selon les besoins spécifiques de votre situation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi choisir notre service ?</h2>
              
              <p className="mb-4">
                Notre expertise en désinfection garantit l'élimination efficace des micro-organismes pathogènes tout en respectant votre environnement. Nous utilisons des produits désinfectants professionnels à large spectre, actifs contre les bactéries, virus, champignons et moisissures. Chaque intervention est suivie d'un contrôle qualité pour certifier l'efficacité du traitement.
              </p>

              <p className="mb-6">
                Intervention rapide dans tout Montpellier et l'Hérault. Devis gratuit sur simple demande. Contactez-nous pour bénéficier d'un service professionnel et discret adapté à vos besoins spécifiques.
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

export default Desinfection;
