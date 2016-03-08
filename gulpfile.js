"use strict";
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
//var babelify = require('babelify');
//var reactify = require('reactify');

var path = {
  HTML: 'index.html',
  ALL: ['app/scripts/*.js', 'index.html'],
  JS: ['app/scripts/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'dist/src',
  DEST_BUILD: 'dist/build',
};


gulp.task('browserify', function() {
  gulp.src('app/scrips/App.js')
  .pipe(browserify({transform: ['babelify', 'reactify']}))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('transform', function(){
  gulp.src('template.jsx')
  //.pipe(react())
  .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('default',['browserify', 'copy', 'transform']);

gulp.task('watch', function() {
  gulp.watch('app/**/*.*', ['default']);
});

/*var gulp = require('gulp');
var react = require('gulp-react');
//var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var gutil = require('gulp-util');

gulp.task('default', function () {
  return gulp.src('template.jsx')
  .pipe(react())
  .pipe(gulp.dest('dist'));
});


gulp.task('build', function(){
  gulp.src(template.jsx)
  .pipe(react())
  .pipe(concat(path.MINIFIED_OUT))
  .pipe(uglify(path.MINIFIED_OUT))
  .pipe(gulp.dest(path.DEST_BUILD))
  .pipe(uglify().on('error', gutil.log));
});

gulp.task('default', ['transform', 'build']);
/*------------------------------------------
 *
 * gulp.task('copy', function(){
  gulp.src(path.HTML)
  .pipe(gulp.dest(path.DEST));
});


gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
  .pipe(htmlreplace({
    'js': 'build/' + path.MINIFIED_OUT
  }))
  .pipe(gulp.dest(path.DEST));
});


gulp.task('production', ['replaceHTML', 'build']);*/
