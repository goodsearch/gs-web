var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var config = require('../config').nodemon;

gulp.task('nodemon', function() {
  return nodemon({
    script:   config.script,
    execMap:  { js: 'node --harmony' }
  });
});
