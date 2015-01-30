var React = require('react');

var exampleData = {
  "bgImageSrc"  : "/images/hero.png",
  "heading"     : "I'm a Heading!",
  "headingCopy" : "More about my Hero here...",
  "ctaCopy"     : "Click me!!",
  "ctaTarget"   : "http://www.example.com"
}

var HeroBlock = React.createClass({
  getDefaultProps: function() {
    return {
      classNames: ['admin', 'block', 'hero']
    };
  },

  render: function() {
    return (
      <div className={this.props.classNames.join(' ')} style={ { backgroundImage: "url(" + this.props.data.bgImageSrc + ")" } }>
        <div>
          <h1>{this.props.data.heading}</h1>
          <p>{this.props.data.headingCopy}</p>
          <a href={this.props.data.ctaTarget}>{this.props.data.ctaCopy}</a>
        </div>
      </div>
    );
  }
});

module.exports = HeroBlock;

