'use strict';

var fs = require('fs');
//TODO remove line 5
var UglifyJS = require('uglify-js');

// Export helpers
module.exports.register = function (Handlebars, opt, params)  {
  // The helpers to be exported
  var helpers = {

    snippetPath: function (snippetId, snippetLang) {
      return 'source/site/code-snippets/' + snippetId + '.' + snippetLang || 'js';
    },

    exampleCode: function(exampleId) {
      return new Buffer(fs.readFileSync('source/site/examples/' + exampleId + '.js', {
        encoding: 'utf8'
      }), 'utf8').toString('base64');
    }
  };

  opt = opt || {};
  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
