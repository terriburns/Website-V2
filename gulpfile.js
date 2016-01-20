require("coffee-script/register");
require("./gulpfile.coffee");

var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function () {
  return gulp.src('template.jsx')
  .pipe(react())
  .pipe(gulp.dest('dist'));
});
