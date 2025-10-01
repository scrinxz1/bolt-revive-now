import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  prenom: z.string().min(1, "Le prénom est requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(1, "Le message est requis"),
});

type FormData = z.infer<typeof formSchema>;

const Devis = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Demande de devis:", data);
      
      // Déclencher l'événement de conversion Google Ads
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'ads_conversion_Demande_de_devis_1', {});
      }
      
      toast({
        title: "Merci, votre demande a bien été envoyée.",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Veuillez vérifier les champs demandés.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
              ← Retour à l'accueil
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Devis gratuit
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Remplissez le formulaire ci-dessous pour recevoir votre devis gratuit
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nom">Nom *</Label>
                <Input
                  id="nom"
                  {...register("nom")}
                  className={errors.nom ? "border-red-500" : ""}
                />
                {errors.nom && (
                  <p className="text-sm text-red-500">{errors.nom.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom *</Label>
                <Input
                  id="prenom"
                  {...register("prenom")}
                  className={errors.prenom ? "border-red-500" : ""}
                />
                {errors.prenom && (
                  <p className="text-sm text-red-500">{errors.prenom.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  {...register("message")}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full text-lg py-6"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Devis;
