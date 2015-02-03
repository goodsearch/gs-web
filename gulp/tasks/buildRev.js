var gulp    = require('gulp');
var gutil   = require('gulp-util');
var rev     = require('gulp-rev');
var through = require('through2');
var fs      = require('fs');
var gitRev  = require('git-rev');
var path    = require('path');
var _       = require('lodash');

var removeCopies = function() {
  return through.obj(function(file, enc, cb) {
    this.push(file);

    if (!file.revOrigPath) return cb();

    fs.unlink(file.revOrigPath, function(err) {
      // TODO emit error
      cb();
    });
  });
};

gulp.task('build:rev:copy', function() {
  return gulp.src([
      './build/js/*.js',
      './build/css/*.css',
      './build/images/**/*'
    ])
    .pipe(gulp.dest('./build/assets'));
});

gulp.task('build:rev', ['build:rev:copy'], function() {
  return gulp.src('./build/assets/**/*')
    .pipe(rev())
    .pipe(gulp.dest('./build/assets'))
    .pipe(removeCopies())
    .pipe(rev.manifest('manifest.json'))
    .pipe(gulp.dest('./build/assets'));
});
