
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
// Background served from public/optimized (WebP)
const heroBg = '/optimized/speakerBanner.webp';

type Speaker = { name: string; title?: string; company?: string; photo?: string; nowrapName?: boolean };

const speakers: Speaker[] = [
  { name: "Lim Pinn Yang", title: "Chief Executive Officer", company: "Foodie Media Berhad", photo: '/optimized/pinnyang.webp' },
  { name: "George Poh, CFP®", title: "Chief Executive Officer", company: "Spire Digital Sdn. Bhd.", photo: '/optimized/george.webp', nowrapName: true },
  { name: "Jeroni Khoo", title: "Deputy Country Manager", company: "Luno Malaysia", photo: '/optimized/jeroni.jpg' },
  { name: "Sean Freer", title: "Director, Global Exchange Indices", company: "S&P Dow Jones Indices (S&P DJI)", photo: '/optimized/seanFreer.jpg' },
];

const SpeakerCard = ({ s }: { s: Speaker }) => (
  <div className="w-full max-w-sm md:max-w-md bg-card rounded-lg p-5 md:p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col items-center text-center h-80 md:h-96 mx-2 overflow-hidden">
    {/* Avatar area - responsive size (smaller on mobile) */}
    <div className="w-full flex-none flex items-center justify-center pt-3 md:pt-4">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-muted flex items-center justify-center">
          {s.photo ? (
            <img src={s.photo} alt={s.name} loading="eager" decoding="async" className="w-full h-full object-cover object-center" />
          ) : (
          <span className="text-primary-foreground font-bold text-2xl">{s.name.split(" ").map((n) => n[0]).slice(0,2).join("")}</span>
        )}
      </div>
    </div>

    {/* Text area - fixed block so names/titles/companies align */}
    <div className="flex-1 w-full flex items-center justify-center px-4">
      <div className="w-full max-w-xs md:max-w-sm text-center">
          <p className={`font-semibold text-base md:text-xl text-navy-deep mb-1 ${s.nowrapName ? 'md:whitespace-nowrap break-words' : 'break-words'}`}>{s.name}</p>
        {s.title && <p className="text-xs md:text-sm text-primary italic mb-1 leading-tight">{s.title}</p>}
        {s.company && <p className="text-sm md:text-sm text-foreground">{s.company}</p>}
      </div>
    </div>
  </div>
);

const SpeakersPage = () => {
  const [mobileCols, setMobileCols] = useState<number>(() => {
    try {
      const v = localStorage.getItem('speakersMobileCols');
      return v ? Number(v) : 1;
    } catch (e) {
      return 1;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('speakersMobileCols', String(mobileCols));
    } catch (e) {}
  }, [mobileCols]);

  const gridColsClass = mobileCols === 2
    ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

  return (
    <div className="min-h-screen bg-background">
      

      <section className="relative min-h-[44vh] flex items-center justify-center">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 hero-gradient opacity-60" />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white text-center tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-xl">
            Speakers
          </h1>
          <p className="mt-3 text-sm md:text-lg text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Meet the experts and leaders joining our panels and sessions. Their combined experience spans research, asset management and corporate leadership.
          </p>
        </div>
      </section>

      <main className="pt-8 pb-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-end gap-2 mb-6 md:hidden">
                <div className="inline-flex items-center gap-2">
                  <button
                    aria-label="One speaker per row"
                    onClick={() => setMobileCols(1)}
                    className={`px-3 py-1 rounded-md text-sm border ${mobileCols === 1 ? 'bg-primary text-black font-semibold border-primary' : 'border-white/10 text-white bg-transparent hover:bg-white/5'}`}>
                    1 per row
                  </button>
                  <button
                    aria-label="Two speakers per row"
                    onClick={() => setMobileCols(2)}
                    className={`px-3 py-1 rounded-md text-sm border ${mobileCols === 2 ? 'bg-primary text-black font-semibold border-primary' : 'border-white/10 text-white bg-transparent hover:bg-white/5'}`}>
                    2 per row
                  </button>
                </div>
              </div>

              <div className={`max-w-5xl mx-auto grid ${gridColsClass} gap-8 items-stretch justify-items-center`}>
                {speakers.map((s, i) => (
                  <SpeakerCard key={i} s={s} />
                ))}
              </div>
            </div>
          </main>

      <Footer />
    </div>
  );
};

export default SpeakersPage;
