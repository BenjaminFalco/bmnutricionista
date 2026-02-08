import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo-barbara-mercado.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Bárbara Mercado Nutricionista"
                className="h-14 w-14 rounded-full object-cover bg-white p-1"
              />
              <div>
                <span className="text-xl font-serif font-semibold">
                  Bárbara Mercado
                </span>
                <span className="block text-sm text-primary-foreground/80">
                  Nutricionista
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 text-center md:text-left max-w-xs">
              Atención nutricional profesional, cercana y personalizada en Chillán.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-serif font-semibold text-lg">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <a
                href="https://api.whatsapp.com/send/?phone=56965493119&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +56 9 1234 5678
              </a>
              <a
                href="mailto:contacto@barbaramercado.cl"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contacto@barbaramercado.cl
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Chillán, Chile
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-serif font-semibold text-lg">Sígueme</h4>
            <a
              href="https://instagram.com/barbaramercadonutricionista"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @barbaramercadonutricionista
            </a>
            <div className="flex flex-col gap-2 mt-2 text-sm text-primary-foreground/70">
              <a href="#servicios" className="hover:text-primary-foreground transition-colors">
                Servicios
              </a>
              <a href="#sobre-mi" className="hover:text-primary-foreground transition-colors">
                Sobre mí
              </a>
              <a href="#patologias" className="hover:text-primary-foreground transition-colors">
                Patologías
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Bárbara Mercado Nutricionista. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
