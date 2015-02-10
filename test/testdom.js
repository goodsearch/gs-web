module.exports = function(markup) {
  if (typeof document !== 'undefined') return;

  var jsdom       = require('jsdom').jsdom;
  global.document = jsdom(markup || '<!doctype html><html><body></body></html>');
  global.window   = document.parentWindow;

  navigator = window.navigator = {};
  navigator.userAgent = 'NodeJs JsDom';
  navigator.appVersion = '';

  // globals go here
};
