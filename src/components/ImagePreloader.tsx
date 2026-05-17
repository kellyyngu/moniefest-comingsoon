import { useEffect } from 'react';

/**
 * Preloads critical images to improve initial page load performance
 */
const ImagePreloader = () => {
  useEffect(() => {
    // Preload only truly critical above-the-fold images to avoid wasted downloads.
    const criticalPreload = [
      `${import.meta.env.BASE_URL}optimized/moniepic.PNG`, // Hero background (renders immediately)
      '/moniefest2026.svg', // Main logo (renders immediately)
      `${import.meta.env.BASE_URL}optimized/monielogo.webp`, // Header logo (visible on first paint)
    ];

    const prefetchImages = [
      // Sponsor/exhibitor logos and other large images are useful to have but not required
      // within the first few seconds. Use prefetch to hint the browser without forcing immediate download.
      `${import.meta.env.BASE_URL}optimized/Foodie-Red.webp`,
      `${import.meta.env.BASE_URL}optimized/Spire-Black.webp`,
      `${import.meta.env.BASE_URL}optimized/benchxcapital.webp`,
      `${import.meta.env.BASE_URL}optimized/gambitTrustees.webp`,
      `${import.meta.env.BASE_URL}optimized/gambitCustody.webp`,
      `${import.meta.env.BASE_URL}optimized/luno.webp`,
      `${import.meta.env.BASE_URL}optimized/moomoo.webp`,
      `${import.meta.env.BASE_URL}optimized/webull.webp`,
      '/versa.svg',
      `${import.meta.env.BASE_URL}optimized/microleap.webp`,
      '/society-malaysia.svg',
      `${import.meta.env.BASE_URL}optimized/past-event-pic-1.webp`,
      `${import.meta.env.BASE_URL}optimized/past-event-pic-2.webp`,
      `${import.meta.env.BASE_URL}optimized/past-event-pic-3.webp`,
      `${import.meta.env.BASE_URL}optimized/past-event-pic-4.webp`,
      `${import.meta.env.BASE_URL}optimized/past-event-pic-5.webp`,
      `${import.meta.env.BASE_URL}optimized/past-event-pic-6.webp`,
      `${import.meta.env.BASE_URL}optimized/past-event-pic-7.webp`,
      `${import.meta.env.BASE_URL}optimized/past-event-pic-8.webp`,
      `${import.meta.env.BASE_URL}optimized/past-event-pic-9.webp`,
      `${import.meta.env.BASE_URL}optimized/highlightsBanner.webp`, // Highlights page banner (prefetch)
      `${import.meta.env.BASE_URL}optimized/KenangaBanner.jpeg`, // Kenanga banner (prefetch)
      `${import.meta.env.BASE_URL}optimized/speakerBanner.webp`, // Speakers page banner (prefetch)
    ];

    // Preload the critical ones as images
    criticalPreload.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = src.endsWith('.webp') ? 'image/webp' : 'image/svg+xml';
      // Mark high priority for hero and logo
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });

    // Use prefetch for non-critical images to avoid unused-preload warnings
    prefetchImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = src;
      link.type = src.endsWith('.webp') ? 'image/webp' : 'image/svg+xml';
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default ImagePreloader;
