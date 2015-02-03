var React         = require('react');
var _             = require('lodash');
var Template      = require('../Template.jsx');

var StaticPage = React.createClass({
  render: function() {
    var page = React.createElement(this.props.pageClass, { page: this.props.page});

    return (<Template>{page}</Template>);
  }
});

module.exports = StaticPage;
