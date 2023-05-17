const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // images: {
  //   unoptimized: true,
  // },
  // experimental: {
  //   outputFileTracingIncludes: {
  //     outputFileTracingRoot: './',
  //   },
  // },
  trailingSlash: true,
  // output: "standalone",
  // distDir: 'out',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
