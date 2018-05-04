const gulp = require('gulp');
const sass   = require('gulp-sass');
const del    = require('del');
const concat = require("gulp-concat");
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');

const paths = {
  scss: [
    'app/scss/**/*.scss',
  ],
  js: [
    'node_modules/foundation-sites/dist/js/foundation.js',
    'node_modules/motion-ui/dist/motion-ui.js',
    'app/js/**/*',
  ],
};

/* Watch Sass and JS */
gulp.task('default', () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['copy']);
});

/* Build */
gulp.task('build', ['clean', 'copy', 'sass'], () => {});

/* Clean */
gulp.task('clean', () => {
  return del.sync('dist');
});

/* Copy JS */
gulp.task('copy', () => {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat('scions.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js/'));
});

/* Compile Sass */
gulp.task('sass', () => {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['node_modules/foundation-sites/scss','node_modules/motion-ui/src'],
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(autoprefixer({ cascade:false }))
    .pipe(concat('scions.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});
