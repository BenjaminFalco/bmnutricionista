import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/56912345678?text=Hola%20Bárbara,%20me%20gustaría%20agendar%20una%20consulta%20nutricional",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-elevated hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-fade-in group"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        ¡Escríbeme!
      </span>
    </button>
  );
};

export default WhatsAppButton;
