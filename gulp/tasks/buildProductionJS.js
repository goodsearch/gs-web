var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rev    = require('gulp-rev');

// prerequisites
require('./browserify.js');

gulp.task('build:production:js', ['browserify'], function() {
  return gulp.src('build/js/*.js')
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./build/assets'))
    .pipe(rev.manifest('manifest.json', { merge: true }))
    .pipe(gulp.dest('./build/assets'));
});
