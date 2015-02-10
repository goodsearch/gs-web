var HeroBlock          = require('./HeroBlock.jsx');
var ListBlock          = require('./ListBlock.jsx');
var TestimonialsBlock  = require('./TestimonialsBlock.jsx');
var SocialButtonsBlock = require('./SocialButtonsBlock.jsx');

module.exports = function(blockType) {
  switch(blockType) {
    case "hero":            return HeroBlock;
    case "list":            return ListBlock;
    case "testimonials":    return TestimonialsBlock;
    case "social-buttons":  return SocialButtonsBlock;
    default:                return null;
  }
};
