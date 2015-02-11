var React = require('react');
var _     = require('lodash');

var ListItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.item.copy}</li>;
  }
});

var ListBlock = React.createClass({
  getDefaultProps: function() {
    return {
      classNames: ['block', 'list']
    };
  },

  render: function() {
    var self = this;

    return (
      <div className={this.props.classNames.join(' ')}>
        <ul>
          {_.map(this.props.data, function(item) {
            return <ListItemWrapper key={self.props.data.indexOf(item)} item={item} />;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = ListBlock;
