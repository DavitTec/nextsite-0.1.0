module.exports = {
  basePath: '/nextsite-0.1.0',
  trailingSlash: false,
  exportPathMap: async function(
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId}
  ) {
    return {
      "/": {page: "/"},
      "/posts": {page: "/posts"}
    };
  }
};
