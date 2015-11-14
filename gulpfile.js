var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config'),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync',['webpack'], function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
});

gulp.task('webpack',function () {
    return gulp.src('./src/*/*.**')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'))
});

gulp.task('dev-serve', ['browser-sync'],function () {
    gulp.watch('src/*/**.*',['webpack']);
    gulp.watch('dist/*.**',function(){
        browserSync.reload();
        console.log('watching ...');
    });
});


