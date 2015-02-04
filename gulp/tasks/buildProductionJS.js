var gulp   = require('gulp');
var uglify = require('gulp-uglify');

require('./browserify.js');

gulp.task('build:production:js', ['browserify'], function() {
  return gulp.src('build/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets'));
});
