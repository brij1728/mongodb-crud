/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: process.env.PORT,
    API_URL: `http://localhost:${process.env.PORT}`,
  },
};

export default nextConfig;
