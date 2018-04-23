var gulp = require('gulp');
var path = require('path');

var sass = require('gulp-sass');
var less = require('gulp-less');
var stylus = require('gulp-stylus');

gulp.task('less', function () {
    return gulp.src('./pre-processadores/less/principal.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass', function () {
    return gulp.src('./pre-processadores/scss/principal.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./pre-processadores/scss/**/*.scss', ['sass']);
});



// include, if you want to work with 
//var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus:compress', function () {
    return gulp.src('./pre-processadores/stylus/principal.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./assets/css'));
});