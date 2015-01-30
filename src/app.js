var React = require('react');
var App   = React.createFactory(require('./components/App.jsx'));

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(App(), document);
  };
}
