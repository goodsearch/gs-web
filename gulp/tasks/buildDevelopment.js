var gulp = require('gulp');
var rev  = require('gulp-rev');

gulp.task('build:development', [
  'build:development:js',
  'build:development:images',
  'build:development:css'
], function() {
  return gulp.src('./build/assets/**/*')
    .pipe(rev())
    .pipe(gulp.dest('./build/assets'))
    .pipe(rev.manifest('manifest.json'))
    .pipe(gulp.dest('./build/assets'));
});
