
var API = "AIzaSyDxD31Mqfq7aQ6_bnK-ZpcbxsU075tDwog";
var Data = new Date();
var UTS_date = Data.getTime()/1000 + Data.getTimezoneOffset() * 60;
var timeZone;

var location = '35.731252, 139.730291'

function setRequestTime(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText); 
            
            console.log(data);
            
            if (data.status == "OK"){
                var offset = data.dsOffset * 1000 + data.rawOffset * 1000
                var localdate = new Date(UTS_date * 1000 + offset);
                console.log(localdate.toLocaleDateString());
            }
        }else{
            console.log("status: " + xmlhttp);
        }
        
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

function udateTime(name){
    var url = "https://maps.googleapis.com/maps/api/timezone/json?location=" + location + '&timestamp=' + UTS_date + '&key=' + API;
    setRequestTime(url);
}



function updateTime(time){
    time.innerHTML = time.zoneTime;
}    
    
    
function timeZ(){
    timeZone  = document.getElementById('time');
    
    city = document.getElementById('city').value
    udateTime(city);
} 
    
//var time = new Date();
//console.log()