'use strict';

module.exports = (str, isXhtml = false) => {
	const breakTag = isXhtml ? '<br />' : '<br>';
	return String(str).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, `$1${breakTag}$2`);
};
