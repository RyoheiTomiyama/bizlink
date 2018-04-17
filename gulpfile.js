var gulp = require('gulp');
var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var browserSync = require("browser-sync");
var watch = require('gulp-watch');

//setting : paths
var paths = {
  'scss': './src/sass/',
  'css': './dist/css/',
  'pug': './src/pug/',
  'html': './dist/',
  'js': './dist/js/'
}
//setting : Sass Options
var sassOptions = {
  outputStyle: 'compressed'
}
//setting : Pug Options
var pugOptions = {
  // pretty: true
}

//Sass
gulp.task('scss', function () {
  gulp.src(paths.scss + '**/*.scss')
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sass(sassOptions))
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
      cascade: false,
    }))
    .pipe(gulp.dest(paths.css))
});

//Pug
gulp.task('pug', () => {
  return gulp.src([paths.pug + '**/*.pug', '!' + paths.pug + '**/_*.pug'])
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(pug(pugOptions))
    .pipe(gulp.dest(paths.html));
});

//Browser Sync
gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: paths.html
    }
  });
  watch(paths.js + "**/*.js", function(){
    gulp.start('reload');
  });
  watch(paths.html + "**/*.html", function(){
    gulp.start('reload');
  });
  watch(paths.css + "**/*.css", function(){
    gulp.start('reload');
  });
});
gulp.task('reload', () => {
  browserSync.reload();
});

//watch
gulp.task('watch', function () {
  watch(paths.scss + '**/*.scss', function() {
    gulp.start('scss');
  });
  watch([paths.pug + '**/*.pug', '!' + paths.pug + '**/_*.pug'], function() {
    gulp.start('pug');
  });
});

gulp.task('default', ['browser-sync', 'watch']);