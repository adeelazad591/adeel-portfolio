/** @type {import('next').NextConfig} */
const nextConfig = {
  // Workspace packages ship TypeScript source directly (no build step of
  // their own), so Next needs to transpile them as part of the app build.
  transpilePackages: ["@adeel-portfolio/ui"],
};

export default nextConfig;
