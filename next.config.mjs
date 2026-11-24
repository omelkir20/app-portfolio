/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produit un serveur autonome (.next/standalone) : image Docker beaucoup plus légère
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
