/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['swd-practice-cgr-project.vercel.app'],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
}

module.exports = nextConfig
