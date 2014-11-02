"use strict";

var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var clean        = require('gulp-clean');

var staticDir = 'themes/mr-velvet/static';
var sassFile = staticDir + '/scss/main.scss';
var cssDest  = staticDir + '/css';

gulp.task('clean', function() {
	return gulp.src(cssDest, {read: false}).pipe(clean());
});

gulp.task('sass', ['clean'], function () {
    return gulp.src(sassFile)
        .pipe(sass({sourcemap: true, sourcemapPath: '../scss', require: ['susy']}))
        .on('error', function (err) { console.log(err.message); })
		.pipe(autoprefixer({
			browsers: ['> 1%'],
			cascade: false
		}))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function () {
	gulp.watch(staticDir + '/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
