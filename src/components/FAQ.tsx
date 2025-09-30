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
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">Questions </span>
            <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="text-xl text-gray-300 font-medium">
            Trouvez les réponses aux questions les plus courantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={`item-${index}`}
                className="bg-black rounded-xl px-6 py-2 border border-white/10"
              >
                <AccordionTrigger className="text-left font-bold text-white hover:text-primary [&[data-state=open]>svg]:text-green-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
