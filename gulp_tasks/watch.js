const gulp 			= require('gulp'),
	  browserSync   = require('browser-sync');

module.exports = function () {
    gulp.watch('app/assets/postcss/**/*.css', ['postcss']);
    gulp.watch('app/assets/js/main.js', ['js']);
    gulp.watch(['app/public_html/components/*.html', 'app/public_html/pages/*.html']).on('change', browserSync.reload);
};