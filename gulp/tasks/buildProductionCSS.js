var gulp = require('gulp');
// minify later

require('./stylus.js');

gulp.task('build:production:css', ['stylus']);
