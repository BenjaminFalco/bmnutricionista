import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=56965493119&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Tu salud no puede esperar
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Da el primer paso hacia una alimentación consciente y saludable. 
            Agenda tu consulta y comencemos a trabajar juntos en tus objetivos.
          </p>

          <Button
            variant="whatsapp"
            size="xl"
            onClick={handleWhatsAppClick}
            className="gap-3 mb-10"
          >
            <Phone className="w-5 h-5" />
            Agenda tu consulta por WhatsApp
          </Button>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-primary-foreground/80" />
              <h4 className="font-semibold mb-1">Ubicación</h4>
              <p className="text-sm text-primary-foreground/70">
                Chillán, Región del Ñuble
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5">
              <Clock className="w-6 h-6 mx-auto mb-2 text-primary-foreground/80" />
              <h4 className="font-semibold mb-1">Horarios</h4>
              <p className="text-sm text-primary-foreground/70">
                Lunes a Viernes, horarios flexibles
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5">
              <Phone className="w-6 h-6 mx-auto mb-2 text-primary-foreground/80" />
              <h4 className="font-semibold mb-1">Contacto</h4>
              <p className="text-sm text-primary-foreground/70">
                WhatsApp disponible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
