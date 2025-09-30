import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Combien coûte une intervention ?",
      answer:
        "Le tarif dépend du type de nuisible, de la surface à traiter et de la gravité de l'infestation. Nous proposons un devis gratuit et sans engagement après diagnostic. Nos tarifs sont transparents et compétitifs.",
    },
    {
      question: "Intervenez-vous en urgence ?",
      answer:
        "Oui, nous sommes disponibles 7 jours sur 7 et 24 heures sur 24 pour les interventions d'urgence. Nous nous engageons à intervenir rapidement, souvent le jour même pour les cas urgents.",
    },
    {
      question: "Les produits utilisés sont-ils dangereux ?",
      answer:
        "Nous utilisons uniquement des produits certifiés et homologués. Nos techniciens sont formés pour appliquer les traitements en toute sécurité. Nous respectons strictement les normes environnementales et de santé publique.",
    },
    {
      question: "Combien de temps dure une intervention ?",
      answer:
        "La durée varie selon le type d'intervention : de 30 minutes pour une inspection à plusieurs heures pour un traitement complet. Nous vous informons de la durée estimée lors de la prise de rendez-vous.",
    },
    {
      question: "Proposez-vous une garantie ?",
      answer:
        "Oui, tous nos traitements sont garantis. En cas de récidive pendant la période de garantie, nous intervenons à nouveau gratuitement. La durée de garantie varie selon le type de traitement effectué.",
    },
    {
      question: "Dois-je quitter mon logement pendant le traitement ?",
      answer:
        "Pour certains traitements, il est préférable de quitter le logement pendant quelques heures. Notre technicien vous informera des précautions à prendre lors de son intervention selon le type de traitement appliqué.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Questions </span>
            <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Trouvez les réponses aux questions les plus courantes.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
