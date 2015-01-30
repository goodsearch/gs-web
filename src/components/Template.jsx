var React = require('react');

module.exports = Template = React.createClass({
  getDefaultProps: function() {
    return {
      theme: 'basic.css'
    };
  },

  getAssetPath: function(assetName) {
    return '/assets/' + this.props.assetManifest[assetName];
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
          <script defer src={this.getAssetPath('app.js')}></script>
        </body>
      </html>
    );
  }
});
