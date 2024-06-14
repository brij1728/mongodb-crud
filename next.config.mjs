/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
    API_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://mongodb-crud-ten.vercel.app' // Your production URL
        : `http://localhost:${process.env.PORT || 3000}`,
  },
};

export default nextConfig;
