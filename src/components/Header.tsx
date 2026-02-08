import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-barbara-mercado.jpg";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#para-quien", label: "¿Para quién?" },
  { href: "#patologias", label: "Patologías" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#testimonios", label: "Testimonios" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/56912345678?text=Hola%20Bárbara,%20me%20gustaría%20agendar%20una%20consulta%20nutricional",
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Bárbara Mercado Nutricionista"
              className="h-12 w-12 rounded-full object-cover shadow-soft group-hover:shadow-card transition-shadow duration-300"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-serif font-semibold text-primary">
                Bárbara Mercado
              </span>
              <span className="block text-xs text-muted-foreground tracking-wide">
                Nutricionista
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsAppClick}
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-elevated animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/30 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick}
                className="mt-4 w-full"
              >
                <Phone className="w-4 h-4" />
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
