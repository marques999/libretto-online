const conf = require('./gulp.conf');

module.exports = () => {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ]
    },
    open: false
  };
};
