import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Marie D.",
      location: "Paris 15ème",
      rating: 5,
      text: "Intervention rapide et efficace pour un problème de rats dans mon restaurant. Équipe professionnelle et discrète. Je recommande !",
      date: "Il y a 2 semaines",
    },
    {
      name: "Thomas L.",
      location: "Caen",
      rating: 5,
      text: "Excellent service ! Problème de cafards résolu en une seule intervention. Prix très correct et technicien très compétent.",
      date: "Il y a 1 mois",
    },
    {
      name: "Sophie M.",
      location: "Paris 18ème",
      rating: 5,
      text: "Très satisfaite de la destruction du nid de frelons asiatiques dans mon jardin. Intervention sécurisée et garantie respectée.",
      date: "Il y a 3 semaines",
    },
    {
      name: "Jean-Pierre R.",
      location: "Calvados",
      rating: 5,
      text: "Société sérieuse et réactive. Dératisation de ma maison effectuée rapidement avec suivi. Plus aucun problème depuis !",
      date: "Il y a 2 mois",
    },
  ];

  return (
    <section id="avis" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Avis </span>
            <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">
            La satisfaction de nos clients est notre priorité.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">({reviews.length} avis)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">{review.text}</p>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
