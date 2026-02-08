import { GraduationCap, Award, Heart } from "lucide-react";
import barbaraPortrait from "@/assets/barbara-portrait.jpg";

const credentials = [
  {
    icon: GraduationCap,
    title: "Nutricionista Titulada",
    institution: "Universidad del Bío-Bío",
  },
  {
    icon: Award,
    title: "Diplomado en Nutrición Deportiva",
    institution: "Formación especializada",
  },
  {
    icon: Award,
    title: "Certificación ECNT",
    institution: "Enfermedades Crónicas No Transmisibles",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/30 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/20 rounded-full" />
              
              <img
                src={barbaraPortrait}
                alt="Bárbara Mercado - Nutricionista"
                className="relative w-full max-w-sm rounded-2xl shadow-elevated object-cover aspect-square"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
              Sobre mí
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Hola, soy Bárbara
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Soy nutricionista titulada de la Universidad del Bío-Bío, con especialización 
                en nutrición deportiva y manejo de enfermedades crónicas.
              </p>
              
              <p className="leading-relaxed">
                Mi pasión es acompañar a las personas en su camino hacia una alimentación 
                consciente y saludable. Creo firmemente que la nutrición no debe ser un 
                castigo ni una fuente de estrés, sino una herramienta de bienestar.
              </p>

              <p className="leading-relaxed">
                Trabajo con un enfoque educativo, donde mi objetivo es que cada paciente 
                entienda su cuerpo y aprenda a tomar decisiones alimentarias informadas, 
                para toda la vida.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-4">
              {credentials.map((credential, index) => (
                <div
                  key={credential.title}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {credential.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {credential.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mt-8 p-6 bg-accent/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                <h4 className="font-serif font-semibold text-foreground">
                  Mi filosofía
                </h4>
              </div>
              <p className="text-muted-foreground italic">
                "Cada persona es única, y su alimentación también debe serlo. 
                No existen fórmulas mágicas, solo dedicación, educación y acompañamiento genuino."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
