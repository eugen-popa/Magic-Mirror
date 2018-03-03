var moment = require('moment');
var APPID = "61f94a9fa8130d49c23ed0f74d7e97af";

var celsius, fahrenheit, loc, icon, humidity, windK, windM, direction, city, sunset, sunrise;

function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);    
            
            console.log(data);
            
            var weather = {};    
                weather.icon = data.weather[0].icon;
                weather.humidity = data.main.humidity;
                weather.windK = KM(data.wind.speed); // this is for km
                weather.windM = data.wind.speed;  //this is for miles
                weather.loc = data.name;
                weather.celsius = KtoC(data.main.temp);
                weather.fahrenheit = KtoF(data.main.temp);
                weather.sunset = min(data.sys.sunset);
                weather.sunrise = min(data.sys.sunrise);
                weather.direction = degreesToDirection(data.wind.deg);
            
            update(weather);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function updateByCityName(name) {
     var url = "http://api.openweathermap.org/data/2.5/weather?"+
        "q="+name+
        "&APPID="+APPID;
    sendRequest(url);
}

function min(sec){
    var data = new Date(sec * 1000);
    var time = data.toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
    return time;
}

function degreesToDirection(degres){
    var range = 360/8;
    var low = 360 - range;
    var high = (low + range) % 360;
    var angles = ["N", "NE", "E", "ES", "S", "SW", "W", "NW"];
    
    for (var i = 0; i < angles.length; i++){
        
        if (degres >= low && degres < high){
            return angles[i];
        }
        low = (low + range) % 360;
        high = (high + range) % 360;
    }
    return "N"
}

function KtoC(k) {
    return Math.round(k - 273.15);
}

function KtoF(k) {
    return Math.round(k*(9/5)-459.67);
}

function KM(km){
    
    var rez = km / 5;
    var min = km - rez;
    var total = (min * 2);
    return total.toFixed(1)
}

function update(weather){
    
    celsius.innerHTML = weather.celsius;
    fahrenheit.innerHTML = weather.fahrenheit;
    loc.innerHTML = weather.loc;
    icon.src = "img/icons/" + weather.icon + '.png';
    humidity.innerHTML = weather.humidity;
    windK.innerHTML = weather.windK;
    windM.innerHTML = weather.windM;
    direction.innerHTML = weather.direction;
    sunset.innerHTML = weather.sunset;
    sunrise.innerHTML = weather.sunrise;
}

function citys(){
    celsius = document.getElementById('celsius');
    fahrenheit = document.getElementById('fahrenheit');
    loc = document.getElementById('location');
    icon = document.getElementById('icon');
    humidity = document.getElementById('humidity');
    windK = document.getElementById('windK');
    windM = document.getElementById('windM')
    direction = document.getElementById('direction');
    sunrise = document.getElementById('sunrise');
    sunset = document.getElementById('sunset');
    
    city = document.getElementById('city').value || 'fremont';
    
    updateByCityName(city);
}

































































