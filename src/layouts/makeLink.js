'use strict';

const moment = require('moment');
module.exports = function makeLink(link, date, title){
	return `/${((link === "page") ? "pages" : "blog/" + moment(date).format("YYYY"))}/${title.toLowerCase()}`;
}
