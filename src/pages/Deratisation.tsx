import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Deratisation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Dératisation à Montpellier - Intervention Rapide et Efficace
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Vous faites face à une infestation de rats ou de souris à Montpellier ? Notre équipe d'experts certifiés intervient rapidement pour éliminer ces nuisibles de manière définitive et sécurisée.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi choisir notre service de dératisation ?</h2>
              
              <p className="mb-4">
                Les rongeurs représentent un danger sanitaire majeur pour votre habitation ou votre entreprise. Ils peuvent contaminer vos aliments, endommager vos installations électriques et transmettre des maladies graves. Notre service de dératisation professionnel à Montpellier utilise des méthodes éprouvées et respectueuses de l'environnement pour garantir l'élimination complète des rats et souris.
              </p>

              <p className="mb-4">
                Nous intervenons dans tout Montpellier et l'Hérault avec des techniciens formés et certifiés CERTIBIOCIDE. Notre approche combine diagnostic précis, traitement adapté et suivi rigoureux pour assurer des résultats durables. Que vous soyez un particulier ou un professionnel, nous proposons des solutions sur mesure adaptées à votre situation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Notre méthode d'intervention</h2>
              
              <p className="mb-4">
                Chaque intervention commence par une inspection complète de vos locaux pour identifier les points d'entrée, les zones de nidification et l'ampleur de l'infestation. Nous mettons ensuite en place un plan de traitement personnalisé utilisant des appâts sécurisés, des pièges professionnels et des méthodes préventives pour éviter toute récidive.
              </p>

              <p className="mb-6">
                Nos tarifs sont transparents et nos devis gratuits. Contactez-nous dès maintenant pour une intervention rapide et discrète à Montpellier.
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

export default Deratisation;
