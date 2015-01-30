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

var fingerprintManifest = function() {
  var emit = function(manifestFile, enc, cb) {
    var tself = this;

    gitRev.long(function(rev) {
      var file = new gutil.File({
        base: path.join(__dirname, 'build/assets'),
        cwd:  __dirname,
        path: path.join(__dirname, 'build/assets/manifest-' + rev + '.js')
      });

      var data = _.merge(JSON.parse(manifestFile.contents), { rev: rev });

      file.contents = new Buffer(
        "var assetManifest = " + JSON.stringify(data) + ";" +
        "if (typeof window === 'undefined') module.exports = assetManifest;"
      );

      tself.push(file);
      return cb();
    });
  };

  return through.obj(emit);
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
    .pipe(rev.manifest())
    .pipe(fingerprintManifest())
    .pipe(gulp.dest('./build/assets'));
});
