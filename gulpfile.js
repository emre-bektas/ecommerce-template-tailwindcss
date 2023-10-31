import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import browserSync from 'browser-sync';
import data from 'gulp-data';
import image from "gulp-image";

// Örnek görev
gulp.task('copy-html', function() {

    return gulp.src("src/*.html")
        .pipe(data(function(file) {
            const filename = file.path.split('/').pop();
            const page = filename.split('.')[0];
            return {
                page
            };
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
        }))
        .pipe(gulp.dest('dist'))
});
gulp.task('copy-pages', function() {

    return gulp.src("src/pages/**/*.html")
        .pipe(data(function(file) {
            const filename = file.path.split('/').pop();
            const page = filename.split('.')[0];
            return {
                page
            };
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
        }))
        .pipe(gulp.dest('dist/pages'))
});
// CSS dosyalarını kopyala
gulp.task('copy-css', function() {
    return gulp.src('src/assets/css/**/*.css')
        .pipe(gulp.dest('dist/css'))
});
// JavaScript dosyalarını kopyala
gulp.task('copy-js', function() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
});
gulp.task('copy-image', function() {
    return gulp.src('src/assets/images/*')
        .pipe(image())
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('copy', gulp.parallel('copy-html', 'copy-pages', 'copy-css', 'copy-js'));

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    //gulp
    // gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/**/*.{js,css,less,html}").on('change', browserSync.reload);

    gulp.watch("src/**/*.html" , gulp.series(["copy-html" , "copy-pages"]));
    gulp.watch("src/**/*.css" , gulp.series('copy-css'));
    gulp.watch("src/**/*.js" , gulp.series('copy-js'));
    //gulp.watch("src/**/*.{png,jpg,jpeg,svg}" , gulp.series('copy-image'));
});

gulp.task('default', gulp.series('copy', 'watch'));
