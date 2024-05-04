/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  output: 'export',
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  distDir: 'build',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
