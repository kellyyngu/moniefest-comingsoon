import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowUpRight, Users, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
// Background image served from public/optimized (WebP)
const heroBg = '/optimized/mitec.webp';

type HeroProps = {
  onOpenEventbrite?: () => void;
};

const Hero = ({ onOpenEventbrite }: HeroProps) => {
  // Countdown target (change if needed)
  const targetDate = new Date("2026-04-11T10:00:00");
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate.getTime() - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setRemaining({ days, hours, minutes, seconds });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="relative hero-section flex items-start justify-start overflow-hidden pt-0 sm:pt-4 md:pt-8 min-h-[56vh] md:min-h-[44vh]">
      {/* Background Image with Overlay */}
      <img
        src={heroBg}
        alt="Monie Fest background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        style={{ filter: 'brightness(1.0) contrast(1.05) saturate(0.95)' }}
      />
      {/* dark overlay to deepen hero image for better text contrast */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {/* Content (follow Programme styling) */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="max-w-none md:max-w-7xl animate-fade-in mt-0 md:mt-6 lg:mt-10 text-left">
          <div className="block w-full pr-0 sm:pr-8 md:pr-10 pl-0">
            <div className="flex justify-start mb-4">
              <img
                src={`${import.meta.env.BASE_URL}moniefest2026.svg`}
                alt="Monie Fest 2026"
                className="logo-img block max-w-full h-auto w-80 sm:w-96 md:w-[460px] lg:w-[800px] xl:w-[580px]"
              />
            </div>

            <h2 className="text-xl md:text-2xl font-semibold mb-3 leading-tight text-navy-deep">
              THE LARGEST FINANCIAL FESTIVAL IN MALAYSIA
            </h2>

            <div className="flex flex-col gap-2 items-start justify-start mb-4 hero-detail text-base md:text-lg">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary w-5 h-5 md:w-6 md:h-6 flex-shrink-0" aria-hidden />
                  <span className="text-navy-deep text-lg md:text-2xl">11 &amp; 12 April 2026</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-primary w-5 h-5 md:w-6 md:h-6 flex-shrink-0" aria-hidden />
                  <span className="text-navy-deep text-lg md:text-2xl">10AM - 9PM</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-primary w-5 h-5 md:w-6 md:h-6 flex-shrink-0" aria-hidden />
                  <span className="text-navy-deep text-lg md:text-2xl">Malaysia International Trade &amp; Exhibition Centre (MITEC), Hall 2, North Entrance</span>
                </div>
              </div>
            </div>

            {/* Countdown timer above CTA - green themed cards */}
            <div className="flex flex-col items-start w-full">
              <div className="mb-4">
                <div className="inline-flex items-center gap-3 p-2 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-20 md:w-24 lg:w-28 h-16 md:h-20 bg-black/90 rounded-xl flex flex-col items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.28)] border border-white/6">
                      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent leading-none">{remaining.days}</div>
                      <div className="text-[11px] bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent uppercase tracking-wider mt-1">Days</div>
                    </div>

                    <div className="w-16 md:w-20 h-16 md:h-20 bg-black/90 rounded-xl flex flex-col items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.28)] border border-white/6">
                      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent leading-none">{String(remaining.hours).padStart(2, '0')}</div>
                      <div className="text-[11px] bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent uppercase tracking-wider mt-1">Hours</div>
                    </div>

                    <div className="w-16 md:w-20 h-16 md:h-20 bg-black/90 rounded-xl flex flex-col items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.28)] border border-white/6">
                      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent leading-none">{String(remaining.minutes).padStart(2, '0')}</div>
                      <div className="text-[11px] bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent uppercase tracking-wider mt-1">Minutes</div>
                    </div>

                    <div className="w-16 md:w-20 h-16 md:h-20 bg-black/90 rounded-xl flex flex-col items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.28)] border border-white/6">
                      <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent leading-none">{String(remaining.seconds).padStart(2, '0')}</div>
                      <div className="text-[11px] bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent uppercase tracking-wider mt-1">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button kept as-is (moved down) */}
              <div>
                <button onClick={() => onOpenEventbrite?.()} aria-label="Get ticket" className="cta-pill relative inline-flex items-center gap-4 w-auto max-w-[240px] sm:w-auto justify-center motion-safe:animate-float whitespace-nowrap">
                  <span className="cta-pill-label text-black font-bold" style={{ fontWeight: 700 }}>GET TICKET</span>
                  <span className="cta-pill-icon brand-bg p-3 rounded-full flex items-center justify-center">
                    <ArrowUpRight className="text-black" style={{ color: '#000' }} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
