export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/** Pushes a GA4-shaped event onto the GTM dataLayer. Safe to call during SSR (no-ops). */
export function trackEvent(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const cleaned: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) cleaned[key] = value;
  }
  window.dataLayer.push({ event, ...cleaned });
}
