var gulp           = require('gulp');
var browserifyTask = require('./browserify');

gulp.task('watchify', function(callback) {
  // start browserify task with devMode == true
  browserifyTask(callback, true);
});
