const gulp          = require('gulp'),
	  browserSync   = require('browser-sync'),
	  concat        = require('gulp-concat'),
	  uglify        = require('gulp-uglify');

module.exports = function () {
  	return gulp.src([
		'app/assets/js/main.js'
		])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/assets/js'))
	.pipe(browserSync.reload({ stream: true }))
};