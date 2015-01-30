var gulp = require('gulp');
// minify later
// add source maps?

gulp.task('build:development:css', ['stylus'], function() {
  return gulp.src('./build/css/*.css')
    .pipe(gulp.dest('./build/assets'));
});
