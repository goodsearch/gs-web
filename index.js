require('node-jsx').install({ extension: '.jsx' });

var koa     = require('koa');
var thunkify = require('thunkify');
var static  = require('koa-static');
var router  = require('koa-router');
var mount   = require('koa-mount');
var request = require('superagent-promise');
var React   = require('react');
var _       = require('lodash');
var server  = koa();

var StaticPage = React.createFactory(
  require('./src/components/pages/StaticPage.jsx')
);

var LandingPage = React.createFactory(
  require('./src/components/pages/LandingPage.jsx')
);

var apiUrl = 'http://localhost:8000'

server.use(static('build/assets'));

var AppRouter = new router();

AppRouter.get('/landing-pages/:name', function *() {
  var path = apiUrl + '/landing-pages/' + this.params.name + '.json';
  var apiResponse = yield request.get(path).end()

  if (apiResponse.body.page) {
    this.body = React.renderToString(StaticPage({
      page:       apiResponse.body.page,
      pageClass:  LandingPage
    }));
  }
});

server.use(mount('/', AppRouter.middleware()));
server.listen(process.env.PORT || 8001);
