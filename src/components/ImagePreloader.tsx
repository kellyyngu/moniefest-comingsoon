import { useEffect } from 'react';

/**
 * Preloads critical images to improve initial page load performance
 */
const ImagePreloader = () => {
  useEffect(() => {
    // Preload only truly critical above-the-fold images to avoid wasted downloads.
    const criticalPreload = [
      '/optimized/mitec.webp', // Hero background (renders immediately)
      '/moniefest2026.svg', // Main logo (renders immediately)
      '/optimized/monielogo.webp', // Header logo (visible on first paint)
    ];

    const prefetchImages = [
      // Sponsor/exhibitor logos and other large images are useful to have but not required
      // within the first few seconds. Use prefetch to hint the browser without forcing immediate download.
      '/optimized/Foodie-Red.webp',
      '/optimized/Spire-Black.webp',
      '/optimized/benchxcapital.webp',
      '/optimized/gambitTrustees.webp',
      '/optimized/gambitCustody.webp',
      '/optimized/luno.webp',
      '/optimized/moomoo.webp',
      '/optimized/webull.webp',
      '/versa.svg',
      '/optimized/microleap.webp',
      '/society-malaysia.svg',
      '/optimized/past-event-pic-1.webp',
      '/optimized/past-event-pic-2.webp',
      '/optimized/past-event-pic-3.webp',
      '/optimized/past-event-pic-4.webp',
      '/optimized/past-event-pic-5.webp',
      '/optimized/past-event-pic-6.webp',
      '/optimized/past-event-pic-7.webp',
      '/optimized/past-event-pic-8.webp',
      '/optimized/past-event-pic-9.webp',
      '/optimized/highlightsBanner.webp', // Highlights page banner (prefetch)
      '/optimized/speakerBanner.webp', // Speakers page banner (prefetch)
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
