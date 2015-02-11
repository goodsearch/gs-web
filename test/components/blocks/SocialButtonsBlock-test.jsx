var t     = require("../../react-test-helper.js");
var React = require("react");
var _     = require("lodash");

// SUT
var SocialButtonsBlock = require("../../../src/components/blocks/SocialButtonsBlock.jsx");

describe("SocialButtonsBlock component", function() {
  afterEach(t.clearDOM);

  it("container has the classes [block, social-buttons]", function() {
    this.componentNode = t.utils.renderIntoDocument(
      <SocialButtonsBlock />
    ).getDOMNode();

    t.assert("block social-buttons" === this.componentNode.className);
  });

  it("renders a <ul> with social network options", function() {
    this.component = t.utils.renderIntoDocument(<SocialButtonsBlock />);
    var ul = t.utils.findRenderedDOMComponentWithTag(this.component, "ul");

    var lis = ul.getDOMNode().childNodes;
    t.assert(4 === lis.length);
    t.assert("pinterest"   === lis[0].className);
    t.assert("facebook"    === lis[1].className);
    t.assert("twitter"     === lis[2].className);
    t.assert("google-plus" === lis[3].className);
  });
});
