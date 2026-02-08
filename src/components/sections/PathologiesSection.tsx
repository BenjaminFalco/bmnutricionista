import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const pathologies = [
  {
    id: "obesidad",
    name: "Obesidad",
    icon: "⚖️",
    description: "La obesidad es una condición compleja que va más allá del peso. Requiere un abordaje integral que considere factores metabólicos, emocionales y conductuales.",
    approach: "Trabajamos juntos en identificar las causas de tu aumento de peso, establecer metas realistas y crear un plan alimentario que puedas mantener. Sin culpas, sin restricciones extremas.",
    education: "Aprenderás sobre porciones adecuadas, lectura de etiquetas, manejo del hambre emocional y estrategias para mantener los cambios a largo plazo.",
  },
  {
    id: "desnutricion",
    name: "Desnutrición",
    icon: "🍃",
    description: "La desnutrición puede afectar tu energía, sistema inmune y calidad de vida. Recuperar un estado nutricional óptimo requiere un plan cuidadoso y personalizado.",
    approach: "Evaluamos tu estado nutricional actual, identificamos deficiencias y diseñamos un plan para recuperar tu peso y vitalidad de forma segura y progresiva.",
    education: "Te enseñaré a seleccionar alimentos de alta densidad nutricional y a organizar tus comidas para asegurar una nutrición completa.",
  },
  {
    id: "resistencia-insulina",
    name: "Resistencia a la Insulina",
    icon: "🔬",
    description: "La resistencia a la insulina es una señal de alerta que, con los cambios adecuados, puede revertirse o controlarse efectivamente.",
    approach: "El manejo nutricional es fundamental. Trabajamos en el control de carbohidratos, selección de alimentos de bajo índice glicémico y mejora de la composición corporal.",
    education: "Entenderás cómo funcionan los carbohidratos en tu cuerpo y aprenderás a elegir los mejores para tu condición.",
  },
  {
    id: "diabetes",
    name: "Diabetes Mellitus",
    icon: "💉",
    description: "El manejo nutricional es un pilar fundamental en el tratamiento de la diabetes. Una alimentación adecuada puede mejorar significativamente tu control glicémico.",
    approach: "Diseñamos un plan alimentario que te permita controlar tus niveles de glucosa sin sentir que estás a dieta. Trabajamos en conjunto con tu equipo médico.",
    education: "Aprenderás sobre conteo de carbohidratos, índice glicémico y cómo la alimentación afecta tus niveles de azúcar.",
  },
  {
    id: "hipertension",
    name: "Hipertensión",
    icon: "❤️",
    description: "La alimentación juega un rol crucial en el control de la presión arterial. Cambios estratégicos pueden complementar tu tratamiento médico.",
    approach: "Implementamos la dieta DASH adaptada a tus gustos y cultura alimentaria, con énfasis en reducción de sodio y aumento de potasio y magnesio.",
    education: "Conocerás fuentes ocultas de sodio, alternativas para condimentar y alimentos que favorecen el control de tu presión.",
  },
  {
    id: "dislipidemia",
    name: "Dislipidemia",
    icon: "🩸",
    description: "El colesterol y triglicéridos elevados responden muy bien a cambios en la alimentación. Es una de las condiciones donde la nutrición tiene mayor impacto.",
    approach: "Trabajamos en el tipo de grasas que consumes, incorporación de fibra soluble y alimentos cardioprotectores adaptados a tu estilo de vida.",
    education: "Distinguirás entre grasas buenas y malas, conocerás alimentos que ayudan a bajar el colesterol y aprenderás a leer etiquetas nutricionales.",
  },
  {
    id: "hipotiroidismo",
    name: "Hipotiroidismo",
    icon: "🦋",
    description: "El hipotiroidismo afecta el metabolismo y puede dificultar el control de peso. Una nutrición adecuada optimiza el funcionamiento de tu tiroides.",
    approach: "Diseñamos un plan que considere las interacciones con tu medicamento, incorpore nutrientes clave como selenio y yodo, y te ayude a mantener un peso saludable.",
    education: "Conocerás qué alimentos favorecen o interfieren con tu tiroides y cómo organizar tus comidas respecto a tu medicación.",
  },
];

const PathologiesSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>("obesidad");

  return (
    <section id="patologias" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Tratamiento de Patologías
          </h2>
          <p className="text-muted-foreground text-lg">
            Acompañamiento nutricional especializado para condiciones que requieren 
            un manejo profesional y personalizado.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {pathologies.map((pathology) => (
            <div
              key={pathology.id}
              className={`card-elevated overflow-hidden transition-all duration-300 ${
                expandedId === pathology.id ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === pathology.id ? null : pathology.id)
                }
                className="w-full p-5 md:p-6 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{pathology.icon}</span>
                  <span className="font-serif font-semibold text-lg text-foreground">
                    {pathology.name}
                  </span>
                </div>
                {expandedId === pathology.id ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {expandedId === pathology.id && (
                <div className="px-5 md:px-6 pb-6 animate-fade-in">
                  <div className="border-t border-border pt-5 space-y-4">
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        {pathology.description}
                      </p>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Mi enfoque
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {pathology.approach}
                      </p>
                    </div>

                    <div className="bg-accent/10 rounded-xl p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        Educación
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {pathology.education}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-sm text-muted-foreground italic">
            Nota: El tratamiento nutricional complementa pero no reemplaza el tratamiento médico. 
            Trabajo en coordinación con tu equipo de salud para lograr los mejores resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PathologiesSection;
