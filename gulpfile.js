require("coffee-script/register");
require("./gulpfile.coffee");

var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');

var path = {
  HTML: 'index.html',
  ALL: ['app/scripts/*.js', 'index.html'],
  JS: ['app/scripts/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

gulp.task('transform', function(){
  gulp.src(path.JS)
  .pipe(react())
  .pipe(gulp.dest(path.DEST_SRC));
});

/*gulp.task('default', function () {
  return gulp.src('template.jsx')
  .pipe(react())
  .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  gulp.src('src/js/App.js')
  .pipe(browserify({
    insertGlobals : true,
  }))
  .pipe(gulp.dest('/scripts/builds'))
});*/
