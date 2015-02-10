var assert            = require('better-assert');
var blockSelector     = require('../../src/components/blocks/blockSelector.js');
var HeroBlock         = require('../../src/components/blocks/HeroBlock.jsx');
var ListBlock         = require('../../src/components/blocks/ListBlock.jsx');
var TestimonialsBlock = require('../../src/components/blocks/TestimonialsBlock.jsx');
var SocialButtonsBlock = require('../../src/components/blocks/SocialButtonsBlock.jsx');

describe('blockSelector', function() {
  it('returns a HeroBlock when given "hero"', function() {
    assert(HeroBlock == blockSelector('hero'));
  });

  it('returns a ListBlock when given "list"', function() {
    assert(ListBlock == blockSelector('list'));
  });

  it('returns a TestimonialsBlock when given "testimonials"', function() {
    assert(TestimonialsBlock == blockSelector('testimonials'));
  });

  it('returns a SocialButtonsBlock when given "social-buttons"', function() {
    assert(SocialButtonsBlock == blockSelector('social-buttons'));
  });
});
