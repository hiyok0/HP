const emailToRuby = {
	ruby: {},
	convert: function(){
		const email = document.getElementById("email");
		const katakana = document.getElementById("emailRuby");
		const message = document.getElementById("message");
		if(!email.validity.valid){
			message.textContent = "無効な形式と判定されています。";
			return false;
		}
		if(!email.value.length){
			message.textContent = "入力されていません。";
			return false;
		}
		message.textContent = "";
		const ruby = [];
		for(const str of email.value.split("")){
			const index = emailToRuby.ruby.text.indexOf(str);
			ruby.push((index < 0) ? str : emailToRuby.ruby.ruby[index]);
		}
		katakana.textContent = ruby.join("・").replaceAll("・@・", "@");
	}
}
fetch("/assets/mailaddressRuby/ruby.json").then(res => {res.json().then(parsed => {emailToRuby.ruby = parsed;});});

const birthday = {
	days: [
		{month:"９",day: "５"},
		{month:"１",day: "３１"},
		{month:"１２",day: "１"},
		{month:"２",day: "１８"},
		{month:"６",day: "２３"},
		{month:"１２",day: "２２"},
		{month:"３",day: "１７"},
		{month:"４",day: "１６"},
		{month:"８",day: "１５"},
		{month:"１０",day: "１２"},
		{month:"７",day: "２５"}
	],
	change: function(){
		const date = birthday.days[Math.floor(Math.random() * birthday.days.length)];
		document.getElementById("birthdate").textContent =`西暦２０２０年${date.month}月${date.day}日`;
	}
}
window.onload = function(){
	document.getElementById("birthdateRow").addEventListener("mouseover", birthday.change);
	birthday.change();
}
