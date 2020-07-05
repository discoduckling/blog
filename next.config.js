const isProd = (process.env.NODE_ENV || "production") === "production";

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" }
  }),
  // assetPrefix: isProd ? "https://discoduckling.github.io/blog/" : "",
  'process.env.BACKEND_URL': isProd ? 'https://discoduckling.github.io/blog' : ''
};
