/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/',
    async redirects() {
        return [
          {
            source: '/',
            destination: '/game',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
