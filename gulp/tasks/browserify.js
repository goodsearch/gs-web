var gulp         = require('gulp');
var browserify   = require('browserify');
var reactify     = require('reactify');
var transform    = require('vinyl-transform');
var bundleLogger = require('../util/bundleLogger');

var production = process.env.NODE_ENV === 'production';

gulp.task('browserify', function () {
  if (production) {
    var browserifyOpts = {};
  } else {
    var browserifyOpts = {
      debug:         true,
      cache:         {},
      packageCache:  {},
      fullPaths:     true
    };
  }

  var b = browserify(browserifyOpts).transform(reactify);

  var browserified = transform(function (filename) {
    b.add(filename);
    return b.bundle();
  });

  return gulp.src('./src/app.js')
    .pipe(browserified)
    .pipe(gulp.dest('./build/js'));
});
