var t     = require("../../react-test-helper.js");
var React = require("react");
var _     = require("lodash");

// SUT
var ListBlock = require("../../../src/components/blocks/ListBlock.jsx");

var blockData = [
  { copy: "Copy Item #1" },
  { copy: "Copy Item #2" },
  { copy: "Copy Item #3" }
];

describe("ListBlock component", function() {
  afterEach(t.clearDOM);

  it("container has the classes [block, list]", function() {
    this.componentNode = t.utils.renderIntoDocument(
      <ListBlock data={blockData}  />
    ).getDOMNode();

    t.assert("block list" === this.componentNode.className);
  });

  it("assigns each data item to an <li> tag in an <ul>", function() {
    this.component = t.utils.renderIntoDocument(<ListBlock data={blockData}  />);
    var ul = t.utils.findRenderedDOMComponentWithTag(this.component, "ul");

    var lis = ul.getDOMNode().childNodes;

    t.assert(3 === lis.length);
    t.assert(blockData[0].copy === lis[0].textContent);
    t.assert(blockData[1].copy === lis[1].textContent);
    t.assert(blockData[2].copy === lis[2].textContent);
  });
});
