    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var sourcemaps = require('gulp-sourcemaps');
    var browserSync = require('browser-sync').create();
    gulp.task('sass', function () {
        return gulp.src('src/scss/styles.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(autoprefixer())
            .pipe(gulp.dest('src/css'))
            .pipe(browserSync.reload({
                stream: true
            }));
    });
    gulp.task('browserSync', function () {
        browserSync.init({
            server: {
                baseDir: './'
            },
        })
    })
    gulp.task('watch', ['browserSync', 'sass'], function () {
        gulp.watch('src/scss/**/*.scss', ['sass']);
        gulp.watch('src/*.html', browserSync.reload);
        gulp.watch('src/js/**/*.js', browserSync.reload);
    });
    gulp.task('default', ['watch']);