// next.config.js

const withNextra = require("nextra")({
  defaultShowCopyCode: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = {
  ...withNextra(),
  images: {
    domains: [
      "aceternity.com",
      "images.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "api.microlink.io",
    ], // Configure image domains here
  },
};
