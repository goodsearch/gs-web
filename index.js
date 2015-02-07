require('node-jsx').install({ extension: '.jsx' });

var koa      = require('koa');
var thunkify = require('thunkify');
var static   = require('koa-static');
var router   = require('koa-router');
var mount    = require('koa-mount');
var request  = require('superagent-promise');
var React    = require('react');
var _        = require('lodash');
var server   = koa();

var Template = React.createFactory(require('./src/components/Template.jsx'));

var LandingPage = React.createFactory(
  require('./src/components/pages/LandingPage.jsx')
);

var apiUrl = process.env.API_URL || 'localhost:8000';

server.use(static('build/assets'));
server.use(mount('/lp', static('build/assets')));

var AppRouter = new router();

AppRouter.get('/lp/:name', function *() {
  var path = apiUrl + '/landing-pages/' + this.params.name + '.json';
  var apiResponse = yield request.get(path).end()

  if (apiResponse.body.page) {
    var page = LandingPage({ page: apiResponse.body.page });
    this.body = React.renderToString(Template({}, page));
  }
});

server.use(mount('/', AppRouter.middleware()));
server.listen(process.env.PORT || 8001);

// digestable bits for admin
module.exports.blockSelector = require('./src/components/blocks/blockSelector.js');
module.exports.HeroBlock = require('./src/components/blocks/HeroBlock.jsx');
module.exports.ListBlock = require('./src/components/blocks/ListBlock.jsx');
