const reader = new FileReader();
const viewer = {
	"bodyElement": document.getElementsByTagName("body")[0],
	"elementForComments": document.createElement("div"),
	"fragmentForComments": document.createDocumentFragment(),
	"main": function(data){
		document.getElementById("dropzone").setAttribute("style", "display: none");//ここにドロップを消す
		for(const comment of data){
			const commentElement = document.createElement("div");
			const textElement = document.createElement("div");
			const img = document.createElement("img");
			img.classList.add("col");
			textElement.classList.add("col");
			commentElement.classList.add("row", "container");
			
			//テキストデータ
			const service = document.createElement("div");
			const url = document.createElement("A");
			const liveId = document.createElement("div");
			const userId = document.createElement("div");
			const screenName = document.createElement("div");
			const commentText = document.createElement("div");
			const misc = document.createElement("div");
			const color = document.createElement("div");
			
			//中身を設定
			img.setAttribute("src", comment.data.profileImage);
			img.setAttribute("style", "display: block;");
			img.setAttribute("width", "128px");
			service.textContent = "Service: "+comment.service;
			url.textContent = comment.url;
			url.setAttribute("href", comment.url);
			url.setAttribute("style", "display: block;");
			liveId.textContent = "Live ID: "+comment.data.liveId;
			userId.textContent = "User ID: "+comment.data.userId;
			screenName.textContent = comment.data.name;
			commentText.innerHTML = comment.data.comment;
			misc.textContent = `hasGift: ${comment.data.hasGift}　 　isOwner: ${comment.data.isOwner}　 　isModerator: ${comment.data.isOwner}　 　isMember: ${comment.data.isMember}`;
			color.innerHTML = `rgb(${comment.color.r}, ${comment.color.g}, ${comment.color.b})　<span style="color:rgb(${comment.color.r},${comment.color.g},${comment.color.b}); font-size: 2em;">■</span>`
			
			//fragmentに追加
			for(const element of [service, url, liveId, userId, screenName, commentText, misc, color]){
				textElement.appendChild(element);
			}
			for(const element of [img, textElement]){
				commentElement.append(element);
			}
			viewer.fragmentForComments.append(commentElement);
		}
		viewer.elementForComments.classList.add("viewer");
		viewer.bodyElement.append(viewer.elementForComments);
		viewer.elementForComments.append(viewer.fragmentForComments);
	}
}
viewer.bodyElement.classList.add("container");

//drop
document.getElementById("dropzone").addEventListener("dragover", function () {
	event.preventDefault();
	this.style.backgroundColor = "lightgoldenrodyellow";
});
document.getElementById("dropzone").addEventListener("dragleave", function () {
	this.style.backgroundColor = "";
})
document.getElementById("dropzone").addEventListener("drop", function () {
	event.preventDefault();
	this.style.backgroundColor = "#b3ffe6";
	if (event.dataTransfer.files.length > 0) {
		document.getElementById("controller").style.display = "block";
		document.getElementById("userfile").files = event.dataTransfer.files;
		document.getElementById("userfile").onchange();
	}
});

//click
document.getElementById("dropzone").addEventListener("click", function () {
	event.preventDefault();
	document.getElementById("userfile").click();
});
const sort = {
	"lowToHigh": function(){
		sort.sort(true);
	},
	"highToLow": function(){
		sort.sort(false);
	},
	"sort": function(sort){
		document.getElementById("overwriteCss").textContent = ".viewer{flex-direction: " + [ sort ? "column" : "column-reverse" ] + "}";
	}
}

//read file
document.getElementById("userfile").onchange = function () {
	reader.onload = () => {
		//console.log(reader.result);	
		viewer.main(JSON.parse(reader.result).comments);
	}
	reader.readAsText(this.files.item(0));
}
