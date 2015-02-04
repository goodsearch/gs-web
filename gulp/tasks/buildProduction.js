var gulp        = require('gulp');
var runSequence = require('run-sequence');

require('./buildClean.js');
require('./buildRev.js');
require('./buildProductionJS.js');
require('./buildProductionImages.js');
require('./buildProductionCSS.js');

gulp.task('build:production', function(cb) {
  runSequence(
    'build:clean',
    [ 'build:production:js',
      'build:production:images',
      'build:production:css' ],
    'build:rev',
    cb
  );
});
