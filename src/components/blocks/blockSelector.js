var HeroBlock   = require('./HeroBlock.jsx');
var ListBlock   = require('./ListBlock.jsx');
// var CTABlock

module.exports = function(blockType) {
  if (/^hero/.test(blockType)) {
    var variant = (blockType.match(/^hero-(\d+)$/) || [])[1];
    return { element: HeroBlock, variant: variant };
  } else if (/^list/.test(blockType)) {
    var variant = (blockType.match(/^list-(\d+)$/) || [])[1];
    return { element: ListBlock, variant: variant };
  }
};
