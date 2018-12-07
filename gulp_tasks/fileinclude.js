const gulp        = require('gulp'),
      fileinclude = require('gulp-file-include');

module.exports = function () {
    return gulp.src(['app/public_html/pages/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('app/public_html/'));
};