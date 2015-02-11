var t     = require("../../react-test-helper.js");
var React = require("react");
var _     = require("lodash");

// SUT
var HeroBlock = require("../../../src/components/blocks/HeroBlock.jsx");

var blockData = {
  bgImageSrc:   "bgImageSrc",
  heading:      "heading",
  headingCopy:  "headingCopy",
  ctaTarget:    "http://www.example.com/",
  ctaCopy:      "ctaCopy"
};

describe("HeroBlock component", function() {
  afterEach(t.clearDOM);

  it("container has the classes [block, hero]", function() {
    this.componentNode = t.utils.renderIntoDocument(
      <HeroBlock data={blockData}  />
    ).getDOMNode();

    t.assert("block hero" === this.componentNode.className);
  });

  it("container has the correct background image", function() {
    this.componentNode = t.utils.renderIntoDocument(
      <HeroBlock data={blockData}  />
    ).getDOMNode();

    t.assert("url(" + blockData.bgImageSrc + ")" === this.componentNode.style["background-image"]);
  });

  it("assigns the value for 'heading' to a <h1> tag", function() {
    this.component = t.utils.renderIntoDocument(<HeroBlock data={blockData}  />);
    var h1 = t.utils.findRenderedDOMComponentWithTag(this.component, "h1");

    t.assert(blockData.heading === h1.getDOMNode().textContent);
  });

  it("assigns the value for 'headingCopy' to an <p> tag", function() {
    this.component = t.utils.renderIntoDocument(<HeroBlock data={blockData}  />);
    var p = t.utils.findRenderedDOMComponentWithTag(this.component, "p");

    t.assert(blockData.headingCopy === p.getDOMNode().textContent);
  });

  it("assigns the value for 'ctaTarget' to an <a> tag's href", function() {
    this.component = t.utils.renderIntoDocument(<HeroBlock data={blockData}  />);
    var a = t.utils.findRenderedDOMComponentWithTag(this.component, "a");

    t.assert(blockData.ctaTarget === a.getDOMNode().href);
  });

  it("assigns the value for 'ctaCopy' to an <a> tag's content", function() {
    this.component = t.utils.renderIntoDocument(<HeroBlock data={blockData}  />);
    var a = t.utils.findRenderedDOMComponentWithTag(this.component, "a");

    t.assert(blockData.ctaCopy === a.getDOMNode().textContent);
  });

  describe("when given an asset prefix", function() {
    it("prepends the asset prefix to bgImageSrc", function() {
      var prefix = "/prefix";

      this.componentNode = t.utils.renderIntoDocument(
        <HeroBlock data={blockData} assetPrefix={prefix} />
      ).getDOMNode();

      t.assert("url(" + prefix + blockData.bgImageSrc + ")" === this.componentNode.style["background-image"]);
    });
  });
});
