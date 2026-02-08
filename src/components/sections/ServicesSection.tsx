import { ClipboardCheck, Home, UserCheck, BookOpen } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Consulta Nutricional Premium",
    description:
      "Evaluación completa de tu estado nutricional, análisis de hábitos alimentarios y diseño de un plan personalizado adaptado a tu vida real.",
  },
  {
    icon: Home,
    title: "Atención Presencial y a Domicilio",
    description:
      "Flexibilidad total para acompañarte donde más te acomode. Consultas en clínica o en la comodidad de tu hogar.",
  },
  {
    icon: UserCheck,
    title: "Evaluación Nutricional Completa",
    description:
      "Medición de composición corporal, análisis de indicadores clínicos y seguimiento continuo de tu progreso.",
  },
  {
    icon: BookOpen,
    title: "Educación Alimentaria Personalizada",
    description:
      "Aprende a alimentarte de forma consciente y sostenible. Sin prohibiciones extremas, con herramientas para toda la vida.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Qué puedo ofrecerte
          </h2>
          <p className="text-muted-foreground text-lg">
            Atención nutricional integral con enfoque en educación, acompañamiento y resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-elevated p-6 md:p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
