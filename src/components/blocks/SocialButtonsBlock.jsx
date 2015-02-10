'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'SocialButtonsBlock',

  getDefaultProps: function() {
    return {
      classNames: ['block', 'social-buttons']
    };
  },

  render: function() {
    return (
      <div className={this.props.classNames.join(' ')}>
        <ul>
          <li className="pinterest">Pinterest</li>
          <li className="facebook">Facebook</li>
          <li className="twitter">Twitter</li>
          <li className="google-plus">Google+</li>
        </ul>
      </div>
    );
  }
});
