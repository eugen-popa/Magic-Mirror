var url_key = require("./config/config");
var min = require("./modules/sunSetRise");
var moment = require('moment');

var celsius, fahrenheit, loc, icon, humidity, windK, windM, direction, city;

function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);    
            console.log(data);
            
            const locCityName = {}
                  locCityName.lat = data.coord.lat
                  locCityName.lon = data.coord.lon;
            const loc = locCityName.lat + ", " + locCityName.lon;

             min(data.sys.sunrise, loc, 'sunrise');
             min(data.sys.sunset, loc, 'sunset');
            
            var weather = {};    
                weather.icon = data.weather[0].icon;
                weather.humidity = data.main.humidity;
                weather.windK = KM(data.wind.speed); // this is for km
                weather.windM = data.wind.speed;  //this is for miles
                weather.loc = data.name;
                weather.celsius = KtoC(data.main.temp);
                weather.fahrenheit = KtoF(data.main.temp);

                weather.direction = degreesToDirection(data.wind.deg);
            
            update(weather);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function updateByCityName(name) {
     var url = url_key.weather.url + "q=" + name + "&APPID=" + url_key.weather.key;
    sendRequest(url);
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
    if(weather.icon == '50n' || weather.icon == '10n'){
        icon.src = 'img/icons/202.gif'
    }
    humidity.innerHTML = weather.humidity;
    windK.innerHTML = weather.windK;
    windM.innerHTML = weather.windM;
    direction.innerHTML = weather.direction;
     
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
    
    city = document.getElementById('city').value || 'fremont';
    
    updateByCityName(city);
    
    document.getElementById('city').focus();

}


  






































