const markoAwaitTag = require('marko/taglibs/async/await-tag');

module.exports = function(input, out) {
  input.timeout = input.timeout || 30000;
  markoAwaitTag(input, out);
};
