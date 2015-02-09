var HeroBlock   = require('./HeroBlock.jsx');
var ListBlock   = require('./ListBlock.jsx');

module.exports = function(blockType) {
  switch(blockType) {
    case "hero":  return HeroBlock;
    case "list":  return ListBlock;
    default:      return null;
  }
};
