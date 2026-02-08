import logo from "@/assets/logo-barbara-mercado.jpg";

const BrandSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
            Identidad Profesional
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full scale-110 group-hover:scale-115 transition-transform duration-500" />
              <img
                src={logo}
                alt="Bárbara Mercado Nutricionista - Logo Oficial"
                className="relative w-40 h-40 md:w-48 md:h-48 object-contain rounded-full bg-white p-2 shadow-card"
              />
            </div>
          </div>
          
          <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
            Marca profesional que representa un enfoque clínico, humano y personalizado en nutrición.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
