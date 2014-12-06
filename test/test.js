var gulp = require('gulp');
var should = require('should');
var jsx = require('../');
var fs = require('fs');
var react = require('react-tools');
var through = require('through2');
require('mocha');

describe('gulp-jsxtransform', function() {
  var filename = __dirname + '/fixture/hello.jsx';

  it('should transform my file', function (done) {
    gulp.src(filename)
      .pipe(jsx())
      .pipe(through.obj(function (file, enc, cb) {
        var source = fs.readFileSync(filename);

        file.contents.toString('utf8').should.equal(react.transform(source.toString()));
        done();
      }));
  });

  it('should pass through if it is not a buffer', function (done) {
    gulp.src(filename)
      .pipe(jsx())
      .pipe(through.obj(function (file, enc, cb) {
        done();
      }));
  });
});
