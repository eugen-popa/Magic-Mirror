var APPID = "61f94a9fa8130d49c23ed0f74d7e97af";
var forcastIcon1,forcastIcon2,forcastIcon3,forcastIcon4,forcastIcon5, 
    celsius1,celsius2,celsius3,celsius4,celsius5,
    day1,day2,day3,day4,day5;

function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            
            var data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            
//        for(var i = 0; i <= data.list; i++){
//            if (data.list[i].td)
//        }
        
        var weather = {}
            weather.forcastIcon1 = data.list[0].weather[0].icon;
            weather.forcastIcon2 = data.list[0].weather[0].icon;
            weather.forcastIcon3 = data.list[0].weather[0].icon;
            weather.forcastIcon4 = data.list[0].weather[0].icon;
            weather.forcastIcon5 = data.list[0].weather[0].icon;
            
            weather.celsius1 = KtoC(data.list[0].main.temp);
            weather.celsius2 = KtoC(data.list[0].main.temp);
            weather.celsius3 = KtoC(data.list[0].main.temp);
            weather.celsius4 = KtoC(data.list[0].main.temp);
            weather.celsius5 = KtoC(data.list[0].main.temp);
            
            weather.day1 = weekDay(data.list[0].dt_txt);
            weather.day2 = weekDay(data.list[0].dt_txt);
            weather.day3 = weekDay(data.list[0].dt_txt);
            weather.day4 = weekDay(data.list[0].dt_txt);
            weather.day5 = weekDay(data.list[0].dt_txt);
            
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

//function time(sec){
//    var data = new Date(sec * 1000);
//    var time = data.toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
//    return time;
//}

function weekDay(date){
  var dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function update(weather){
    forcastIcon1.src = "img/icons/" + weather.forcastIcon1 + '.png';
    forcastIcon2.src = "img/icons/" + weather.forcastIcon2 + '.png';
    forcastIcon3.src = "img/icons/" + weather.forcastIcon3 + '.png';
    forcastIcon4.src = "img/icons/" + weather.forcastIcon4 + '.png';
    forcastIcon5.src = "img/icons/" + weather.forcastIcon5 + '.png';
    
    forCelsDay1.innerHTML = weather.celsius1;
    forCelsDay2.innerHTML = weather.celsius2;
    forCelsDay3.innerHTML = weather.celsius3;
    forCelsDay4.innerHTML = weather.celsius4;
    forCelsDay5.innerHTML = weather.celsius5;
    
    weekDay1.innerHTML = weather.day1;
    weekDay2.innerHTML = weather.day2;
    weekDay3.innerHTML = weather.day3;
    weekDay4.innerHTML = weather.day4;
    weekDay5.innerHTML = weather.day5;
    
}

function forcast(){
    
    forcastIcon1 = document.getElementById('forIconDay1');
    forcastIcon2 = document.getElementById('forIconDay2');
    forcastIcon3 = document.getElementById('forIconDay3');
    forcastIcon4 = document.getElementById('forIconDay4');
    forcastIcon5 = document.getElementById('forIconDay5');
    
    celsius1 = document.getElementById('forCelDay1');
    celsius2 = document.getElementById('forCelDay2');
    celsius3 = document.getElementById('forCelDay3');
    celsius4 = document.getElementById('forCelDay4');
    celsius5 = document.getElementById('forCelDay5');
    
    day1 =document.getElementById('weekDay1');
    day2 =document.getElementById('weekDay2');
    day3 =document.getElementById('weekDda3');
    day4 =document.getElementById('weekDay4');
    day5 =document.getElementById('weekDay5');
    
    city = document.getElementById('city').value || 'fremont';

    updateByCityName(city);
}




























