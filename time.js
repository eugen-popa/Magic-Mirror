
var API_FORCAST = "61f94a9fa8130d49c23ed0f74d7e97af"; 
var API_TIME = "AIzaSyDxD31Mqfq7aQ6_bnK-ZpcbxsU075tDwog";

function second(city) {
var urll = "http://api.openweathermap.org/data/2.5/forecast?"+
        "q="+ city +
        "&APPID="+API_FORCAST;
var xmlhttpp = new XMLHttpRequest();
    xmlhttpp.open('GET', urll);
    xmlhttpp.onload = function(){
        if(xmlhttpp.status == 200){
        var data = JSON.parse(xmlhttpp.responseText);
            console.log(data);
            const cord = {};
            cord.lat = data.city.coord.lat
            cord.lon = data.city.coord.lon;
            const loc = cord.lat + ", " + cord.lon;
            console.log(loc)
            third(loc);
        }
}
xmlhttpp.send(); 
}
 
//**********************************************************************

function third(loc){
var API_TIME = "AIzaSyDxD31Mqfq7aQ6_bnK-ZpcbxsU075tDwog";
var timeDate = new Date()
var timestamp = timeDate.getTime()/1000 + timeDate.getTimezoneOffset() * 60 
console.log()

var apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' 
    + loc+ '&timestamp=' 
    + timestamp + '&key=' 
    + API_TIME;
var xhr = new XMLHttpRequest() 
xhr.open('GET', apicall) 
xhr.onload = function(){
    if (xhr.status === 200){ 
        var data_out = JSON.parse(xhr.responseText) 
        console.log(data_out)
        if (data_out.status == 'OK'){ 
            var offsets = data_out.dstOffset * 1000 + data_out.rawOffset * 1000 
            var localdate = new Date(timestamp * 1000 + offsets)
            
            console.log(localdate);
            document.getElementById('the-time').innerHTML = localdate;
        }
    }
    else{
        alert('Request failed.:( '+ xhr.status)
    }
}
xhr.send()
}

function first(){
var city = document.getElementById('city').value || 'fremont';
    console.log(city);
    second(city);
}
 
