var React = require('react');
var assets = require('../../util/assets.js')();

module.exports = Template = React.createClass({
  getDefaultProps: function() {
    return {
      theme: 'basic.css'
    };
  },

  getManifestPath: function() {
    return '/manifest-' + this.props.rev + '.js';
  },

  getAssetPath: function(assetName) {
    return '/' + assets[assetName];
  },

  render: function() {
    return (
      <html>
        <head lang="en">
          <meta charSet="utf-8" />
          <link rel="stylesheet" href={this.getAssetPath(this.props.theme)} />
          <script src={this.getManifestPath()}></script>
        </head>
        <body>
          <div id="main">{this.props.children}</div>
          <script defer src={this.getAssetPath('app.js')}></script>
        </body>
      </html>
    );
  }
});
