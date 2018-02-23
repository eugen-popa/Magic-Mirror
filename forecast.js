var APPID = "61f94a9fa8130d49c23ed0f74d7e97af";
var tempC,tempF, loc, icon, humidity, windK,windM, direction, city, sunset, sunrise;

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
            weather.tempC = K2C(data.main.temp);
            weather.tempF = K2F(data.main.temp);
            weather.sunset  = min(data.sys.sunset);
            weather.sunrise = min(data.sys.sunrise);
            weather.direction = degreesToDirection(data.wind.deg);
            update(weather);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

//function updateByCityName(name) {
//     var url = "http://api.openweathermap.org/data/2.5/weather?"+
//        "q="+name+
//        "&APPID="+APPID;
//    sendRequest(url);
//}

//function updateByCityName(name) {
//     var url = "http://api.openweathermap.org/data/2.5/forecast?"+
//        "q="+name+
//        "&APPID="+APPID;
//    sendRequest(url);
//}


function K2C(k) {
    return Math.round(k - 273.15);
}

function K2F(k) {
    return Math.round(k*(9/5)-459.67);
}

function update(weather){
    
    tempC.innerHTML = weather.tempC;
    tempF.innerHTML = weather.tempF;
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
    tempC = document.getElementById('temperatureC');
    tempF = document.getElementById('temperatureF');
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
