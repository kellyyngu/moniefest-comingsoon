// Simple gtag helper. Replace the GA_MEASUREMENT_ID string in index.html with your ID.
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const pageview = (path: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_path: path });
  }
};

export const event = ({ action, category, label, value }: { action: string; category?: string; label?: string; value?: number }) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export default { pageview, event };
