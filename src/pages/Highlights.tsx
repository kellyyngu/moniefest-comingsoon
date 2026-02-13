import React, { useState } from "react";

import Footer from "@/components/Footer";
import heroBg from "/optimized/highlightsBanner.webp";

const BannerUploader: React.FC = () => {
  // Static banners — no upload allowed. First banner shows the Microleap Lucky Draw
  const banners = ["/optimized/microleap_visual.webp", "/optimized/giveaway.webp"];

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 items-start">
        {banners.map((src, idx) => (
          <div
            key={idx}
            className="rounded-md overflow-hidden border border-border p-0 bg-card w-full"
          >
            <div className="w-full bg-zinc-800 flex items-center justify-center overflow-hidden">
              <img
                src={src}
                alt={`Banner ${idx + 1}`}
                className="w-full h-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        ))}
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
            This section features the Lucky Draw and special programmes.
          </p>
        </div>
      </section>

      <main className="pt-12 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <BannerUploader />
            </div>
            <div className="flex justify-center">
              <div className="mt-6 w-full max-w-3xl">
                <div className="rounded-lg hero-gradient p-6 text-white text-center shadow-lg">
                  <h3 className="text-xl font-bold">More to come</h3>
                  <p className="mt-2 text-sm opacity-90">We're adding more highlights and surprises — stay tuned for updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HighlightsPage;
