// A short list of immediately critical images (above the fold)
const CRITICAL_IMAGES = [
  `${import.meta.env.BASE_URL}optimized/speakerBanner.webp`,
  `${import.meta.env.BASE_URL}optimized/banner_bg.webp`,
  `${import.meta.env.BASE_URL}optimized/highlightsBanner.webp`,
  `${import.meta.env.BASE_URL}optimized/sinegyBanner.webp`,
  `${import.meta.env.BASE_URL}optimized/pinnyang.webp`,
  `${import.meta.env.BASE_URL}optimized/george.webp`,
  `${import.meta.env.BASE_URL}optimized/moniepic.PNG`
];

// All images we want to warm in cache on first visit (kept as a curated list)
const ALL_IMAGES = [
  `${import.meta.env.BASE_URL}optimized/banner_bg.webp`,
  `${import.meta.env.BASE_URL}optimized/benchxcapital.webp`,
  `${import.meta.env.BASE_URL}optimized/FIMM.webp`,
  `${import.meta.env.BASE_URL}optimized/Foodie-Red.webp`,
  `${import.meta.env.BASE_URL}optimized/FSM_One.png`,
  `${import.meta.env.BASE_URL}optimized/fundingSocieties.svg`,
  `${import.meta.env.BASE_URL}optimized/gambitCustody.webp`,
  `${import.meta.env.BASE_URL}optimized/gambitTrustees.webp`,
  `${import.meta.env.BASE_URL}optimized/george.webp`,
  `${import.meta.env.BASE_URL}optimized/highlightsBanner.webp`,
  `${import.meta.env.BASE_URL}optimized/sinegyBanner.webp`,
  `${import.meta.env.BASE_URL}optimized/jeroni.jpg`,
  `${import.meta.env.BASE_URL}optimized/luno.webp`,
  `${import.meta.env.BASE_URL}optimized/microleap.webp`,
  `${import.meta.env.BASE_URL}optimized/microleap_visual.webp`,
  `${import.meta.env.BASE_URL}optimized/moniepic.PNG`,
  `${import.meta.env.BASE_URL}optimized/monieHeader.webp`,
  `${import.meta.env.BASE_URL}optimized/monielogo.webp`,
  `${import.meta.env.BASE_URL}optimized/moomoo.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-1.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-2.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-3.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-4.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-5.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-6.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-7.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-8.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-9.webp`,
  `${import.meta.env.BASE_URL}optimized/past-event-pic-10.webp`,
  `${import.meta.env.BASE_URL}optimized/pinnyang.webp`,
  `${import.meta.env.BASE_URL}optimized/seanFreer.jpg`,
  `${import.meta.env.BASE_URL}optimized/seanFreer.svg`,
  `${import.meta.env.BASE_URL}optimized/speakerBanner.webp`,
  `${import.meta.env.BASE_URL}optimized/vernonTian.jpg`,
  `${import.meta.env.BASE_URL}optimized/timothyTiah.jpg`,
  `${import.meta.env.BASE_URL}optimized/anson.jpg`,
  `${import.meta.env.BASE_URL}optimized/ronnie.png`,
  `${import.meta.env.BASE_URL}optimized/trent.png`,
  `${import.meta.env.BASE_URL}optimized/spg_dji.png`,
  `${import.meta.env.BASE_URL}optimized/Spire-Black.webp`,
  `${import.meta.env.BASE_URL}optimized/webull.webp`
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
