import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowUpRight, Users, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
// Background images served from public/optimized (WebP)

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
      <section className="relative hero-section flex items-center justify-center overflow-hidden pt-0 sm:pt-4 md:pt-8 min-h-[56vh] md:min-h-[44vh]">
      {/* Responsive background: use DESKTOP.png for >=768px, MOBILE.png for smaller */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none">
        <source media="(min-width: 768px)" srcSet={`${import.meta.env.BASE_URL}optimized/DESKTOP.png`} />
        <img
          src={`${import.meta.env.BASE_URL}optimized/MOBILE.png`}
          alt="Monie Fest background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          style={{ filter: 'brightness(1.0) contrast(1.05) saturate(0.95)' }}
        />
      </picture>
      {/* dark overlay to deepen hero image for better text contrast */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {/* Content (follow Programme styling) */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="max-w-none md:max-w-7xl animate-fade-in mt-0 md:mt-6 lg:mt-10 text-left md:text-center">
          <div className="block w-full pr-0 sm:pr-8 md:pr-10 pl-0">
            <div className="flex justify-start md:justify-center mb-4">
              <img
                src={`${import.meta.env.BASE_URL}moniefest2026.svg`}
                alt="Monie Fest 2026"
                loading="eager"
                fetchPriority="high"
                className="logo-img block max-w-full h-auto w-72 sm:w-80 md:w-[380px] lg:w-[600px] xl:w-[480px]"
              />
            </div>
            
            <h2 className="text-left md:text-center text-xl md:text-2xl font-normal md:font-bold mb-3 leading-tight text-navy-deep">
              THE LARGEST FINANCIAL FESTIVAL IN MALAYSIA
            </h2>

            {/* Countdown timer (moved below headline) */}
            <div className="flex flex-col items-start md:items-center w-full mb-4">
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
            </div>

            <div className="flex flex-col gap-2 items-start md:items-center justify-start md:justify-center mb-4 hero-detail text-base md:text-lg">
              <div className="flex flex-col gap-3 items-start md:items-center text-left md:text-center">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 justify-start md:justify-center">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary w-5 h-5 md:w-6 md:h-6 flex-shrink-0" aria-hidden />
                    <span className="text-white text-lg md:text-2xl font-normal md:font-bold">11 &amp; 12 April 2026</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="text-primary w-5 h-5 md:w-6 md:h-6 flex-shrink-0" aria-hidden />
                    <span className="text-white text-lg md:text-2xl font-normal md:font-bold">10AM - 9PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-start md:justify-center">
                  <MapPin className="text-primary w-5 h-5 md:w-6 md:h-6 flex-shrink-0" aria-hidden />
                  <span className="text-navy-deep text-lg md:text-2xl font-normal md:font-bold">Malaysia International Trade &amp; Exhibition Centre (MITEC), Hall 2, North Entrance</span>
                </div>
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
