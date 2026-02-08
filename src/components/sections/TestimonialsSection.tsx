import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    role: "Paciente - Resistencia a la insulina",
    content:
      "Bárbara me ayudó a entender mi cuerpo de una manera que nunca antes lo había hecho. Por primera vez siento que estoy comiendo bien sin pasar hambre ni sentirme restringida.",
    rating: 5,
  },
  {
    name: "Roberto P.",
    role: "Paciente - Control de peso",
    content:
      "Después de años probando dietas, encontré en Bárbara un enfoque diferente. Me enseñó a comer de verdad, no a seguir reglas imposibles. He bajado 12 kilos y los mantengo.",
    rating: 5,
  },
  {
    name: "Patricia S.",
    role: "Paciente - Diabetes tipo 2",
    content:
      "Mi médico está impresionado con mis niveles de glucosa. La educación que me dio Bárbara sobre alimentación ha sido clave. Ahora sé qué comer y por qué.",
    rating: 5,
  },
  {
    name: "Fernando L.",
    role: "Paciente - Dislipidemia",
    content:
      "Excelente profesional. Muy cercana, explica todo con claridad y sus planes son realistas. Mi colesterol bajó significativamente en 3 meses.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-muted-foreground text-lg">
            Historias reales de personas que decidieron cuidar su salud con acompañamiento profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated p-6 md:p-8 hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-accent/40" />
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
