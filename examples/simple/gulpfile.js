var gulp = require('gulp');
var to5 = require('gulp-6to5');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('to5', function () {
  return gulp.src('./src/*.js')
    .pipe(to5())
    .pipe(gulp.dest('./to5/'))
  ;
});

gulp.task('build', ['to5'], function () {
  var bundler = browserify('./to5/main.js', {debug: true});
  bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./js/'))
  ;
});

