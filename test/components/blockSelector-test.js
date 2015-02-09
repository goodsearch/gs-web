var assert        = require('better-assert');
var blockSelector = require('../../src/components/blocks/blockSelector.js');
var HeroBlock     = require('../../src/components/blocks/HeroBlock.jsx');
var ListBlock     = require('../../src/components/blocks/ListBlock.jsx');

describe('blockSelector', function() {
  it('returns a HeroBlock when given "hero"', function() {
    assert(HeroBlock == blockSelector('hero'));
  });

  it('returns a ListBlock when given "list"', function() {
    assert(ListBlock == blockSelector('list'));
  });
});
