/** @type {import("next").NextConfig} */
export default {
  experimental: {
    cpus: 12,
    workerThreads: false,
  },
  images: {
    domains: ["localhost"],
  },
};
