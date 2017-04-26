const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const conf = require('./conf/gulp.conf');

gulp.registry(new HubRegistry([
  conf.path.tasks('*.js')
]));

gulp.task('watch', done => {
  gulp.watch(conf.path.tmp('index.html'), cb => {
    browserSync.reload();
    cb();
  });
  done();
});

gulp.task('default', gulp.series('clean', 'build'));
gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
