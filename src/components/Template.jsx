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

  getRenderedState: function() {
    var bootstrapProps = {
      rev:   this.props.rev,
      page:  this.props.page
    };

    return 'bootstrapProps = ' + JSON.stringify(bootstrapProps) + ';';
  },

  render: function() {
    return (
      <html>
        <head lang="en">
          <meta charSet="utf-8" />
          <link rel="stylesheet" href={this.getAssetPath(this.props.theme)} />
          <script src={this.getManifestPath()}></script>
          <script dangerouslySetInnerHTML={{__html: this.getRenderedState()}}></script>
        </head>
        <body>
          <div id="main">{this.props.children}</div>
          <script defer src={this.getAssetPath('app.js')}></script>
        </body>
      </html>
    );
  }
});
