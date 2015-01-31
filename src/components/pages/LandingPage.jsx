var React         = require('react');
var _             = require('lodash');
var blockSelector = require('../blocks/blockSelector.js');
var Template      = require('../Template.jsx');

var LandingPage = React.createClass({
  getDefaultProps: function() {
    return {
      themeName: 'basic'
    };
  },

  render: function() {
    var blocks = _.map(this.props.page.blocks, function(block) {
      var blockEl = blockSelector(block.blockType);
      var id = block.blockType + this.props.page.blocks.indexOf(block);

      return React.createElement(blockEl.element, {
        variant:    blockEl.variant,
        data:       block.data,
        key:        id
      });
    }.bind(this));

    return (
      <Template rev={this.props.rev} page={this.props.page}>
        <div className={this.props.themeName}>{blocks}</div>
      </Template>
    );
  }
});

module.exports = LandingPage;
