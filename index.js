var through = require('through2');
var reactTools = require('react-tools');
var PluginError = require('gulp-util').PluginError;

module.exports = function (opts) {
  opts = opts || {};

  return through.obj(function (file, enc, cb) {
    // pass through if it is not a buffer
    if (!file.isBuffer()) cb(null, file);

    if (file.isBuffer()) {
      try {
        file.contents = new Buffer(reactTools.transform(file.contents.toString('utf8'), opts));
      } catch (e) {
        return cb(new PluginError('gulp-jsx', e));
      }
    }

    cb(null, file);
  });
};