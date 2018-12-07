// vars ========================================
    var
        gulp            = require('gulp'),
        browserSync     = require('browser-sync').create(),
        del 			= require('del'),
        requireDir 	    = require('require-dir'),
        tasks 		    = requireDir('./gulp_tasks');

// tasks ========================================

gulp.task('browser-sync', tasks.browserSync);
gulp.task('postcss', tasks.postcss);
gulp.task('js', tasks.js);
gulp.task('removedist', tasks.removedist);
gulp.task('fileinclude', tasks.fileinclude)
gulp.task('build', ['removedist', 'fileinclude', 'postcss', 'js'], tasks.build);
gulp.task('watch', ['fileinclude', 'js', 'postcss', 'browser-sync'], tasks.watch);
gulp.task('default', ['watch']);