var HeroBlock         = require('./HeroBlock.jsx');
var ListBlock         = require('./ListBlock.jsx');
var TestimonialsBlock = require('./TestimonialsBlock.jsx');

module.exports = function(blockType) {
  switch(blockType) {
    case "hero":          return HeroBlock;
    case "list":          return ListBlock;
    case "testimonials":  return TestimonialsBlock;
    default:              return null;
  }
};
