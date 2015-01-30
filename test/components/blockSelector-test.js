var assert        = require('better-assert');
var blockSelector = require('../../src/components/blocks/blockSelector.js');
var HeroBlock     = require('../../src/components/blocks/HeroBlock.jsx');
var ListBlock     = require('../../src/components/blocks/ListBlock.jsx');

describe('blockSelector', function() {
  describe('when given a string that starts with "hero"', function() {
    it('returns an object with the hero block with the variant 001', function() {
      var selector = blockSelector('hero-001');
      assert(HeroBlock == selector.element);
      assert('001' == selector.variant);
    });

    it('returns a different variant and the same block type', function() {
      var selector = blockSelector('hero-643');
      assert(HeroBlock == selector.element);
      assert('643' == selector.variant);
    });
  });

  describe('when given a string that starts with "list"', function() {
    it('returns an object with the list block with the variant 423', function() {
      var selector = blockSelector('list-423');
      assert(ListBlock == selector.element);
      assert('423' == selector.variant);
    });

    it('returns a different variant and the same block type', function() {
      var selector = blockSelector('list-222');
      assert(ListBlock == selector.element);
      assert('222' == selector.variant);
    });
  });

  xit('returns a BlockCreate if no selector given', function() {
    var selector = blockSelector();
    assert(BlockCreate == selector.element);
    assert(null == selector.variant);
  });
});
