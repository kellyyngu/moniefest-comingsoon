import { useEffect } from 'react';

/**
 * Preloads critical images to improve initial page load performance
 */
const ImagePreloader = () => {
  useEffect(() => {
    // Preload critical above-the-fold images
    const criticalImages = [
      '/optimized/mitec.webp', // Hero background
      '/moniefest2026.svg', // Logo
      '/optimized/monielogo.webp', // Header logo
      '/optimized/banner_bg.webp', // WhatIsMonie background
      '/optimized/Foodie-Red.webp', // Co-organizer logos
      '/optimized/Spire-Black.webp',
      '/optimized/benchxcapital.webp', // Strategic partner
      '/optimized/gambitTrustees.webp', // Platinum sponsors
      '/optimized/gambitCustody.webp',
      '/optimized/luno.webp',
      '/optimized/moomoo.webp',
      '/optimized/webull.webp',
      '/versa.svg', // Gold sponsor
      '/optimized/microleap.webp', // Silver sponsor
      '/society-malaysia.svg', // Supporting partner
      '/optimized/past-event-pic-1.webp', // Past events
      '/optimized/past-event-pic-2.webp',
      '/optimized/past-event-pic-3.webp',
      '/optimized/past-event-pic-4.webp',
      '/optimized/past-event-pic-5.webp',
      '/optimized/past-event-pic-6.webp',
      '/optimized/past-event-pic-7.webp',
      '/optimized/past-event-pic-8.webp',
      '/optimized/past-event-pic-9.webp',
      '/optimized/highlightsBanner.webp', // Highlights page banner
      '/optimized/speakerBanner.webp', // Speakers page banner
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = src.endsWith('.webp') ? 'image/webp' : 'image/svg+xml';
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default ImagePreloader;
