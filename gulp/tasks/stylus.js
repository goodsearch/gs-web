var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var config       = require('../config').stylus;
var autoprefixer = require('gulp-autoprefixer');
var gulpif       = require('gulp-if');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('stylus', function() {
  return gulp.src(config.src)
    .pipe(stylus(config.settings))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({ stream: true }));
});
