var gulp = require('gulp');

gulp.task('build:development:images', ['images'], function() {
  return gulp.src('./build/images/**/*')
    .pipe(gulp.dest('./build/assets'));
});
