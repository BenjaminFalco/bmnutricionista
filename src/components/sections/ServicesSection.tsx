import { ClipboardCheck, Home, UserCheck, BookOpen, ArrowUpRight } from "lucide-react";

const WHATSAPP_BASE =
  "https://api.whatsapp.com/send/?phone=56965493119&text=";

type Service = {
  icon: any;
  title: string;
  description: string;
  badge?: string;
  idealFor?: string;
  waMessage: string;
};

const services: Service[] = [
  {
    icon: ClipboardCheck,
    title: "Consulta Nutricional Premium",
    badge: "Más solicitada",
    idealFor: "Si quieres un plan 100% aterrizado a tu rutina",
    description:
      "Evaluación completa de tu estado nutricional, análisis de hábitos alimentarios y diseño de un plan personalizado adaptado a tu vida real.",
    waMessage:
      "Hola Bárbara 😊 Quiero agendar una *Consulta Nutricional Premium*. ¿Tienes horas disponibles esta semana? Me gustaría que me cuentes qué incluye y qué debo llevar.",
  },
  {
    icon: Home,
    title: "Atención Presencial y a Domicilio",
    badge: "Flexible",
    idealFor: "Si necesitas comodidad o tiempos ajustados",
    description:
      "Flexibilidad total para acompañarte donde más te acomode. Consultas en clínica o en la comodidad de tu hogar.",
    waMessage:
      "Hola Bárbara 😊 Me interesa la *Atención Presencial / a Domicilio*. ¿En qué sectores atiendes y cómo funciona la modalidad a domicilio? Quiero agendar una evaluación.",
  },
  {
    icon: UserCheck,
    title: "Evaluación Nutricional Completa",
    badge: "Seguimiento",
    idealFor: "Si quieres medir progreso con claridad",
    description:
      "Medición de composición corporal, análisis de indicadores clínicos y seguimiento continuo de tu progreso.",
    waMessage:
      "Hola Bárbara 😊 Quiero una *Evaluación Nutricional Completa*. ¿Qué mediciones realizan y cada cuánto recomiendas control? Me gustaría agendar mi primera evaluación.",
  },
  {
    icon: BookOpen,
    title: "Educación Alimentaria Personalizada",
    badge: "Hábitos",
    idealFor: "Si buscas aprender sin extremos",
    description:
      "Aprende a alimentarte de forma consciente y sostenible. Sin prohibiciones extremas, con herramientas para toda la vida.",
    waMessage:
      "Hola Bárbara 😊 Me interesa *Educación Alimentaria Personalizada*. Quiero aprender a alimentarme mejor sin dietas extremas. ¿Cómo es el acompañamiento y cuántas sesiones recomiendas?",
  },
];

function getWhatsAppUrl(message: string) {
  return `${WHATSAPP_BASE}${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

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
          {services.map((service, index) => {
            const waUrl = getWhatsAppUrl(service.waMessage);

            return (
              <a
                key={service.title}
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="group block"
                aria-label={`Abrir WhatsApp para: ${service.title}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-elevated p-6 md:p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-serif font-semibold text-foreground">
                              {service.title}
                            </h3>
                            {service.badge && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-foreground/80">
                                {service.badge}
                              </span>
                            )}
                          </div>

                          {service.idealFor && (
                            <p className="text-sm text-muted-foreground mb-2">
                              <span className="font-medium text-foreground/80">
                                Ideal si:
                              </span>{" "}
                              {service.idealFor}
                            </p>
                          )}
                        </div>

                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Agendar por WhatsApp
                        <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground mt-2">
                        Se abrirá WhatsApp con un mensaje listo para enviar.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
