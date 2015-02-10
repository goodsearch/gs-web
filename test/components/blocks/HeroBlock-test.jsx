var t         = require('../../react-test-helper.js');
var React     = require('react');

// SUT
var HeroBlock = require('../../../src/components/blocks/HeroBlock.jsx');

describe('HeroBlock component', function() {
  before('render component, locate test handles', function() {
    // FIXME: scaffold valid data elsewhere?
    var blockData = {
      bgImageSrc:   "bgImageSrc",
      heading:      "heading",
      headingCopy:  "headingCopy",
      ctaTarget:    "ctaTarget",
      ctaCopy:      "ctaCopy"
    };

    this.component = t.utils.renderIntoDocument(<HeroBlock data={blockData} />);
  });

  afterEach(t.clearDOM);

  it('containing div should have the classes [block, hero]', function() {
    t.assert('block hero' === this.component.getDOMNode().className);
  });
});
