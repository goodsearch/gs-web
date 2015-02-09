"use strict";

var React = require("react");

var ItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.item.copy}</li>;
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
            return <ItemWrapper key={self.props.data.indexOf(item)} item={item} />;
          })}
        </ul>
      </div>
    );
  }
});
