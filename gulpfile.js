var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');

var path = {
  HTML: 'index.html',
  ALL: ['scripts/*.js', 'srcipts/**/*.js', 'index.html'],
  JS: ['srcipts/*.js', 'srcipts/**/*.js'],
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

gulp.task('copy', function(){
  gulp.src(path.HTML)
  .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
  gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('build', function(){
  gulp.src(path.JS)
  .pipe(react())
  .pipe(concat(path.MINIFIED_OUT))
  .pipe(uglify(path.MINIFIED_OUT))
  .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('default', ['watch']);

gulp.task('production', ['replaceHTML', 'build']);
