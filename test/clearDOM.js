var React = require('react');

module.exports = function(node, cb) {
  React.unmountComponentAtNode(node);
  node.innerHTML = '';
  setTimeout(cb);
};
