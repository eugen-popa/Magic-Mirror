var APPID = "61f94a9fa8130d49c23ed0f74d7e97af";
var celsius, fahrenheit, loc, forcastIcon, day;

function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            
            var data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            
//        for(var i = 0; i <= data.list; i++){
//            if (data.list[i].td)
//        }
        var weather = {};
            weather.forcastIcon = data.list[0].weather[0].icon;          
            weather.celsius = KtoC(data.list[0].main.temp);
            console.log(weather.celsius);
//          weather.fahrenheit = KtoF(data.list[0].main.temp);
            weather.day = weekDay(data.list[0].dt_txt);
            console.log(weather.day);
        update(weather);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function updateByCityName(name) {
     var url = "http://api.openweathermap.org/data/2.5/forecast?"+
        "q="+name+
        "&APPID="+APPID;
    sendRequest(url);
}

function KtoC(k) {
    return Math.round(k - 273.15);
}
//function KtoF(k) {
//    return Math.round(k*(9/5)-459.67);
//}

function time(sec){
    var data = new Date(sec * 1000);
    var time = data.toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
    return time;
}

function weekDay(date){
  var dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function update(weather){
    forcastC.innerHTML = weather.celsius;
//    fahrenheit.innerHTML = weather.fahrenheit;
    weekD.innerHTML = weather.day;
    forcastIcon.src = "img/icons/" + weather.forcastIcon + '.png';
}

function forcast(){
    forcastIcon = document.getElementById('forcastIcon');
    day =document.getElementById('weekD');
    celsius = document.getElementById('forcastC');
//    fahrenheit = document.getElementById('fahrenheit');
//    loc = document.getElementById('location');
    
    city = document.getElementById('city').value || 'fremont';
    
    updateByCityName(city);
}
