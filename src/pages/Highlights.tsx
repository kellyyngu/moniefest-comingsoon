import React, { useState } from "react";
import Footer from "@/components/Footer";
import { Sparkles, Gift, Trophy, Star } from "lucide-react";
import heroBg from "/optimized/highlightsBanner.webp";

type Highlight = {
  number: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

const highlights: Highlight[] = [
  {
    number: 1,
    title: "MicroLEAP Lucky Draw",
    description: "Stand a chance to win exclusive prizes from microLEAP and be part of Malaysia's premier financial festival.",
    image: "/optimized/microleap_visual.webp",
    icon: Sparkles,
  },
  {
    number: 2,
    title: "Special Giveaways",
    description: "Exciting giveaways and prizes throughout the event. Stay tuned for more details on how to participate.",
    image: "/optimized/giveaway.webp",
    icon: Gift,
  },
];

const HighlightCard: React.FC<{ highlight: Highlight; index: number }> = ({ highlight, index }) => {
  const Icon = highlight.icon;
  const isEven = index % 2 === 0;
  const isLarge = highlight.number === 1 || highlight.number === 2;

  return (
    <div
      className="group relative overflow-visible transition-all duration-500"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      {/* Clean card: white panel, centered, subtle shadow and consistent padding */}
      <div className={`relative bg-white ${isLarge ? 'rounded-none sm:rounded-xl' : 'rounded-lg sm:rounded-xl'} overflow-hidden border border-gray-200 ${isLarge ? 'mx-0 sm:mx-auto sm:max-w-7xl lg:max-w-6xl' : 'mx-4 sm:mx-auto sm:max-w-5xl'} shadow-sm sm:shadow-md hover:shadow-lg`}>
        {/* Image section with responsive padding; selected highlights become full-width and taller on mobile */}
        <div className={`${isLarge ? 'w-full flex items-center justify-center p-0 sm:p-10' : 'w-full flex items-center justify-center p-4 sm:p-10'}`}>
          <div className={`${isLarge ? 'w-full' : 'w-full sm:max-w-4xl'} flex items-center justify-center`}>
            <img
              src={highlight.image}
              alt={highlight.title}
              className={`w-full h-auto object-contain rounded-md transition-transform duration-500 group-hover:scale-105 ${isLarge ? 'max-h-[720px] sm:max-h-none lg:max-h-[920px]' : ''}`}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HighlightsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[44vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg}${import.meta.env.DEV ? "?t=" + Date.now() : ""})`,
          }}
        >
          <div className="absolute inset-0 hero-gradient opacity-60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center tracking-tight max-w-3xl mx-auto leading-tight drop-shadow-xl">
            Highlights
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-primary-foreground/90 text-center max-w-3xl mx-auto px-4">
            Discover the exciting features and exclusive prizes at Monie Fest 2026
          </p>
        </div>
      </section>

      <main className="pt-12 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Highlights Grid - single column so each picture is on its own row */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <HighlightCard key={highlight.number} highlight={highlight} index={index} />
            ))}
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
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">More Highlights Coming Soon</h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
                  We're adding more exciting highlights and surprises. Stay tuned for updates!
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
