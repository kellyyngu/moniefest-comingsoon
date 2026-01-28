import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "+60142690129";
  const message = "Hi! I'm interested in joining MonieFest 2026 as an exhibitor.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 animate-fade-in">
      {/* WhatsApp Button with text */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          className="h-auto py-3 px-5 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 rounded-full"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold text-sm md:text-base">
            Join as Exhibitor
          </span>
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
