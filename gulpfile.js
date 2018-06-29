    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var sourcemaps = require('gulp-sourcemaps');
    var browserSync = require('browser-sync').create();
    var imagemin = require('gulp-imagemin');
    var cleanCSS = require('gulp-clean-css');
    gulp.task('minify-css', function () {
        return gulp.src('app/css/*.css').pipe(cleanCSS({
            compatibility: 'ie8'
        })).pipe(gulp.dest('dist'));
    });
    gulp.task('sass', function () {
        return gulp.src('app/scss/styles.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write())
            .pipe(autoprefixer())
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({
                stream: true
            }));
    });
    gulp.task('browserSync', function () {
        browserSync.init({
            server: {
                baseDir: 'app'
            },
        })
    })
    gulp.task('watch', ['browserSync', 'sass'], function () {
        gulp.watch('app/scss/**/*.scss', ['sass']);
        gulp.watch('app/*.html', browserSync.reload);
        gulp.watch('app/js/**/*.js', browserSync.reload);
    });
    //    gulp.task('images', function () {
    //        return gulp.src('app/images/**/*.+(png|jpg|svg)').pipe(imagemin()).pipe(gulp.dest('dist/images'))
    //    });