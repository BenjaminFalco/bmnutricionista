import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Felipe Inostroza Ríos",
    role: "Paciente",
    content:
      "La verdad ha sido mi primera experiencia frente a un nutricionista y se ha pasado, muy detallista, explicando todo muy bien hasta que toda la información quede clara. Muy pero muy personalizado. Se ha tomado el tiempo adecuado para una entrevista, educar y enseñar hábitos alimenticios y todo lo que conlleva este cambio. Volvería? sí claro, y la recomiendo al 100%.",
    rating: 5,
  },
  {
    name: "Leslie",
    role: "Paciente",
    content:
      "Fui a mi consulta y fue una excelente experiencia. La Nutri Bárbara, se dedica a enseñar como debemos nutrir nuestro cuerpo y si es necesario solicita exámenes. Además, su consulta es extensa ya que explica todo con detalles para que aprendas a cuidar tu cuerpo con alimentos acorde a nuestro organismo. Su informe nutricional es muy completo y con su plan de alimentación jamas pasarás hambre. Recomiendo 1.000%, es una excelente profesional, carismática, empática y preocupada de tus avances.",
    rating: 5,
  },
  {
    name: "Javiera",
    role: "Paciente",
    content:
      "Me has ayudado muchísimo a cambiar mis hábitos 💚 y a entender que esto no es solo una dieta, sino un estilo de vida 🥗. Gracias por tu dedicación, por enseñar con paciencia y por ayudarme a tener una mejor relación con la comida 🍽️ a entender que esto se trata de equilibrio. Eres una gran profesional 🙌",
    rating: 5,
  },
  {
    name: "David",
    role: "Paciente",
    content:
      "Me ayudó a cambiar mis hábitos enseñando a alimentarme bien, y ya estoy viendo resultados de forma sana. Se nota que sabe mucho, pero además es super cercana y preocupada. La recomiendo 100%, sobre todo si estás recién empezando como yo.",
    rating: 5,
  },
  {
    name: "Sergio",
    role: "Paciente",
    content:
      "La señorita Bárbara como nutricionista no solo te guía en tu propósito, sino que también te educa y ayuda en la creación de hábitos alimenticios saludables. Siempre está atenta a las consultas que uno requiere y su forma de explicar es fácil de entender. Se preocupa igual de que uno esté avanzando, anímicamente te acompaña en el proceso. Al primer mes de control ya existen mejoras físicas y alimenticias. La verdad la experiencia ha sido 10/10.",
    rating: 5,
  },
  {
    name: "Angela Campos",
    role: "Paciente",
    content:
      "Excelente profesional y buenísima experiencia, Bárbara me explicó de una manera sencilla y clara, preocupándose de que entendiera bien como alimentarme. Me hizo un plan detallado y personalizado que realmente me sirve en mi día a día, realista e interiorizándose en lo que podría realizar incluyendo mis actividades laborales y como hacerlos coincidir con mi rutina. ¡Gran profesional y persona, recomiendo totalmente!",
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
              <div className="mb-4">
                <Quote className="w-8 h-8 text-accent/40" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>

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
