import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DevisDeratisation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Devis Dératisation Gratuit à Montpellier - Intervention 24h/24
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Demandez votre devis gratuit pour une dératisation professionnelle à Montpellier. Nos experts certifiés vous proposent une solution sur mesure adaptée à votre situation. Intervention rapide et tarifs transparents.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Devis gratuit et sans engagement</h2>
              
              <p className="mb-4">
                Confronté à une invasion de rats ou de souris dans votre habitation ou vos locaux professionnels à Montpellier ? Obtenez rapidement un devis gratuit et personnalisé pour éliminer définitivement ces nuisibles. Notre équipe d'experts en dératisation évalue précisément l'ampleur de l'infestation et vous propose un plan d'action efficace avec un tarif clair et détaillé.
              </p>

              <p className="mb-4">
                Chaque situation est unique. C'est pourquoi nous établissons systématiquement un diagnostic complet avant toute intervention. Nos techniciens certifiés CERTIBIOCIDE se déplacent à votre domicile ou dans vos locaux pour identifier les zones infestées, les points d'entrée des rongeurs et l'étendue du problème. Sur cette base, nous élaborons une stratégie de traitement adaptée avec un devis transparent incluant tous les frais.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi demander un devis professionnel ?</h2>
              
              <p className="mb-4">
                Les produits disponibles dans le commerce grand public sont souvent insuffisants face à une véritable infestation de rongeurs. Nos solutions professionnelles garantissent une élimination complète et durable des rats et souris. Nous utilisons des techniques éprouvées, des appâts sécurisés et des dispositifs conformes aux normes en vigueur. De plus, nous vous conseillons sur les mesures préventives pour éviter toute récidive.
              </p>

              <p className="mb-6">
                N'attendez pas que l'infestation s'aggrave. Plus vous agissez rapidement, plus le traitement sera simple et économique. Contactez-nous dès maintenant pour votre devis gratuit de dératisation à Montpellier. Intervention possible sous 24 heures dans tout le département de l'Hérault.
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
                  Formulaire de devis gratuit
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

export default DevisDeratisation;
