const gulp = require('gulp');

module.exports = function () {
  	var buildHtml = gulp.src([
		'app/public_html/*.html',
		]).pipe(gulp.dest('dist'));

    var buildPostCss = gulp.src([
        'app/assets/postcss/**/*',
    ]).pipe(gulp.dest('dist/css'));

	var buildCss = gulp.src([
		'app/assets/css/**/*',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/assets/js/**/*.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/assets/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

	var buildImg = gulp.src([
		'app/assets/img/**/*',
		]).pipe(gulp.dest('dist/img'));
};