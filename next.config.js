/** @type {import("next").NextConfig} */
export default {
  experimental: {
    cpus: 4,
    workerThreads: false,
  },
  images: {
    domains: ["localhost"],
  },
};
