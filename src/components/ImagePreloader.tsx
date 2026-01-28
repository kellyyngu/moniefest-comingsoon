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
