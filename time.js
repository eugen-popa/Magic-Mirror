
var url = require('url')

var API_FORCAST = "61f94a9fa8130d49c23ed0f74d7e97af"; 
var API_TIME = "AIzaSyDxD31Mqfq7aQ6_bnK-ZpcbxsU075tDwog";


function second(cityy) {
    
var urll = "http://api.openweathermap.org/data/2.5/forecast?"+
        "q="+cityy+
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
                const lock = cord.lat + ", " + cord.lon;
            console.log(lock)
            third(lock);
        }
};
xmlhttpp.send(); 
}

//***********************************************************************

function third(lock){
var locationDate = new Date();
    
var locationTime = locationDate.getTime()/1000 + locationDate.getTimezoneOffset() * 60 

var week = ['Sunday', 'Monnday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
var url_Timezone = 'https://maps.googleapis.com/maps/api/timezone/json?location=' 
            + lock+ '&timestamp=' 
            + locationTime 
            + '&key=' 
            + API_TIME;
    
var xhr = new XMLHttpRequest(); 
xhr.open('GET', url_Timezone); 
xhr.onload = function(){
    if (xhr.status === 200){ 
        var data_out = JSON.parse(xhr.responseText); 
        console.log(data_out);
        if (data_out.status == 'OK'){ 
            var offsets = data_out.dstOffset * 1000 + data_out.rawOffset * 1000 
            console.log(offsets * 1000)
            console.log(locationTime * 1000)
            var localDate = new Date(locationTime * 1000 + offsets); 
            
//            console.log(localDate.toLocaleString());
            console.log(localDate);
            var refreshDate = new Date();
            console.log(locationDate);
            console.log(refreshDate);
            
            var millisecondselapsed = refreshDate - locationDate;
            console.log(millisecondselapsed)
            
            localDate.setMilliseconds(localDate.getMilliseconds()+ millisecondselapsed);
            
            setInterval(function(){
                localDate.setSeconds(localDate.getSeconds()+1)
                document.getElementById('the-time').innerHTML = 
                    localDate.toLocaleTimeString() + ' (' + week[ localDate.getDay() ] + ')';
                }, 1000);
        }
    }
    else{
        alert('Request failed.:( '+ xhr.status)
    }
}
xhr.send()
}

function first(){
    var cityy = document.getElementById('city').value || 'fremont';
    second(cityy);
};

//    var targetDate = new Date()
//    var daysofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
//    var localdate = new Date(timestamp * 1000 + offsets)        
//    var refreshDate = new Date() // get current date again to calculate time elapsed between targetDate and now
//    var millisecondselapsed = refreshDate - targetDate // get amount of time elapsed between targetDate and now
//        localdate.setMilliseconds(localdate.getMilliseconds()+ millisecondselapsed) // update localdate to account for any time elapsed
//                setInterval(function(){
//                    localdate.setSeconds(localdate.getSeconds()+1)
//   document.getElementById('the-time').innerHTML = localdate.toLocaleTimeString() + ' (' + daysofweek[ localdate.getDay() ] + ')'
//                }, 1000)





//module.exports = first;
































