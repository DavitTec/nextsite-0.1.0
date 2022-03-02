//
const basePath = process.env.NODE_ENV === 'production' ? '/nextsite-0.1.0' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
