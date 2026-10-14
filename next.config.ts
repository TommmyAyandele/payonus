import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Resource articles moved to the URLs their content specs call for.
  async redirects() {
    return [
      ["gaming", "african-gaming-payments"],
      ["manufacturing", "cross-border-payment-solutions-manufacturers"],
      ["aviation", "aviation-payment-providers-africa"],
      ["ecommerce", "cross-border-ecommerce-payment-costs"],
      ["fintech", "bank-transfer-api-nigeria"],
      ["forex", "forex-payment-gateway-africa"],
      ["logistics", "payment-gateway-for-delivery-companies-nigeria"],
    ].map(([from, to]) => ({ source: `/resources/${from}`, destination: `/resources/${to}`, permanent: true }));
  },
};

export default nextConfig;
