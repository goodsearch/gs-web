"use strict";

var React = require("react");
var _     = require('lodash');

var ItemWrapper = React.createClass({
  render: function() {
    return (
      <li>
        <img src={this.props.item.media} />
        <span>{this.props.item.attribution}</span>
        <p>{this.props.item.copy}</p>
      </li>
    );
  }
});

module.exports = React.createClass({
  displayName: "TestimonialsBlock",

  getDefaultProps: function() {
    return {
      classNames: ['block', 'testimonials']
    };
  },

  render: function() {
    return (
      <div className={this.props.classNames.join(' ')}>
        <ul>
          {_.map(this.props.data, function(item) {
            return <ItemWrapper key={this.props.data.indexOf(item)} item={item} />;
          }.bind(this))}
        </ul>
      </div>
    );
  }
});
