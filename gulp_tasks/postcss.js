var
    gulp            = require('gulp'),
    postcss         = require('gulp-postcss'),
    cssnano         = require('cssnano'),
    short           = require('postcss-short'),
    assets          = require('postcss-assets'),
    easyImport      = require('postcss-easy-import'),
    fontMagician    = require('postcss-font-magician'),
    cssMqpacker     = require('css-mqpacker'),
    precss          = require('precss'),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    notify          = require('gulp-notify'),
    reporter        = require('postcss-browser-reporter'),
    stylelint       = require('stylelint'),
    stylelintConfig = require('../stylelintrc.config'),
    browserSync     = require('browser-sync').create();

var processors = [

    stylelint(stylelintConfig),
    precss(),
    easyImport(),
    assets({
        loadPaths: ['app/img/'],
        relativeTo: 'app/dest/'
    }),
    fontMagician({
        variants: {
            'Roboto': {
                '300': ['woff2'],
                '400 italic': ['woff2']
            }
        }
    }),
    cssMqpacker(),
    short(),
    reporter({
        selector: 'body:before'
    }),
    cssnano()

];

module.exports = function () {
    return gulp.src('app/postcss/main.css')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('app/dest'))
        .pipe(browserSync.stream());
};