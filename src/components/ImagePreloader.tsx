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
      '/optimized/Foodie-Red.webp', // Co-organizer logos
      '/optimized/Spire-Black.webp',
      '/optimized/benchxcapital.webp', // Strategic partner
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
