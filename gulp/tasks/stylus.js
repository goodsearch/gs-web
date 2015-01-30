var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').stylus;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('stylus', function() {
  return gulp.src(config.src)
    .pipe(stylus(config.settings))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('stylus:production', function() {
  return gulp.src(config.src)
    .pipe(stylus(config.settings))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest));
});
