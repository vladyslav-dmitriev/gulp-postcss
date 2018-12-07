const gulp          = require('gulp'),
	  browserSync   = require('browser-sync'),
	  notify        = require('gulp-notify');

module.exports = function () {
  	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	})
};