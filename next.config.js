/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      "mongodb+srv://NextJS-REST-API:zxnJly8mR2U6CL6z@cluster0.h0kat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
