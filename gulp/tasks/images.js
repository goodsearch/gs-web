var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var config      = require('../config').images;

gulp.task('images', function() {
  if (process.env.NODE_ENV == 'production') {
    return gulp.src(config.src)
      .pipe(imagemin())
      .pipe(gulp.dest(config.dest))
  } else {
    var browserSync = require('browser-sync');
    var changed     = require('gulp-changed');

    return gulp.src(config.src)
      .pipe(changed(config.dest)) // ignore unchanged files
      .pipe(imagemin())
      .pipe(gulp.dest(config.dest))
      .pipe(browserSync.reload({ stream: true }));
  }
});
