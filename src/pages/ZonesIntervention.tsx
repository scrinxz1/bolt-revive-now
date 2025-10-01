import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ZonesIntervention = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Zones d'Intervention - Dératisation et Désinsectisation dans les Pyrénées-Orientales
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Notre entreprise spécialisée en lutte contre les nuisibles intervient à Perpignan et dans tout le département des Pyrénées-Orientales. Dératisation, désinsectisation et désinfection : intervention rapide 7j/7 dans votre secteur.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Perpignan et agglomération</h2>
              
              <p className="mb-4">
                Nous intervenons dans toute la ville de Perpignan et ses quartiers : centre-ville, Saint-Assiscle, Moulin à Vent, Vernet, Saint-Martin, Bas-Vernet, Moyen-Vernet, Saint-Jacques, La Roseraie, et tous les autres secteurs. Notre entreprise certifiée CERTIBIOCIDE est basée localement, ce qui nous permet d'intervenir rapidement, généralement sous 24 heures, pour tous vos problèmes de nuisibles : rats, souris, cafards, punaises de lit, guêpes, frelons.
              </p>

              <p className="mb-4">
                Nous sommes également présents dans les communes de l'agglomération perpignanaise : Cabestany, Saint-Estève, Bompas, Canohès, Toulouges, Saleilles, Rivesaltes, Pia, Villelongue-de-la-Salanque, Saint-Laurent-de-la-Salanque, Le Soler, Pézilla-la-Rivière, Pollestres, et toutes les villes environnantes. Nos techniciens se déplacent rapidement dans votre secteur pour un diagnostic gratuit et un traitement professionnel adapté.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Tout le département des Pyrénées-Orientales</h2>
              
              <p className="mb-4">
                Notre zone d'intervention couvre l'ensemble du département 66 : la plaine du Roussillon, les Aspres, le Conflent, la Côte Vermeille, les Albères, le Vallespir, le Capcir et la Cerdagne. Nous intervenons régulièrement à Argelès-sur-Mer, Canet-en-Roussillon, Saint-Cyprien, Collioure, Port-Vendres, Céret, Prades, Amélie-les-Bains, Thuir, Ille-sur-Têt, et toutes les villes et villages du département.
              </p>

              <p className="mb-6">
                Que vous soyez un particulier ou un professionnel (restaurant, hôtel, commerce, collectivité), nous vous garantissons une intervention rapide et efficace partout dans les Pyrénées-Orientales. Devis gratuit, tarifs transparents et résultats garantis. Contactez-nous pour connaître nos délais d'intervention dans votre secteur.
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

export default ZonesIntervention;
