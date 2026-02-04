const CRITICAL_IMAGES = [
  '/optimized/banner_bg.webp',
  '/optimized/highlightsBanner.webp',
  '/optimized/microleap_luckyDraw.webp',
  '/optimized/pinnyang.webp',
  '/optimized/george.webp',
  '/optimized/mitec.webp'
];

export function preloadImages(paths: string[] = CRITICAL_IMAGES) {
  const loaders = paths.map(
    (p) =>
      new Promise<void>((resolve) => {
        try {
          const img = new Image();
          img.src = p;
          img.decoding = 'async';
          img.onload = () => resolve();
          img.onerror = () => resolve();
        } catch (e) {
          resolve();
        }
      })
  );
  return Promise.all(loaders).then(() => undefined);
}
