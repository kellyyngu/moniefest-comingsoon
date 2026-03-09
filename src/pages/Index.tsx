import React from "react";
import Hero from "@/components/Hero";
// Stats removed from homepage per request
import ProgrammePreview from "@/components/ProgrammePreview";
// WhatIsMonie removed from homepage
import About from "@/components/About";
// SpeakersQuotes removed per request
import PastEvents from "@/components/PastEvents";
import Exhibitors from "@/components/Exhibitors";
// PremierEvent and Pricing sections removed from homepage
import Footer from "@/components/Footer";

type IndexProps = {
  onOpenEventbrite?: () => void;
};

const Index = ({ onOpenEventbrite }: IndexProps) => {

  return (
    <main className="min-h-screen">
      <Hero onOpenEventbrite={() => onOpenEventbrite?.()} />
      <ProgrammePreview />

      {/* Standalone giveaway thumbnail placed between Programme Highlights and the main cards */}
      <div className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="group w-full max-w-3xl md:max-w-5xl lg:max-w-6xl">
              <a
                href="/highlights"
                className="relative block rounded-t-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                aria-label="View Highlights – Special Giveaways"
                tabIndex={-1}
              >
                <img
                  src="/optimized/giveaway.webp"
                  alt="Special Giveaways"
                  className="w-full object-contain bg-card p-4 md:p-6 lg:p-8 transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
              </a>

              {/* Below-image CTA bar */}
              <a
                href="/highlights"
                className="flex items-center justify-center sm:justify-between gap-3 bg-card border border-border border-t-0 rounded-b-2xl px-5 py-3 shadow-xl hover:bg-card/80 transition-colors duration-200"
                aria-label="View Highlights – Special Giveaways"
              >
                <p className="hidden sm:block text-foreground text-sm sm:text-base font-bold leading-tight">Special Giveaways &amp; Highlights</p>

                <span className="flex items-center gap-1.5 bg-primary text-black text-xs sm:text-sm font-extrabold uppercase tracking-wider px-4 py-2 rounded-full shadow-md whitespace-nowrap group-hover:scale-105 transition-transform duration-300">
                  View Highlights
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <PastEvents />
      <Exhibitors />
      <About />
      {/* PremierEvent, Pricing, and Partners removed */}
      <Footer />
    </main>
  );
};

export default Index;
