
//var url = require("./modules/url");
var API_FORCAST = "61f94a9fa8130d49c23ed0f74d7e97af"; 
var API_TIME = "AIzaSyDxD31Mqfq7aQ6_bnK-ZpcbxsU075tDwog";

var clear  = null;

function second(city) {
var urll = "http://api.openweathermap.org/data/2.5/forecast?"+
        "q="+ city +
        "&APPID="+API_FORCAST;

var xmlhttpp = new XMLHttpRequest();
    xmlhttpp.open('GET', urll)
    xmlhttpp.onload = function(){
        if(xmlhttpp.status == 200){
        var data = JSON.parse(xmlhttpp.responseText);
//            console.log(data);
            const cord = {};
                cord.lat = data.city.coord.lat
                cord.lon = data.city.coord.lon;
                const loc = cord.lat + ", " + cord.lon;
            third(loc);
        }
}
//xmlhttpp.open('GET', url, 'true')
xmlhttpp.send()
}
 
//**********************************************************************

function third(loc){
 
var daysofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
 
    var targetDate = new Date();
    var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60; 
    var apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' 
            + loc+ '&timestamp=' 
            + timestamp + '&key=' 
            + API_TIME;

    var xhr = new XMLHttpRequest() 
    xhr.open('GET', apicall) 
    xhr.onload = function(){
        if (xhr.status === 200){ 
            var output = JSON.parse(xhr.responseText) 
            console.log(output) 
         
            if (output.status == 'OK'){  
                var offsets = output.dstOffset * 1000 + output.rawOffset * 1000 
                var localdate = new Date(timestamp * 1000 + offsets) 

                console.log(localdate)

                var refreshDate = new Date()
                var millisecondselapsed = refreshDate - targetDate 

                console.log(millisecondselapsed)
                
                localdate.setMilliseconds(localdate.getMilliseconds()+ millisecondselapsed)
                document.getElementById('the-time').innerHTML = '';
               
                if (clear){
                    clearInterval(clear);
                }
                clear = setInterval(function(){
                    localdate.setSeconds(localdate.getSeconds()+1)

                localdate.setMilliseconds(localdate.getMilliseconds()+ millisecondselapsed) 
               
//                if (clear){clearInterval(clear)}
//                clear = setInterval(function(){
//                    localdate.setSeconds(localdate.getSeconds()+1)     

                document.getElementById('the-time').innerHTML = 
                     localdate.toLocaleTimeString() +" "+ daysofweek[localdate.getDay() ]
               
                }, 1000)
            }
        }
        else{
            alert('Request failed. ' + xhr.status)
        }
    }
    xhr.send(); 
}

function first(){
    var cityy = document.getElementById('city').value || 'fremont';
    second(cityy);
}



