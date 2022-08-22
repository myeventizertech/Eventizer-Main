/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "eventizerbucket155524-dev.s3.ap-southeast-1.amazonaws.com",
      "diary.myeventizer.com",
      "images.unsplash.com"
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 768, 828, 1024, 1080, 1200, 1920, 2048, 3840],
    future: {
      webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
        // Looks like backward compatibility approach.
    },
    webpack(config) {
      config.resolve.fallback = {
        ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
          // by next.js will be dropped. Doesn't make much sense, but how it is
        fs: false, // the solution
      };
  
      return config;
  }
},
};

module.exports = nextConfig;
