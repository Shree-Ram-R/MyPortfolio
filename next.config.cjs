import WithPWA from "next-pwa";
import "./src/env.js";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig

export default withPWA({
  reactStrictMode: true,
  output: "export", // <-- tells Next.js to generate static HTML
  outDir: "out",    // <-- optional, default is '.next/export'
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
