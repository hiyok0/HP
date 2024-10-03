const editors = {};
(function(){
	const elements = document.getElementsByClassName("kellEditor");
	for(let i = 0; i < elements.length; i++){
		const container = kell(elements[i].id, elements[i]);
		const editor = container.getElementsByTagName("textarea")[0];
		if(container.id){editors[container.id] = editor;}
		editor.style.tabSize = 4;
		editor.onkeydown = function(event){
			if(event.keyCode != 9){return;}
			event.preventDefault();
			const pos = this.selectionStart;
			this.setRangeText("\t",pos, pos , "end")
			this.selectionEnd = pos + 1;
		}
	}
})();

const inputElements = {
	autosave: document.getElementById("ui-checkbox-clipboard-autosave"),
	copyButton: document.getElementById("ui-button-saveto-clipboard"),
	isVerticalHeavy: document.getElementById("ui-checkbox-vertical-heavy"),
	isHorizontalHeavy: document.getElementById("ui-checkbox-horizontal-heavy"),
	branchOffset: document.getElementById("ui-number-branch-offset"),
	branchLength: document.getElementById("ui-number-branch-length"),
	getValidNumber: function(elementName){
		return Math.min(Math.max(inputElements[elementName].value, inputElements[elementName].getAttribute("min")), inputElements[elementName].getAttribute("max")) || inputElements[elementName].getAttribute("value").toString(10)
	}
}

const tree = {
	parseIndent: function(text){
		const lines = text.trim().split("\n");
		const data = [];
		for(const line of lines){
			const matched = line.match(tree.lineRegexp)
			if(!matched[2]){continue;}
			data.push({
				depth: matched[1].length,
				content: matched[2]
			});
		}
		return data;
	},
	makeAa: function(data){
		const lines = [];
		const reservedDepthes = [];
		const parts = tree.parts[(inputElements.isVerticalHeavy.checked ? "heavy" : "light")][(inputElements.isHorizontalHeavy.checked ? "heavy" : "light")];
		const space = {
			blank: "",
			pass: "",
			offset: "",
			straight: ""
		};
		(function(num){
			for(let i = 0; i < (num.offset + num.branch + 1); i++){space.blank = space.blank + "　";}
			for(let i = 0; i < num.offset; i++){space.pass = space.pass + "　";}
			space.offset = space.pass + "";
			space.pass = space.pass + parts.vertical;
			for(let i = 0; i < num.branch; i++){space.pass = space.pass + "　";}
			for(let i = 0; i < num.branch; i++){space.straight = space.straight + parts.horizontal;}
		})({
			offset: inputElements.getValidNumber("branchOffset"),
			branch: inputElements.getValidNumber("branchLength")
		});
		for(let i = 0; i < data.length; i++){
			if(!data[i].depth){
				lines.push((i ? "\n" : "") + data[i].content);
				continue;
			}
			let line = "";
			for(let j = 1; j < data[i].depth; j++){
				line = line + (reservedDepthes.includes(j) ?  space.pass : space.blank);
			}
			for(let j = i + 1; j < data.length; j++){
				if(data[i].depth === data[j].depth){
					line = line + space.offset + parts.t + space.straight + data[i].content; //┣━━
					if(reservedDepthes[0] === data[i].depth){break;}
					reservedDepthes.unshift(data[i].depth);
					break;
				}
				if((data[i].depth > data[j].depth) || (j >= (data.length - 1))){
					line = line + space.offset + parts.corner + space.straight + data[i].content; //┗━━
					if(reservedDepthes[0] != data[i].depth){break;}
					reservedDepthes.shift();
					break;
				}
			}
			if(i >= data.length - 1){
				line = line + space.offset + parts.corner + space.straight + data[i].content; //┗━━
			}
			lines.push(line);
		}
		return lines.join("\n");
	},
	lineRegexp: /(^\t*)(.*$)/,
	parts: {
		//[vertical][horizontal][shape]
		light: {light: {
			horizontal: "─", vertical: "│", corner: "└", t: "├"
		/*light*/}, heavy: {
			horizontal: "━", vertical: "│", corner: "┕", t: "┝"
		}}, heavy: {light: {
			horizontal: "─", vertical: "┃", corner: "┖", t: "┠"
		/*heavy*/}, heavy: {
			horizontal: "━", vertical: "┃", corner: "┗", t: "┣"
		}},
	}
}

editors.inputArea.addEventListener("input", (function(event){
	editors.outputArea.value = tree.makeAa(tree.parseIndent(editors.inputArea.value));
}));
editors.inputArea.onchange = function(){
	if(inputElements.autosave.checked){inputElements.copyButton.click();}
}
inputElements.isHorizontalHeavy.onclick = function(event){
	editors.outputArea.value = tree.makeAa(tree.parseIndent(editors.inputArea.value));
	editors.inputArea.onchange();
};
inputElements.isVerticalHeavy.onclick = inputElements.isHorizontalHeavy.onclick;
inputElements.branchOffset.onchange = inputElements.isHorizontalHeavy.onclick;
inputElements.branchLength.onchange = inputElements.isHorizontalHeavy.onclick;
inputElements.copyButton.onclick = function(){
	navigator.clipboard.writeText(editors.outputArea.value)
}
inputElements.autosave.onchange = function(){
	if(!inputElements.autosave.checked){return}
	inputElements.copyButton.click();
}
editors.outputArea.readOnly = true;

//for debug
document.getElementById("copyDebugDataToClipboard").onclick = function(){
	navigator.clipboard.writeText(JSON.stringify({
		rawText: editors.inputArea.value,
		result: editors.outputArea.value,
		isVerticalHeavy: inputElements.isVerticalHeavy.checked,
		isHorizontalHeavy: inputElements.isHorizontalHeavy,
		branchOffset: inputElements.branchOffset.value,
		branchLength: inputElements.branchLength.value,
		isAutosaveEnabled: inputElements.autosave.checked
	}));
}
