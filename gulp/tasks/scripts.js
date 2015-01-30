var gulp     = require('gulp'),
    concat   = require('gulp-concat'),
    config   = require('../config'),
    uglify   = require('gulp-uglify');

var paths = ['app/frontend/scripts/**/*.js'];

// compile, minify and uglify vendor libraries
gulp.task('scripts', function() {
  return gulp.src(paths)
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist/scripts'))
  ;
});
