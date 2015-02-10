require('../../testdom.js')();
// var render    = require('../../render.js');
var React     = require('react/addons');
var assert    = require('better-assert');
var TestUtils = React.addons.TestUtils;
var clearDOM  = require('../../clearDOM.js');
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

    this.component = TestUtils.renderIntoDocument(<HeroBlock data={blockData} />);
  });

  afterEach(function(done) {
    clearDOM(document.body, done);
  });

  it('containing div should have the classes [block, hero]', function() {
    assert('block hero' === this.component.getDOMNode().className);
  });
});
