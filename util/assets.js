var _ = require('lodash');

module.exports = function() {
  if (typeof window !== 'undefined') {
    return window.assetManifest;
  } else {
    return require('../build/assets/manifest-' + process.env.GIT_REV + '.js');
  }
};
