var gulp = require('gulp');
// uglify later

gulp.task('build:development:js', ['browserify'], function() {
  return gulp.src('./build/js/*.js')
    .pipe(gulp.dest('./build/assets'));
});
