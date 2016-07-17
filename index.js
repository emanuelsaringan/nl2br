'use strict';

module.exports = function(str, isXhtml) {
  var breakTag = isXhtml ? '<br />' : '<br>';
  return String(str).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
};
