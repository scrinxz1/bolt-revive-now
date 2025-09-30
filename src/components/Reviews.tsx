import { Star, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || count > 0) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target, count]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-black text-primary">
      {count}{suffix}
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Marie D.",
      location: "Perpignan Centre",
      rating: 5,
      text: "Intervention rapide et efficace pour un problème de rats dans mon restaurant. Équipe professionnelle et discrète. Je recommande !",
      date: "Il y a 2 semaines",
    },
    {
      name: "Thomas L.",
      location: "Canet-en-Roussillon",
      rating: 5,
      text: "Excellent service ! Problème de cafards résolu en une seule intervention. Prix très correct et technicien très compétent.",
      date: "Il y a 1 mois",
    },
    {
      name: "Sophie M.",
      location: "Saint-Cyprien",
      rating: 5,
      text: "Très satisfaite de la destruction du nid de frelons asiatiques dans mon jardin. Intervention sécurisée et garantie respectée.",
      date: "Il y a 3 semaines",
    },
    {
      name: "Jean-Pierre R.",
      location: "Argelès-sur-Mer",
      rating: 5,
      text: "Société sérieuse et réactive. Dératisation de ma maison effectuée rapidement avec suivi. Plus aucun problème depuis !",
      date: "Il y a 2 mois",
    },
    {
      name: "Isabelle P.",
      location: "Collioure",
      rating: 5,
      text: "Punaises de lit éliminées en deux passages. Technicien à l'écoute et de bon conseil. Service impeccable !",
      date: "Il y a 3 semaines",
    },
    {
      name: "Marc B.",
      location: "Céret",
      rating: 5,
      text: "Intervention d'urgence pour un nid de guêpes. Arrivés en moins d'une heure, problème réglé efficacement. Merci !",
      date: "Il y a 1 semaine",
    },
    {
      name: "Nathalie F.",
      location: "Perpignan Nord",
      rating: 5,
      text: "Professionnalisme remarquable pour traiter une invasion de fourmis. Résultat visible dès le lendemain. Parfait !",
      date: "Il y a 4 semaines",
    },
    {
      name: "Laurent G.",
      location: "Prades",
      rating: 5,
      text: "Très bon rapport qualité-prix. Dératisation complète avec garantie. Équipe sympathique et efficace. Je recommande vivement.",
      date: "Il y a 5 semaines",
    },
  ];

  return (
    <section id="avis" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-12">
          <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
            La satisfaction de nos clients témoigne de notre expertise
          </p>
        </div>

        {/* Statistiques */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* Note Google */}
              <div>
                <div className="text-5xl font-black text-gray-900 mb-3">
                  <AnimatedCounter target={4} />
                  <span>.5</span>
                  <span className="text-2xl text-gray-500">/5</span>
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-600">Note Google</div>
              </div>

              {/* Nombre d'avis */}
              <div>
                <div className="text-5xl font-black text-gray-900 mb-3">
                  <AnimatedCounter target={247} />
                  <span className="text-2xl text-gray-500">+</span>
                </div>
                <div className="text-sm font-semibold text-gray-600">Avis clients vérifiés</div>
              </div>

              {/* Recommandations */}
              <div>
                <div className="text-5xl font-black text-green-600 mb-3">
                  <AnimatedCounter target={98} />
                  <span className="text-2xl">%</span>
                </div>
                <div className="text-sm font-semibold text-gray-600">Recommandent nos services</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille d'avis */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Étoiles en haut */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Texte de l'avis */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 min-h-[100px]">
                "{review.text}"
              </p>

              {/* Info en bas */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-gray-900">{review.name}</span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{review.location}</span>
                  </div>
                  <span className="font-semibold text-green-600">
                    {index % 4 === 0 ? "Dératisation" : index % 4 === 1 ? "Destruction nid" : index % 4 === 2 ? "Désinsectisation" : "Punaises de lit"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
