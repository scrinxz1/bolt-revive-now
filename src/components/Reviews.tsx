import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Marie L.",
      location: "Perpignan",
      rating: 5,
      text: "Service impeccable ! Intervention rapide pour un problème de cafards. L'équipe est professionnelle et efficace.",
      date: "Il y a 2 semaines",
      service: "Traitement cafards"
    },
    {
      name: "Jean-Pierre M.",
      location: "Canet-en-Roussillon",
      rating: 5,
      text: "Très satisfait de la dératisation effectuée dans mon restaurant. Discret et efficace.",
      date: "Il y a 1 mois",
      service: "Dératisation"
    },
    {
      name: "Sophie D.",
      location: "Argelès-sur-Mer",
      rating: 5,
      text: "Intervention rapide pour des punaises de lit. Problème résolu après 2 passages. Je recommande !",
      date: "Il y a 3 semaines",
      service: "Punaises de lit"
    },
    {
      name: "Antoine R.",
      location: "Saint-Cyprien",
      rating: 5,
      text: "Excellent service pour l'enlèvement d'un nid de guêpes. Intervention sécurisée et rapide.",
      date: "Il y a 1 semaine",
      service: "Destruction nid de guêpes"
    },
    {
      name: "Claire B.",
      location: "Collioure",
      rating: 5,
      text: "Professionnels à l'écoute et réactifs. Le traitement contre les fourmis a été très efficace.",
      date: "Il y a 2 mois",
      service: "Traitement fourmis"
    },
    {
      name: "Michel T.",
      location: "Céret",
      rating: 5,
      text: "Service de qualité. Intervention pour des frelons asiatiques réalisée avec professionnalisme.",
      date: "Il y a 3 semaines",
      service: "Destruction nid frelons"
    }
  ];

  return (
    <section id="avis" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Avis de nos clients
          </h2>
          <p className="text-lg text-muted-foreground">
            La satisfaction de nos clients est notre priorité
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="text-center bg-background rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-4xl font-bold text-primary">4.9</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Note Google</p>
          </div>
          
          <div className="text-center bg-background rounded-lg p-6 shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">247</div>
            <p className="text-sm text-muted-foreground">Avis clients</p>
          </div>
          
          <div className="text-center bg-background rounded-lg p-6 shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-muted-foreground">Recommandent nos services</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-4">
                {review.text}
              </p>

              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.location}</div>
                <div className="text-xs text-primary mt-2">{review.service}</div>
                <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
