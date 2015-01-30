require('node-jsx').install({ extension: '.jsx' });

var koa           = require('koa');
var static        = require('koa-static');
var favicon       = require('koa-favicon');
var router        = require('koa-router');
var mount         = require('koa-mount');
var path          = require('path');
var React         = require('react');
var _             = require('lodash');
var server        = koa();
var routes        = require('./routes.js');
var App           = React.createFactory(require('./src/components/App.jsx'));
var assetManifest = require('./build/assets/manifest.json');

server.use(
  favicon(path.resolve(__dirname + './build/images/favicon.ico'))
);
server.use(static('build'));

var AppRouter = new router();

_.forOwn(routes, function(_reactElement, route) {
  AppRouter.get(route, function *() {
    this.body = React.renderToString(App({
      path:           this.path,
      assetManifest:  assetManifest
    }));
  });
});

server.use(mount('/', AppRouter.middleware()));
server.listen(process.env.PORT || 8001);
