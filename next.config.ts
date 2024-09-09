import type {NextConfig} from 'next'

const config: NextConfig = {
  experimental: {
    cpus: 4,
    workerThreads: false,
  },
  images: {
    domains: ["localhost"],
  },
};

export default config
