import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowUpRight, Calendar } from "lucide-react";
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

  const statsData = [
    { value: '30,000+', label: 'Participants' },
    { value: '100+', label: 'Speakers' },
    { value: '100+', label: 'Exhibitors' },
  ];

  const countdownData = [
    { value: String(remaining.days), label: 'Days' },
    { value: String(remaining.hours).padStart(2, '0'), label: 'Hours' },
    { value: String(remaining.minutes).padStart(2, '0'), label: 'Mins' },
    { value: String(remaining.seconds).padStart(2, '0'), label: 'Secs' },
  ];

  return (
    <>
      <section className="relative hero-section overflow-52hidden min-h-[56vh] md:min-h-[60vh] flex items-start">
        {/* Background */}
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
        {/* Gradient: darker left for text, lighter right to show venue photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" aria-hidden />

        {/* ── Two-column grid ── */}
        <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 pt-0 pb-6 md:pt-0 md:pb-8 transform -translate-y-6 sm:-translate-y-12 md:translate-y-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">

            {/* ── LEFT COLUMN ── */}
            <div className="flex-1 min-w-0">

              {/* Logo — bigger on desktop */}
              <div className="mb-4 md:mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}moniefest2026.svg`}
                  alt="Monie Fest 2026"
                  loading="eager"
                  fetchPriority="high"
                  className="logo-img block max-w-full h-auto w-64 sm:w-72 md:w-[460px] lg:w-[580px] xl:w-[640px]"
                />
              </div>

              {/* Mobile-only stat cards — shown above headline, hidden on desktop */}
              <div className="flex md:hidden items-stretch gap-2 mb-4">
                {statsData.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 bg-black/35 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
                  >
                    <div className="text-2xl font-extrabold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-white/70 font-bold uppercase tracking-widest mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Headline with green accent bar */}
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="w-1 h-6 md:h-7 rounded-full bg-primary shrink-0" aria-hidden />
                <h2 className="text-white text-[4px] sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight tracking-tight sm:tracking-widest uppercase whitespace-nowrap md:whitespace-normal">
                  Malaysia's Largest Financial Festival
                </h2>
              </div>

              {/* Countdown tiles with colon separators */}
              <div className="flex items-center gap-2 sm:gap-3 mb-5 md:mb-6">
                {countdownData.map((item, i) => (
                  <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 bg-black/85 rounded-xl flex flex-col items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.45)] border border-white/10">
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent leading-none">
                        {item.value}
                      </div>
                        <div className="text-[9px] sm:text-[10px] md:text-[11px] text-primary/80 uppercase tracking-widest mt-1">
                        {item.label}
                      </div>
                    </div>
                    {i < countdownData.length - 1 && (
                      <span className="text-primary/60 font-extrabold text-base sm:text-lg md:text-xl mb-3 select-none">:</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Date / Time / Venue */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="text-primary w-4 h-4 md:w-5 md:h-5 shrink-0" aria-hidden />
                  <span className="text-white font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl">11 &amp; 12 April 2026</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm sm:text-base md:text-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary w-4 h-4 md:w-5 md:h-5 shrink-0" aria-hidden />
                    <span className="text-white font-semibold">9AM – 9PM</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                  <MapPin className="text-primary w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" aria-hidden />
                  <span className="text-white font-medium leading-snug">
                    Malaysia International Trade &amp; Exhibition Centre (MITEC), Hall 2, North Entrance
                  </span>
                </div>
              </div>

              {/* CTA button — mobile only */}
              <Button
                onClick={() => {
                  if (onOpenEventbrite) return onOpenEventbrite();
                  try { window.open('https://www.eventbrite.com/e/1978806719165', '_blank', 'noopener'); } catch (e) {}
                }}
                className="md:hidden h-auto py-3 px-8 bg-gradient-to-r from-[#00C853] via-[#23D160] to-[#A7FF2A] text-black/90 shadow-[0_12px_30px_rgba(2,8,0,0.45)] rounded-full font-extrabold inline-flex items-center gap-3 text-base sm:text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black/10"
                aria-label="Get ticket"
              >
                <span className="tracking-wider">GET TICKET</span>
                <ArrowUpRight className="w-4 h-4 stroke-black/90" />
              </Button>


            </div>

            {/* ── RIGHT COLUMN — Stats box absolutely on right edge (desktop only) ── */}
            <div className="hidden md:flex flex-col items-start gap-0 shrink-0 absolute right-4 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/15 px-10 py-8 lg:px-14 lg:py-10">
              {statsData.map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent leading-none">
                    {stat.value}
                  </div>
                  <div className="text-white/80 font-bold uppercase tracking-[0.2em] text-2xl lg:text-3xl mt-2">
                    {stat.label}
                  </div>
                  {i < statsData.length - 1 && (
                    <div className="my-5 w-14 h-px bg-white/20" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
