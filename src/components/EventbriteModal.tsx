import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  eventId: string;
  height?: number;
  popupRef?: { current: Window | null };
};

const loadScript = () => {
  return new Promise<void>((resolve, reject) => {
    if ((window as any).EBWidgets) {
      console.info("EventbriteDebug: EBWidgets already present on page.");
      return resolve();
    }
    const existing = document.querySelector('script[src="https://www.eventbrite.com/static/widgets/eb_widgets.js"]');
    if (existing) {
      console.info("EventbriteDebug: Found existing eb_widgets.js script element, waiting for load.");
      existing.addEventListener("load", () => {
        console.info("EventbriteDebug: existing eb_widgets.js loaded.");
        resolve();
      });
      existing.addEventListener("error", (e) => {
        console.error("EventbriteDebug: existing eb_widgets.js failed to load.", e);
        reject(e);
      });
      return;
    }
    console.info("EventbriteDebug: Inserting eb_widgets.js script element.");
    const s = document.createElement("script");
    s.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    s.async = true;
    s.onload = () => {
      console.info("EventbriteDebug: eb_widgets.js loaded.");
      resolve();
    };
    s.onerror = (e) => {
      console.error("EventbriteDebug: eb_widgets.js failed to load.", e);
      reject(e);
    };
    document.body.appendChild(s);
  });
};

const EventbriteModal = ({ open, onClose, eventId, height = 560, popupRef }: Props) => {
  const containerId = `eventbrite-widget-container-${eventId}`;
  const createdRef = useRef(false);
  const [widgetReady, setWidgetReady] = useState(false);
  const [widgetFailed, setWidgetFailed] = useState(false);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    (async () => {
      try {
        await loadScript();
        if (cancelled) return;
        // create widget
        try {
          console.info("EventbriteDebug: Calling EBWidgets.createWidget (first attempt)");
          (window as any).EBWidgets.createWidget({
            widgetType: "checkout",
            eventId: eventId,
            iframeContainerId: containerId,
            iframeContainerHeight: height,
            onOrderComplete: () => {
              // Push a signal for GTM (if used) and call gtag directly as a fallback.
              try {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({
                  event: "eventbrite_registration_success",
                  eventbrite_event_id: eventId,
                });
              } catch (e) {
                // ignore
              }
              try {
                if (typeof (window as any).gtag === "function") {
                  (window as any).gtag('event', 'eventbrite_registration_success', { event_id: eventId });
                }
              } catch (e) {
                // ignore
              }
              console.log("Eventbrite: Order complete - tracking signal sent.");
            },
          });
          createdRef.current = true;
          console.info("EventbriteDebug: createWidget returned (first attempt) - widget created flag set.");

          // wait for Eventbrite to inject the iframe into the container; otherwise the widget
          // may have been blocked (adblock/CSP). Use a MutationObserver with a timeout.
          const containerEl = document.getElementById(containerId);
          let observer: MutationObserver | null = null;
          let checkTimeout: number | null = null;
          if (containerEl) {
            observer = new MutationObserver(() => {
              const iframe = containerEl.querySelector("iframe");
              if (iframe) {
                const src = (iframe as HTMLIFrameElement)?.src || '(no src)';
                console.info("EventbriteDebug: iframe injected into container.", { src });
                setWidgetReady(true);
                if (observer) observer.disconnect();
                if (checkTimeout) window.clearTimeout(checkTimeout);
              }
            });
            observer.observe(containerEl, { childList: true, subtree: true });

            checkTimeout = window.setTimeout(() => {
              const iframe = containerEl.querySelector("iframe");
              if (iframe) {
                const src = (iframe as HTMLIFrameElement)?.src || '(no src)';
                console.info("EventbriteDebug: iframe detected on timeout check.", { src });
                setWidgetReady(true);
              } else {
                console.warn("EventbriteDebug: iframe NOT found on timeout check — marking widgetFailed.");
                setWidgetFailed(true);
              }
              if (observer) observer.disconnect();
            }, 3000);
          } else {
            // container not present — mark as failed after short delay
            console.warn("EventbriteDebug: widget container not present in DOM — marking widgetFailed.");
            window.setTimeout(() => setWidgetFailed(true), 1000);
          }
        } catch (err) {
          // sometimes library exposes differently; attempt after small delay
          console.error("EventbriteDebug: createWidget (first attempt) threw — will retry after delay.", err);
          setTimeout(() => {
            try {
              console.info("EventbriteDebug: Calling EBWidgets.createWidget (second attempt)");
              (window as any).EBWidgets.createWidget({
                widgetType: "checkout",
                eventId: eventId,
                iframeContainerId: containerId,
                iframeContainerHeight: height,
                onOrderComplete: () => {
                  try {
                    (window as any).dataLayer = (window as any).dataLayer || [];
                    (window as any).dataLayer.push({
                      event: "eventbrite_registration_success",
                      eventbrite_event_id: eventId,
                    });
                  } catch (e) {}
                  try {
                    if (typeof (window as any).gtag === "function") {
                      (window as any).gtag('event', 'eventbrite_registration_success', { event_id: eventId });
                    }
                  } catch (e) {}
                  console.log("Eventbrite: Order complete - tracking signal sent.");
                },
              });
              createdRef.current = true;
              console.info("EventbriteDebug: createWidget returned (second attempt) - widget created flag set.");

              const containerEl2 = document.getElementById(containerId);
              let observer2: MutationObserver | null = null;
              let checkTimeout2: number | null = null;
              if (containerEl2) {
                observer2 = new MutationObserver(() => {
                  const iframe = containerEl2.querySelector("iframe");
                  if (iframe) {
                    const src = (iframe as HTMLIFrameElement)?.src || '(no src)';
                    console.info("EventbriteDebug: iframe injected into container (second observer).", { src });
                    setWidgetReady(true);
                    if (observer2) observer2.disconnect();
                    if (checkTimeout2) window.clearTimeout(checkTimeout2);
                  }
                });
                observer2.observe(containerEl2, { childList: true, subtree: true });

                checkTimeout2 = window.setTimeout(() => {
                  const iframe = containerEl2.querySelector("iframe");
                  if (iframe) {
                    const src = (iframe as HTMLIFrameElement)?.src || '(no src)';
                    console.info("EventbriteDebug: iframe detected on timeout check (second observer).", { src });
                    setWidgetReady(true);
                  } else {
                    console.warn("EventbriteDebug: iframe NOT found on timeout check (second observer) — marking widgetFailed.");
                    setWidgetFailed(true);
                  }
                  if (observer2) observer2.disconnect();
                }, 3000);
              } else {
                console.warn("EventbriteDebug: container not present for second attempt — marking widgetFailed.");
                window.setTimeout(() => setWidgetFailed(true), 1000);
              }
            } catch (e) {
              console.error("EventbriteDebug: Failed to create Eventbrite widget on second attempt", e);
              setWidgetFailed(true);
            }
          }, 300);
        }
      } catch (e) {
        console.error("Failed to load Eventbrite script", e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open, eventId, containerId, height]);

  if (!open) return null;

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-[10000] w-[min(900px,96%)] max-w-[900px] bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
          <h3 className="font-semibold">Register</h3>
          <button onClick={onClose} className="text-slate-100 bg-transparent px-3 py-1 rounded-md hover:bg-slate-800">Close</button>
        </div>
        <div className="p-4 bg-white text-gray-900">
          <div>
            {!widgetReady && !widgetFailed && (
              <div className="flex items-center justify-center py-6">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin" />
              </div>
            )}

            <div id={containerId} style={{ minHeight: Math.min(height, window.innerHeight * 0.75), maxHeight: '75vh', overflow: 'auto' }} />

            {widgetFailed && (
              <div className="mt-4">
                <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <p className="text-sm text-gray-700 mb-0">Eventbrite widget failed to load. Please close and try again.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default EventbriteModal;