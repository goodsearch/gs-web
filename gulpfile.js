if (process.env.NODE_ENV === 'production') { // only require production tasks
  require('./gulp/tasks/buildProduction.js');
} else { // load all tasks
  var requireDir = require('require-dir');
  requireDir('./gulp/tasks', { recurse: true });
}
