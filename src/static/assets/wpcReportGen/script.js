const report = {
	result: "",
	credit: `Made with:chicken:[Word Party Controller レポートジェネレータ](${(location.protocol != "file:" ? location.href : "http://example.com/")})`,
	getRadioValue: function(name){
		const radios = document.querySelectorAll(`[name=${name}]`);
		for(let i = 0; i < radios.length; i++){
			if(radios[i].checked){return radios[i].value;}
		}
		return false;
	},
	generate: function(){
		const reportType = (function(){
			let type = ""
			switch(report.getRadioValue("report-type")){
				case "regular":
					return "正常";
					break;
				case "irregular":
					return "異常";
					break;
				case "other":
					return "その他";
					break;
				default:
					return "";
			}
		})() + "報告" + 
			(function(){
				const misc = document.querySelector("[name='report-type-misc']");
				if(misc.value != ""){
					return `（${misc.value}）`;
				}else{
					return ""
				}
			})();
		const osName = (function(){
			switch(report.getRadioValue("os-name")){
				case "intelMac":
					return "macOS(Intel)";
					break;
				case "armMac":
					return "macOS(ARM)";
					break;
				case "win":
					return "Windows";
					break;
				case "winarm":
					return "Windows 11 ARM";
					break;
				default:
					return "";
			}
		})() + (function(){
			const misc = document.querySelector("[name='os-name-misc']");
			if(misc.value != ""){
				return "　" + misc.value;
			}else{
				return ""
			}
		})();
		const wpcVer = document.querySelector("[name='wpc-ver']").value;
		const onecommeVer = document.querySelector("[name='onecomme-ver']").value;
		const fireTypes = (function(){
			let text = "";
			const checkboxes = document.querySelectorAll("[name='fire-type']");
			for(let i = 0; i < checkboxes.length; i++){
				if(checkboxes[i].checked){text = text + "\n- " + checkboxes[i].value};
			}
			return text;
		})();
		const textDetails = (function(){
			let text = document.querySelector("[name='text-details']").value;
			if( text != "" && text ){
				text = "\n### 詳細 \n" + text;
				return text;
			}else{return "";}
		})();
		return `## ${reportType} \n### OS等 \n${osName} \n### Word Party Controllerのバージョン \n${wpcVer} \n### わんコメのバージョン \n${onecommeVer} \n### 使用した発火方法 ${fireTypes} ${textDetails} \n${report.credit}`;
	},
	reflectToPage: function(){
		report.result = report.generate();
		document.getElementById("result-text").textContent = report.result;
	},
	saveToClipboard: function(){
		navigator.clipboard.writeText(report.result).then(() => {console.log("saved to clipboard!")}).catch(() => {console.error("saving to clipboard is fauled.")});
	}
}

const kesu = {
	check: [],
	value: [],
	clear: function(){
		for(const node of kesu.check){node.checked = false}
		for(const node of kesu.value){node.value = ""}
	}
}

window.onload = function(){
	setInterval(report.reflectToPage, 50);
	kesu.check = (function(){
		const nodes = []
		for(const name of ["report-type", "os-name", "fire-type"]){
			const collection = document.querySelectorAll(`[name=${name}]`);
			for(let i = 0; i < collection.length; i++){nodes.push(collection[i])}
		}
		return nodes;
	})();
	kesu.value = (function(){
		const nodes = []
		for(const name of ["report-type-misc", "os-name-misc", "wpc-ver", "onecomme-ver", "text-details"]){
			const collection = document.querySelectorAll(`[name=${name}]`);
			for(let i = 0; i < collection.length; i++){nodes.push(collection[i])}
		}
		return nodes;
	})();
}
