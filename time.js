var moment = require('moment');

var AP_PIDK = "61f94a9fa8130d49c23ed0f74d7e97af"; 
var lat, lon, t,n;

var urll = "http://api.openweathermap.org/data/2.5/forecast?"+
        "q="+'miami'+
        "&APPID="+AP_PIDK;

var latg = [];
var long = [];

//var first = latg[0];
var lad = document.getElementById('the-time');
//console.log(lad);
//console.log(long);

var xmlhttpp = new XMLHttpRequest();
    xmlhttpp.open('GET', urll);
    xmlhttpp.onload = function(){
        if(xmlhttpp.status == 200){
        var dataa = JSON.parse(xmlhttpp.responseText);
           
            console.log(dataa);
            
            latg.push(dataa.city.coord.lat);
            long.push(dataa.city.coord.lon);
            
            var latit = {}
                latit.lat = latg[0];
                latit.lon = long[0];
            spot(latit);
            console.log(latit);
        }
};
xmlhttpp.send();

function spot(la){
    t = la.lat;
    n = la.lon;
    
    var n1 = n.toString();
    var t1 = t.toString();
console.log(t1)
urllt(t1, n1)
}
var API = "AIzaSyDxD31Mqfq7aQ6_bnK-ZpcbxsU075tDwog";
var  loc = '47.0056, 28.8575';

//var n = loc.toString();
//var n1 = loc1.toString();

var targetDate = new Date() 
var time = new Date();
var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60 

function sendR(apicall) {
var xhr = new XMLHttpRequest()  
xhr.onreadystatechange = function(){
    
    if (xhr.status === 200){ 
        var output = JSON.parse(xhr.responseText); 
        console.log(output) 
        if (output.status == 'OK'){ 
            var offsets = output.dstOffset * 1000 + output.rawOffset * 1000
            var localdate = new Date(timestamp * 1000 + offsets) 
            console.log(localdate.toLocaleString())
        }
    }
    else{
        alert('Request failed.  Returned status of ' + xhr.status)
    }
};
xhr.open('GET', apicall, true);
xhr.send();
}

function urllt(t1, n1){
    var apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location='+t1+", "+n1+ '&timestamp=' + timestamp + '&key=' + API;
    console.log(n1)
    sendR(apicall)
}
    