export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Pushes a GA4-shaped event onto the GTM dataLayer (for once GTM triggers exist) AND sends it
 * directly to GA4 via gtag.js, so events reach the GA4 property even before GTM is configured.
 * Safe to call during SSR (no-ops).
 */
export function trackEvent(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const cleaned: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) cleaned[key] = value;
  }
  window.dataLayer.push({ event, ...cleaned });
  if (typeof window.gtag === "function") {
    // CTAs navigate away (window.location.href) right after firing this event, which can
    // cancel a regular in-flight request before it reaches GA4. beacon transport is sent via
    // navigator.sendBeacon, which browsers guarantee to deliver even if the page unloads next.
    window.gtag("event", event, { ...cleaned, transport_type: "beacon" });
  }
}
