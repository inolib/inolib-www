/** @type {import("next").NextConfig} */
export default {
  experimental: {
    cpus: 12,
    workerThreads: false,
  },
  images: {
    domains: ["localhost", "www.inolib.fr", "inolib.fr", "www.backend.inolib.fr", "backend.inolib.fr"],
  },
};
