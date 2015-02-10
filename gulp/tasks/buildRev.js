var gulp    = require('gulp');
var gutil   = require('gulp-util');
var rev     = require('gulp-rev');
var through = require('through2');
var fs      = require('fs');
var gitRev  = require('git-rev');
var path    = require('path');
var _       = require('lodash');
var gulpif = require('gulp-if');
var path = require('path');

var production = process.env.NODE_ENV === 'production';

function relPath(base, filePath) {
  if (filePath.indexOf(base) !== 0) {
    return filePath.replace(/\\/g, '/');
  }

  var newPath = filePath.substr(base.length).replace(/\\/g, '/');

  if (newPath[0] === '/') {
    return newPath.substr(1);
  }

  return newPath;
}

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

var devRev = function() {
  return through.obj(function(file, enc, cb) {
    file.revOrigPath = file.path;
    file.revOrigBase = file.base;
    this.push(file);
    cb();
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
    .pipe(gulpif(production, rev()))
    .pipe(gulpif(!production, devRev()))
    .pipe(gulpif(production, gulp.dest('./build/assets')))
    .pipe(gulpif(production, removeCopies()))
    .pipe(rev.manifest('manifest.json'))
    .pipe(gulp.dest('./build/assets'));
});
