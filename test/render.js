var _            = require('lodash');
var React        = require('react');
var defaultProps = {};

module.exports = function(ComponentFactory, newProps, body, callback) {
  var props = _.merge(defaultProps, newProps);

  return React.render(ComponentFactory(props), body, function() {
    if (typeof callback === 'function') setTimeout(callback);
  });
};
