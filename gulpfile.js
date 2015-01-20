var gulp = require('gulp');
var to5 = require('gulp-6to5');

gulp.task('to5', function () {
  return gulp.src('./src/*.js')
    .pipe(to5())
    .pipe(gulp.dest('./dist/'))
  ;
});

gulp.task('default', ['to5']);
