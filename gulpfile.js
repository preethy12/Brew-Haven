const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('scss/**/*.scss') // Adjust the source path to your Sass files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css')); // Adjust the destination path to your CSS directory
}

function watchSass() {
  gulp.watch('scss/**/*.scss', compileSass); // Watch for changes in Sass files
}

exports.default = gulp.series(compileSass, watchSass);
