import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/barbara-portrait.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=56965493119&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-6">
                Nutricionista en Chillán
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Tu salud merece{" "}
                <span className="text-primary">atención real</span>,{" "}
                no dietas mágicas
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Acompañamiento nutricional profesional y personalizado. 
                Educación, cambios de hábitos sostenibles y resultados que perduran.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={handleWhatsAppClick}
                  className="gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Agenda tu consulta
                </Button>
                
                <Button
                  variant="heroOutline"
                  size="xl"
                  asChild
                >
                  <a href="#servicios" className="gap-2">
                    Conoce mis servicios
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Atención presencial y a domicilio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Universidad del Bío-Bío</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full" />
              
              <img
                src={heroImage}
                alt="Bárbara Mercado - Nutricionista"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-elevated object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
