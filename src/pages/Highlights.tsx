import React, { useState } from "react";
import Footer from "@/components/Footer";
import { Sparkles, Gift, Trophy, Star } from "lucide-react";
import heroBg from "/optimized/highlightsBanner.webp";

type Highlight = {
  number: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  noCrop?: boolean;
  icon: React.ElementType;
};

const highlights: Highlight[] = [
  {
    number: 1,
    title: "Special Giveaways",
    description:
      "Exciting giveaways and prizes throughout the event. Stay tuned for more details on how to participate.",
    image: "/optimized/giveaway.webp",
    link: "https://benchxcapital-my.sharepoint.com/:i:/p/angelica_revin/IQA7czQI9IXSQKoA3APpJmvlAa6HHCZgiD4IBJIYBjMsJ0M?e=D5lHVN",
    noCrop: true,
    icon: Gift,
  },
  {
    number: 2,
    title: "Bursa Malaysia",
    description: "Official Bursa Malaysia banner.",
    image: "/optimized/bursaBanner.webp",
    link: "https://my.bursamalaysia.com/?register=true&utm_source=moniefestweb&utm_campaign=monie_fest&utm_id=monie_fest",
    noCrop: true,
    icon: Trophy,
  },
  {
    number: 3,
    title: "FSM",
    description: "FSM banner and partner highlight.",
    image: "/optimized/FSMbanner.jpg",
    link: "https://bit.ly/3NdxX1S",
    noCrop: true,
    icon: Sparkles,
  },
  {
    number: 4,
    title: "webull Highlights",
    description: "Special highlights brought to you by WeBull.",
    image: "/optimized/webullHighlights.png",
    link: "https://www.webull.com.my/ko-yield/1719988436381-07d7bf?inviteCode=HZG2oy&invite_source=MKTB-MY-KOL&inviteSource=MKTB-MY-KOL&source=monie&irclickid=monie_HZG2oy",
    noCrop: true,
    icon: Sparkles,
  },
  {
    number: 5,
    title: "CGSi",
    description: "CGSi partner banner",
    image: "/optimized/CGSiBanner.jpg",
    noCrop: true,
    icon: Sparkles,
  },
  {
    number: 6,
    title: "Phillip Promotions",
    description: "Check out Phillip Capital's latest promotion.",
    image: "/optimized/phillipCapitalPromotionArtwork.png",
    link: "https://www.phillip.com.my/promotions/drive-your-bmd-trades-further-with-phillip/",
    noCrop: true,
    icon: Gift,
  },
  {
    number: 7,
    title: "MicroLEAP Lucky Draw",
    description:
      "Stand a chance to win exclusive prizes from microLEAP and be part of Malaysia's premier financial festival.",
    image: "/optimized/microleap_visual.webp",
    noCrop: true,
    icon: Sparkles,
  },
  {
    number: 8,
    title: "Public Mutual",
    description: "Public Mutual banner",
    image: "/optimized/publicMutualBanner.png",
    link: "https://www.publicmutual.com.my/pmb/goal-rush-2026",
    noCrop: true,
    icon: Trophy,
  },
];

const HighlightCard: React.FC<{ highlight: Highlight; index: number }> = ({
  highlight,
  index,
}) => {
  const Icon = highlight.icon;
  const isEven = index % 2 === 0;
  // Preserve mobile and small sizes; for the first item (giveaway) increase size
  let heightClass = highlight.noCrop
    ? "h-[220px] sm:h-[420px] lg:h-[360px]"
    : "h-[200px] sm:h-[360px] lg:h-[320px]";

  // If this is the giveaway (index 0) make it larger so it stands out
  if (index === 0) {
    heightClass = highlight.noCrop
      ? "h-[300px] sm:h-[520px] lg:h-[720px]"
      : "h-[260px] sm:h-[480px] lg:h-[560px]";
  }

  return (
    <div
      className={`group relative overflow-visible transition-all duration-500`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      {/* Clean card: white panel, centered, subtle shadow and consistent padding */}
      <div className={`relative bg-transparent rounded-lg overflow-hidden w-full`}>
        {/* Image section: tighter padding and minimal white so images fill more space */}
        <div className={`w-full flex items-center justify-center p-0 sm:p-2`}>
          <div className={`w-full flex items-center justify-center`}>
            <div
              className={`w-full overflow-hidden rounded-md transition-transform duration-200 group-hover:scale-105 ${heightClass}`}
              style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.18)" }}
            >
              {highlight.link ? (
                <a
                  href={highlight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={highlight.title}
                >
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className={`${highlight.noCrop ? "object-contain object-center" : "object-cover object-center"} w-full h-full`}
                    loading="eager"
                    style={{ imageRendering: "auto" }}
                  />
                </a>
              ) : (
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className={`${highlight.noCrop ? "object-contain object-center" : "object-cover object-center"} w-full h-full`}
                  loading="eager"
                  style={{ imageRendering: "auto" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HighlightsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[28vh] sm:min-h-[36vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg}${import.meta.env.DEV ? "?t=" + Date.now() : ""})`,
          }}
        >
          <div className="absolute inset-0 hero-gradient opacity-60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-12 sm:pt-16 pb-8 sm:pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight max-w-3xl mx-auto leading-tight drop-shadow-xl">
            Highlights
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-primary-foreground/90 text-center max-w-3xl mx-auto px-4">
            Discover the exciting features and exclusive prizes at Monie Fest
            2026
          </p>
        </div>
      </section>

      <main className="pt-4 sm:pt-6 pb-4 sm:pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Highlights Grid: first item full-width, subsequent items two-per-row */}
          <div className="mb-4">
            {highlights && highlights.length > 0 && (
              <>
                {/* First (giveaway) — full width */}
                <div className="mb-0">
                  <HighlightCard
                    key={highlights[0].number}
                    highlight={highlights[0]}
                    index={0}
                  />
                </div>

                {/* Remaining collaterals — two columns on sm+ */}
                {highlights.length > 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1">
                    {highlights.slice(1).map((highlight, i) => (
                      <HighlightCard
                        key={highlight.number}
                        highlight={highlight}
                        index={i + 1}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* More to Come Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div
                className="rounded-xl bg-gradient-to-br from-primary/20 via-emerald-500/10 to-primary/20 p-8 text-center shadow-lg border border-primary/20 backdrop-blur-sm"
                style={{
                  animation: "fadeInUp 0.6s ease-out 0.45s both",
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                  More Highlights Coming Soon
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
                  We're adding more exciting highlights and surprises. Stay
                  tuned for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Keyframes for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HighlightsPage;
