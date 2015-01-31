var React = require('react');

var LandingPage = React.createFactory(
  require('./components/pages/LandingPage.jsx')
);

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(LandingPage(window.bootstrapProps), document);
  };
}
