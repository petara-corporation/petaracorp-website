/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
