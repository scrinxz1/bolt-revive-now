import { Star, Users, CheckCircle, Award } from "lucide-react";
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
    if (!isVisible) return;

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
  }, [isVisible, target]);

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
    <section id="avis" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Google-Style Stats Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="text-white">Avis </span>
            <span className="gradient-text">Clients</span>
          </h2>
          
          {/* Google-Style Rating Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-yellow-400 min-w-[200px]">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center mr-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-4xl font-black text-gray-900 mb-1">
                <AnimatedCounter target={4} />
                <span>.9/5</span>
              </div>
              <div className="text-sm font-semibold text-gray-600">Note Google</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-green-400 min-w-[200px]">
              <div className="text-4xl font-black text-primary mb-1">
                <AnimatedCounter target={247} suffix="+" />
              </div>
              <div className="text-sm font-semibold text-gray-600">Avis clients</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-400 min-w-[200px]">
              <div className="text-4xl font-black text-blue-600 mb-1">
                <AnimatedCounter target={98} suffix="%" />
              </div>
              <div className="text-sm font-semibold text-gray-600">Recommandent</div>
            </div>
          </div>

          {/* Stats Section with Animated Counters */}
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter target={500} suffix="+" />
              <div className="text-gray-600 font-semibold mt-2">Clients Satisfaits</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter target={100} suffix="%" />
              <div className="text-gray-600 font-semibold mt-2">Taux de Réussite</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <div className="flex items-center justify-center gap-1">
                <AnimatedCounter target={5} />
                <span className="text-4xl md:text-5xl font-black text-primary">.0</span>
              </div>
              <div className="text-gray-600 font-semibold mt-2">Note Moyenne</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <AnimatedCounter target={15} suffix="+" />
              <div className="text-gray-600 font-semibold mt-2">Années d'Expérience</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid - Google Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-3">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.location}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-3 space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-gray-400 ml-2">{review.date}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
