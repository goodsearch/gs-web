var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:development', function(cb) {
  runSequence(
    'build:clean',
    [ 'build:development:js',
      'build:development:images',
      'build:development:css' ],
    'build:rev',
    cb
  );
});
