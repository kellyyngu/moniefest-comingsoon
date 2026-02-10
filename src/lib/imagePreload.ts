// A short list of immediately critical images (above the fold)
const CRITICAL_IMAGES = [
  '/optimized/speakerBanner.webp',
  '/optimized/banner_bg.webp',
  '/optimized/highlightsBanner.webp',
  '/optimized/pinnyang.webp',
  '/optimized/george.webp',
  '/optimized/mitec.webp'
];

// All images we want to warm in cache on first visit (kept as a curated list)
const ALL_IMAGES = [
  '/optimized/banner_bg.webp',
  '/optimized/benchxcapital.webp',
  '/optimized/FIMM.webp',
  '/optimized/Foodie-Red.webp',
  '/optimized/FSM_One.png',
  '/optimized/fundingSocieties.svg',
  '/optimized/gambitCustody.webp',
  '/optimized/gambitTrustees.webp',
  '/optimized/george.webp',
  '/optimized/highlightsBanner.webp',
  '/optimized/jeroni.jpg',
  '/optimized/luno.webp',
  '/optimized/microleap.webp',
  '/optimized/microleap_visual.webp',
  '/optimized/mitec.webp',
  '/optimized/monieHeader.webp',
  '/optimized/monielogo.webp',
  '/optimized/moomoo.webp',
  '/optimized/past-event-pic-1.webp',
  '/optimized/past-event-pic-2.webp',
  '/optimized/past-event-pic-3.webp',
  '/optimized/past-event-pic-4.webp',
  '/optimized/past-event-pic-5.webp',
  '/optimized/past-event-pic-6.webp',
  '/optimized/past-event-pic-7.webp',
  '/optimized/past-event-pic-8.webp',
  '/optimized/past-event-pic-9.webp',
  '/optimized/past-event-pic-10.webp',
  '/optimized/pinnyang.webp',
  '/optimized/seanFreer.jpg',
  '/optimized/seanFreer.svg',
  '/optimized/speakerBanner.webp',
  '/optimized/spg_dji.png',
  '/optimized/Spire-Black.webp',
  '/optimized/webull.webp'
];

function loadImage(src: string) {
  return new Promise<void>((resolve) => {
    try {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => resolve();
    } catch (e) {
      resolve();
    }
  });
}

/**
 * Preload a short list of critical images (non-blocking). Returns a Promise.
 */
export function preloadImages(paths: string[] = CRITICAL_IMAGES) {
  const loaders = paths.map((p) => loadImage(p));
  return Promise.all(loaders).then(() => undefined);
}

/**
 * Warm the cache for a larger set of images in the background.
 * Uses requestIdleCallback when available to avoid blocking the main thread.
 */
export function preloadAllImages(paths: string[] = ALL_IMAGES) {
  return new Promise<void>((resolve) => {
    const run = () => {
      // Load in small batches to avoid flooding the network all at once
      const batchSize = 6;
      const batches: Promise<void>[][] = [];
      for (let i = 0; i < paths.length; i += batchSize) {
        const chunk = paths.slice(i, i + batchSize).map((p) => loadImage(p));
        batches.push(chunk);
      }

      // Sequentially await each batch
      (async () => {
        for (const batch of batches) {
          // eslint-disable-next-line no-await-in-loop
          await Promise.all(batch);
          // give the browser a short breather
          // eslint-disable-next-line no-await-in-loop
          await new Promise((r) => setTimeout(r, 120));
        }
        resolve();
      })();
    };

    if (typeof (window as any).requestIdleCallback === 'function') {
      (window as any).requestIdleCallback(run, { timeout: 2000 });
    } else {
      // Fallback: run after a short delay so initial paint isn't impacted
      setTimeout(run, 1200);
    }
  });
}
