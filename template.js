'use strict';

exports.description = 'Create a puppet standalone directory';

exports.notes = '';

exports.after = '';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {
    init.process({}, [

    ], function(err, props) {
      prop.keywords = [];
      prop.devDependencies = {

      };

      var files = init.filesToCopy(props);
      init.copyAndProcess(files, props);
      done();
    });
};
