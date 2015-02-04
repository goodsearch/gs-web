var gulp        = require('gulp');
var runSequence = require('run-sequence');

require('./buildClean.js');

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
