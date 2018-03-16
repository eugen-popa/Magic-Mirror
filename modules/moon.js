

function load_moon_phases(obj){
	var gets=[]
	for (var i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}	
	var xmlhttp = new XMLHttpRequest()
	var url = "http://www.icalendar37.net/lunar/api/?"+gets.join("&")
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var moon  = JSON.parse(xmlhttp.responseText);
			console.log(moon);
			var img = document.createElement("div");
			img.innerHTML = moon.phase[12].svg;
			document.body.appendChild(img);
		}
	}
	xmlhttp.open("GET", url, true)
	xmlhttp.send()
}
document.addEventListener("DOMContentLoaded", function() { 
	var configMoon = {
		lang  		:'en', // 'ca' 'de' 'en' 'es' 'fr' 'it' 'pl' 'pt' 'ru' 'zh' (*)
		month 		:new Date().getMonth() + 1, // 1  - 12
		year  		:new Date().getFullYear(),
		size		:300, //pixels
		lightColor	:"#F9CE21", //CSS color
		shadeColor	:"#5d5d5d", //CSS color
		sizeQuarter	:20, //pixels
		texturize	:true //true - false
	}
	configMoon.LDZ=new Date(configMoon.year,configMoon.month-1,1)/1000
	load_moon_phases(configMoon)
})


http://www.wdisseny.com/lluna/?lang=en
http://aa.usno.navy.mil/data/docs/api.php#phase