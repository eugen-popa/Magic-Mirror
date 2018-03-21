function moon(obj){
	var gets=[]
	for (var i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}	
	var xmlhttp = new XMLHttpRequest()
	var url ="http://www.icalendar37.net/lunar/api/?"+gets.join("&")
	xmlhttp.onload = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var moon  = JSON.parse(xmlhttp.responseText)
            console.log(moon)
            
	       var day = new Date().getDate()
	       var dayWeek=moon.phase[day].dayWeek
           var img = document.getElementById("moon");
            img.innerHTML = moon.phase[day].svg;
		}
	}
	xmlhttp.open("GET", url)
	xmlhttp.send()
}

document.addEventListener("DOMContentLoaded", function() { 
	var configMoon = {
		lang  		:'en', 
		month 		:new Date().getMonth() + 1, 
		year  		:new Date().getFullYear(),
		size		:90, 
		lightColor	:"#F9CE21", 
		shadeColor	:"#969696", 
		sizeQuarter	:20, 
		texturize	:true 
	}
	configMoon.LDZ=new Date(configMoon.year,configMoon.month-1,1)/1000
	moon(configMoon);
})

