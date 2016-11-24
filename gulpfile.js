/*
|--------------------------------------------------------------------------
| CSS and Javascript file minify by gulp
|--------------------------------------------------------------------------
*/


var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
// Include gulp
var gulp = require('gulp');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');





gulp.task('clean-mainScripts', function () {
    return gulp.src('public/js/*.js', {read: false})
        .pipe(clean());
});
gulp.task('clean-sass', function () {
    return gulp.src('public/css/*.css', {read: false})
        .pipe(clean());
});


// Compile Our Sass
gulp.task('sass', ['clean-sass'], function() {
    return gulp.src('resources/assets/sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css'));
});


// Concatenate & Minify JS
gulp.task('mainScripts', ['clean-mainScripts'], function() {
    return gulp.src([
        'bower_packages/jQuery/dist/jquery.min.js',
        'bower_packages/bootstrap/dist/js/bootstrap.min.js',
        'bower_packages/remodal/dist/remodal.min.js',
        'bower_packages/bootstrap-growl/jquery.bootstrap-growl.min.js',
        'bower_packages/cropper/dist/cropper.min.js',
        'resources/assets/js/main.js'
        
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});


// Final Build
gulp.task('default', function(callback) {
    runSequence('mainScripts','sass',callback);
});

