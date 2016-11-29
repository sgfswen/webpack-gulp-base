var connect = require('gulp-connect');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
var gulp = require('gulp');

gulp.task('easy_webpack',function(){
    gulp.src('./src/main.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./dest/'))
});

gulp.task('dev', ['easy_webpack']);