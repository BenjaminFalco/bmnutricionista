import { Check } from "lucide-react";

const targetAudience = [
  {
    title: "Personas con patologías crónicas",
    description: "Diabetes, hipertensión, resistencia a la insulina u otras condiciones que requieren cuidado nutricional especializado.",
  },
  {
    title: "Quienes desean bajar o subir de peso",
    description: "De forma saludable, progresiva y sostenible, sin restricciones extremas ni dietas milagro.",
  },
  {
    title: "Quienes buscan mejorar sus hábitos",
    description: "Personas que quieren aprender a comer mejor, organizar su alimentación y sentirse bien con lo que comen.",
  },
  {
    title: "Personas cansadas de dietas restrictivas",
    description: "Si has probado todo y nada funciona a largo plazo, es momento de un enfoque diferente basado en educación.",
  },
];

const TargetAudienceSection = () => {
  return (
    <section id="para-quien" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
              ¿Para quién?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              ¿Este servicio es para ti?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Mi consulta está diseñada para personas que buscan cambios reales y duraderos, 
              con acompañamiento profesional y sin atajos que no funcionan.
            </p>

            <div className="space-y-5">
              {targetAudience.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🥗</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Nutrición basada en evidencia
                </h3>
                <p className="text-muted-foreground">
                  Sin modas ni tendencias pasajeras. Recomendaciones respaldadas por ciencia 
                  y adaptadas a tu realidad.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <span className="text-2xl font-bold text-primary">+500</span>
                  <p className="text-sm text-muted-foreground mt-1">Pacientes atendidos</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <span className="text-2xl font-bold text-primary">5+</span>
                  <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
