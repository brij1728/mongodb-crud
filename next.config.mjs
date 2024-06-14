/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PORT: process.env.PORT,
    API_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://mongodb-crud-ten.vercel.app/' // Replace with your production URL
        : `http://localhost:${process.env.PORT}`,
    MONGODB_URL: process.env.MONGODB_URL,
  },
};

export default nextConfig;
