/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 12,
    workerThreads: false,
  },
  images: {
    domains: ["localhost", "www.inolib.fr", "inolib.fr", "www.backend.inolib.fr", "backend.inolib.fr"],
  },
};

export default nextConfig;
