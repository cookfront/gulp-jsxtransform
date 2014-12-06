# gulp-jsxtransform

Use `react-tools` to transform 'jsx' file.

## Install

```c
npm install --save gulp-jsxtransform

npm install gulp-jsxtransform
```

## Usage

```c
var jsx = require('gulp-jsxtransform');

gulp.task('jsx', function () {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jsx())
    .pipe(gulp.dest('./build/scripts/'));
});

// or ues before jshint
gulp.task('jshint', function () {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jsx())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
```