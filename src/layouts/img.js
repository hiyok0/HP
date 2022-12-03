const sizeof = require("image-size");
const handlebars = require("handlebars");

const img ={
	"main": function(path, alt, loading){
		const dim = sizeof("src/static" + (path.startsWith("/") ? path : "/" + path));
		return img.generateHTML(
			path, 
			dim.height, dim.width, 
			(alt ? alt : img.lazyAlt(path)), 
			(loading ? loading : "lazy")
			);
	},
	"generateHTML": function(path, height, width, alt, loading){
		const html = `<div class="images"><img src="${path}" height="${height}" width="${width}" alt="${alt}" loading="${loading}"></img></div>`
		return new handlebars.SafeString(html);
	},
	"lazyAlt": function(path){
		return path.split("/").slice(-1)[0].split(".").slice(0, -1).join(".").replaceAll("_", " ");
	}
}

module.exports = img.main;
