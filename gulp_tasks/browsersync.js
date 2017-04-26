const gulp = require('gulp');
const spa = require('browser-sync-spa');
const browserSync = require('browser-sync');
const browserSyncConf = require('../conf/browsersync.conf');
const browserSyncDistConf = require('../conf/browsersync-dist.conf');

browserSync.use(spa());

gulp.task('browsersync', done => {
  browserSync.init(browserSyncConf());
  done();
});

gulp.task('browsersync:dist', done => {
  browserSync.init(browserSyncDistConf());
  done();
});
