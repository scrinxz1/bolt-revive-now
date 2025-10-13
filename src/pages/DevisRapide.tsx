import { Phone, Clock, CheckCircle2, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DevisRapide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Devis Gratuit et Intervention Rapide à Montpellier
            </h1>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Vous avez un problème de nuisibles à Montpellier ? Obtenez un devis gratuit en quelques minutes et bénéficiez d'une intervention rapide par nos experts certifiés. Nous intervenons dans tout le département de l'Hérault pour tous types de nuisibles.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <Clock className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Intervention rapide</h3>
                  <p className="text-sm">Déplacement sous 24h dans toute la région</p>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <Shield className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Experts certifiés</h3>
                  <p className="text-sm">Techniciens formés et agréés CERTIBIOCIDE</p>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">Devis gratuit</h3>
                  <p className="text-sm">Sans engagement, tarifs transparents</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Comment ça marche ?</h2>
              
              <p className="mb-4">
                Obtenir un devis pour l'élimination de nuisibles à Montpellier n'a jamais été aussi simple. Contactez-nous par téléphone au 06 50 29 85 47 ou remplissez notre formulaire en ligne. Un de nos experts vous rappelle rapidement pour évaluer votre situation et vous proposer une solution adaptée. Nous établissons un devis détaillé et transparent, sans frais cachés.
              </p>

              <p className="mb-4">
                Une fois le devis validé, nous planifions l'intervention à votre convenance. Nos techniciens se déplacent rapidement, généralement sous 24 heures pour les situations urgentes. Nous intervenons pour tous types de nuisibles : rats, souris, cafards, punaises de lit, guêpes, frelons et bien d'autres encore.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi nous choisir ?</h2>
              
              <p className="mb-4">
                Avec plusieurs années d'expérience dans la lutte antiparasitaire à Montpellier, nous garantissons des interventions efficaces et durables. Nos méthodes respectent l'environnement tout en assurant l'élimination complète des nuisibles. Nous utilisons exclusivement des produits certifiés et appliquons des protocoles stricts pour votre sécurité.
              </p>

              <p className="mb-6">
                N'attendez pas que l'infestation s'aggrave. Plus vous agissez tôt, plus le traitement sera simple et économique. Appelez-nous maintenant ou demandez votre devis gratuit en ligne. Intervention rapide dans tout Montpellier et l'Hérault.
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
                  Remplir le formulaire
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

export default DevisRapide;
