var React = require('react');
var ISVG  = require('react-inlinesvg');

var NotFoundPage = React.createClass({
  render: function() {
    return <ISVG src="/404.svg" />;
  }
});

module.exports = NotFoundPage;
