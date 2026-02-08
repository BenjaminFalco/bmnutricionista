import { Activity, TrendingUp, Scale, FileText } from "lucide-react";

const metrics = [
  {
    icon: Scale,
    name: "Peso y estatura",
    description: "Base para calcular tu IMC y establecer objetivos",
  },
  {
    icon: Activity,
    name: "Masa muscular",
    description: "Indicador clave de tu salud metabólica",
  },
  {
    icon: TrendingUp,
    name: "Porcentaje de grasa",
    description: "Más relevante que el peso total",
  },
  {
    icon: FileText,
    name: "Informe completo",
    description: "Documento detallado de tu evaluación",
  },
];

const BodyCompositionSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground">
                  Evaluación de Composición Corporal
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.name}
                    className="bg-secondary/50 rounded-xl p-4 text-center hover:bg-secondary transition-colors animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      {metric.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
              Evaluación Completa
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Más allá del peso: conoce tu cuerpo
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                La báscula solo cuenta una parte de la historia. La composición corporal 
                te revela qué está pasando realmente en tu cuerpo: cuánto es músculo, 
                cuánto es grasa y cómo está distribuido.
              </p>
              
              <p className="leading-relaxed">
                Esta información es fundamental para diseñar un plan nutricional efectivo 
                y medir tu progreso de manera objetiva, más allá de los kilos.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Informe personalizado
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Recibirás un documento completo con todos tus indicadores, 
                    explicados de forma simple y clara.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📈</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Seguimiento del progreso
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Comparamos tus mediciones en cada consulta para ver tu evolución 
                    real y ajustar el plan según sea necesario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyCompositionSection;
