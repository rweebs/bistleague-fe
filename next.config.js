const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withReactSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path");

module.exports = withPlugins([
  

  withCss({}),
  withImages({}),
  withReactSvg({
    include: path.resolve(__dirname, "./public/images"),
    webpack(config, options) {
      return config;
    },
  }),
  
    {typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }},{
    images: {
      domains: ['bowo-testing.sgp1.cdn.digitaloceanspaces.com','www.solutiva.co.id'],
    }
  }
    
]);