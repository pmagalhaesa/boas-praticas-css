var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var less = require('gulp-less');
var stylus = require('gulp-stylus');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var rimraf = require('rimraf');
var gulpSequence = require('gulp-sequence');


//  MINIFICAR

gulp.task('minify:images', () =>
    gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'))
);


gulp.task('minify:htmlsass', function () {
    return gulp.src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/sass'));
});

gulp.task('minify:htmlless', function () {
    return gulp.src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/less'));
});

gulp.task('minify:htmlstylus', function () {
    return gulp.src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/stylus'));
});

gulp.task('minify:css', function () {
    gulp.src('assets/css/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('minify:less', function () {
    gulp.src('dist/less/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/less/css/'));
});

gulp.task('minify:sass', function () {
    gulp.src('dist/sass/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/sass/css/'));
});

// PRE PROCESSADORES

gulp.task('less', function () {
    return gulp.src('./pre-processadores/less/principal.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./dist/less/css'));
});

gulp.task('sass', function () {
    return gulp.src('./pre-processadores/scss/principal.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/sass/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./pre-processadores/scss/**/*.scss', ['sass']);
});

gulp.task('stylus:compress', function () {
    return gulp.src('./pre-processadores/stylus/principal.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./dist/stylus/css'));
});

// GERAL
gulp.task('limpar', function (cb) {
    rimraf('./dist', cb);
});

gulp.task('build', gulpSequence('limpar', ['minify:htmlsass', 'minify:htmlless', 'minify:htmlstylus', 'minify:images', 'minify:css'], ['sass', 'less', 'stylus:compress'], ['minify:less', 'minify:sass']))
