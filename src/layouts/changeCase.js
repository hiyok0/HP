'use strict';

module.exports = function changeCase(text, toCase){
	return (toCase === "upper" ? text.toUpperCase() : text.toLowerCase());
}
