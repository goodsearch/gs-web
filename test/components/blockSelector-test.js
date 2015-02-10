var assert            = require('better-assert');
var blockSelector     = require('../../src/components/blocks/blockSelector.js');
var HeroBlock         = require('../../src/components/blocks/HeroBlock.jsx');
var ListBlock         = require('../../src/components/blocks/ListBlock.jsx');
var TestimonialsBlock = require('../../src/components/blocks/TestimonialsBlock.jsx');
var SocialButtonsBlock = require('../../src/components/blocks/SocialButtonsBlock.jsx');

describe('blockSelector', function() {
  it('when given "hero" returns a HeroBlock', function() {
    assert(HeroBlock == blockSelector('hero'));
  });

  it('when given "list" returns a ListBlock', function() {
    assert(ListBlock == blockSelector('list'));
  });

  it('when given "testimonials" returns a TestimonialsBlock', function() {
    assert(TestimonialsBlock == blockSelector('testimonials'));
  });

  it('when given "social-buttons" returns a SocialButtonsBlock', function() {
    assert(SocialButtonsBlock == blockSelector('social-buttons'));
  });
});
