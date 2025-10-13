import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Desinsectisation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Désinsectisation à Montpellier - Experts en Traitement Anti-Insectes
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Cafards, punaises de lit, guêpes, frelons ou fourmis envahissent votre espace ? Notre équipe spécialisée en désinsectisation intervient rapidement à Montpellier pour éliminer tous types d'insectes nuisibles de manière efficace et durable.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Solutions professionnelles contre tous les insectes</h2>
              
              <p className="mb-4">
                Les insectes nuisibles peuvent rapidement devenir un cauchemar dans votre quotidien. Les punaises de lit perturbent votre sommeil, les cafards contaminent votre cuisine, les guêpes et frelons représentent un danger pour votre sécurité. Notre service de désinsectisation professionnel à Montpellier utilise des techniques avancées et des produits certifiés pour garantir l'éradication complète de ces nuisibles.
              </p>

              <p className="mb-4">
                Nous traitons tous types d'infestations : punaises de lit, blattes et cafards, guêpes et frelons asiatiques, fourmis, araignées et autres insectes rampants ou volants. Nos techniciens certifiés CERTIBIOCIDE possèdent l'expertise nécessaire pour identifier précisément l'espèce et appliquer le traitement le plus adapté à votre situation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi faire appel à nos experts ?</h2>
              
              <p className="mb-4">
                Contrairement aux produits grand public souvent inefficaces, nos traitements professionnels garantissent des résultats durables. Nous utilisons des biocides homologués, appliqués selon des protocoles stricts pour assurer votre sécurité et celle de votre famille. Chaque intervention est suivie d'un contrôle pour vérifier l'efficacité du traitement.
              </p>

              <p className="mb-6">
                Intervention rapide dans tout Montpellier et l'Hérault. Devis gratuit et sans engagement. Contactez-nous dès maintenant pour retrouver un environnement sain et sans insectes.
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

export default Desinsectisation;
