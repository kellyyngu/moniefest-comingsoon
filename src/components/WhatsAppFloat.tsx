import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import EventbriteModal from "@/components/EventbriteModal";

const WhatsAppFloat = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSccASbfJveT-OWwXSjLi1dkbBjp-pxMoa1l1Xp0yBqDPZi_-g/viewform";
  const EVENTBRITE_ID = "1978806719165";
  const [open, setOpen] = useState(false);

  const handleOpenEventbrite = () => {
    // Open the on-site Eventbrite modal only — do not open a new tab.
    setOpen(true);
  };

  return (
    <div className="fixed right-2 md:right-3 bottom-2 md:bottom-4 z-50 flex flex-col gap-2 animate-fade-in floating-cta">
      {/* Promo + Exhibitor group: placed a bit lower on mobile so it sits below the hero CTA */}
      <div className="w-28 sm:w-44 rounded-xl shadow-xl flex items-center justify-center self-end md:self-end md:translate-y-2 animate-float">
        <button onClick={handleOpenEventbrite} aria-label="Register Now" className="w-full p-0 bg-transparent rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
          <img src="/optimized/floatingButton.png" alt="Register Now" className="w-full h-auto object-cover rounded-xl" loading="eager" fetchPriority="high" />
        </button>
      </div>

      <div className="flex justify-end w-full animate-float self-end">
        {/* Exhibitor button moved into the Exhibitors section per request */}
      </div>

      <EventbriteModal open={open} onClose={() => setOpen(false)} eventId={EVENTBRITE_ID} />
    </div>
  );
};

export default WhatsAppFloat;
