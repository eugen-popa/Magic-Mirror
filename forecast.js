var APPID = "61f94a9fa8130d49c23ed0f74d7e97af";
var celsius, fahrenheit, loc, icon, day;

function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            
            var data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            
        for(var i = 0; i < data.list; i++){
        
        }
        var weather = {};
            weather.icon = data.list[0].weather[0].icon;          
            weather.celsius = KtoC(data.list[0].main.temp);
//          weather.fahrenheit = KtoF(data.list[0].main.temp);
            weather.day = weekDay(data.list[0].dt_txt);
    
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

function weekDay(date){
  var dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function update(weather){
    celsius.innerHTML = weather.celsius;
//    fahrenheit.innerHTML = weather.fahrenheit;
    loc.innerHTML = weather.loc;
    day.innerHTML = weather.day;
    icon.src = "img/icons/" + weather.icon + '.png';
}

function citys(){
    icon = document.getElementById('icon');
    day =document.getElementById('day1');
    celsius = document.getElementById('celsius');
//    fahrenheit = document.getElementById('fahrenheit');
//    loc = document.getElementById('location');
    
    city = document.getElementById('city').value || 'fremont';
    
    updateByCityName(city);
}
