const del = require('del');
const path = require('path');
const gulp = require('gulp');
const filter = require('gulp-filter');
const conf = require('../conf/gulp.conf');

gulp.task('clean', () => {
  return del([conf.paths.dist, conf.paths.tmp]);
});

gulp.task('other', () => {
  return gulp.src([
      path.join(conf.paths.src, '/**/*'),
      path.join(`!${conf.paths.src}`, '/**/*.{scss,ts,html}')
    ])
    .pipe(filter(file => file.stat.isFile()))
    .pipe(gulp.dest(conf.paths.dist));
});
