require('./testdom.js')();

var React     = require('react/addons');
var assert    = require('better-assert');
var TestUtils = React.addons.TestUtils;

module.exports = {
  assert: assert,

  clearDOM: function(cb) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(cb);
  },

  utils: TestUtils
};
