var React  = require('react');
var assets = require('../../build/assets/manifest.json');

module.exports = Template = React.createClass({
  getDefaultProps: function() {
    return {
      theme: 'basic.css'
    };
  },

  getAssetPath: function(assetName) {
    return assets[assetName];
  },

  render: function() {
    return (
      <html>
        <head lang="en">
          <meta charSet="utf-8" />
          <link rel="stylesheet" href={this.getAssetPath(this.props.theme)} />
        </head>
        <body>
          <div id="main">{this.props.children}</div>
        </body>
      </html>
    );
  }
});
