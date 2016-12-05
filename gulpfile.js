var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
    sass: ['./app/scss/**/*.scss'],
    js: ['./app/js/**/*.js']
};

gulp.task('default', ['scripts', 'browser-sync', 'sass', 'watch']);
gulp.task('build', ['sass', 'scripts']);


gulp.task('scripts', function () {
    gulp.src('./app/js/index.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .on('error', function(err){
            console.log(err.message);
        })
        .pipe(rename('app.js'))
        .pipe(gulp.dest('./js'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./js'))
});

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function (done) {
    gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(prefix("last 2 version", "> 1%", "ie 9", "ie 8"))
        .pipe(gulp.dest('./app/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./app/css/'))
        .on('end', done);
});


gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['scripts']);
    gulp.watch([
        './**/*.html',
        './app/js/**/*.js',
        './app/scss/**/*.scss'
    ]).on('change', browserSync.reload);
});