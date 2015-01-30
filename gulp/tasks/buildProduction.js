// prerequisites
require('./stylus.js');
require('./images.js');
require('./buildProductionJS.js');

require('gulp').task('build:production', [
  'stylus',
  'images',
  'build:production:js'
]);
