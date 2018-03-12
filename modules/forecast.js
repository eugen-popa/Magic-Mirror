var url = require('url');
var moment = require('moment');
var AP_PID = "61f94a9fa8130d49c23ed0f74d7e97af"; 

var forcastIcon1,forcastIcon2,forcastIcon3,forcastIcon4,forcastIcon5, 
    celsius1,celsius2,celsius3,celsius4,celsius5,
    day1,day2,day3,day4,day5;

function sendRequestForcast(url) {
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            
            var data = JSON.parse(xmlhttp.responseText);
           console.log(data);
            
            var aray_icon = [];
            var aray_temp = [];
            var aray_day = [];
            
        for(var i = 0; i < data.list.length; i++){
            var forCast = data.list[i];
              
            if (forCast.dt_txt.search("15:00:00") != -1){
                
                aray_icon.push(forCast.weather[0].icon);
                aray_day.push(forCast.dt);
                aray_temp.push(forCast.main.temp);
            }
        }
            var weatherForcast = {}
            
                weatherForcast.forcastIcon1 = aray_icon[0];
                weatherForcast.forcastIcon2 = aray_icon[1];
                weatherForcast.forcastIcon3 = aray_icon[2];
                weatherForcast.forcastIcon4 = aray_icon[3];
                weatherForcast.forcastIcon5 = aray_icon[4];
            
                weatherForcast.celsius1 = KtoCForcast(aray_temp[0]);
                weatherForcast.celsius2 = KtoCForcast(aray_temp[1]);
                weatherForcast.celsius3 = KtoCForcast(aray_temp[2]);
                weatherForcast.celsius4 = KtoCForcast(aray_temp[3]);
                weatherForcast.celsius5 = KtoCForcast(aray_temp[4]);
            
                weatherForcast.day1 = moment(aray_day[0] * 1000).format("ddd");
                weatherForcast.day2 = moment(aray_day[1] * 1000).format("ddd");
                weatherForcast.day3 = moment(aray_day[2] * 1000).format("ddd");
                weatherForcast.day4 = moment(aray_day[3] * 1000).format("ddd");
                weatherForcast.day5 = moment(aray_day[4] * 1000).format("ddd");
            
        updateForcast(weatherForcast);
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function updateByCityNameForcast(name) {
     var url = "http://api.openweathermap.org/data/2.5/forecast?"+
        "q="+name+
        "&APPID="+AP_PID;
    sendRequestForcast(url);
}

function KtoCForcast(k) {
    return Math.round(k - 273.15);
}

function updateForcast(weather){
    
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
    
    day1 = document.getElementById('weekDay1');
    day2 = document.getElementById('weekDay2');
    day3 = document.getElementById('weekDda3');
    day4 = document.getElementById('weekDay4');
    day5 = document.getElementById('weekDay5');
    
    city = document.getElementById('city').value || 'fremont';

    updateByCityNameForcast(city);
}



