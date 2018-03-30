var clear  = null;

function third(loc){
 
var daysofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
 
    var targetDate = new Date();
    var timestamp = targetDate.getTime()/1000 +                               targetDate.getTimezoneOffset() * 60; 
    var apicall = url_key.timeZone.url + loc+ '&timestamp=' + timestamp + '&key=' + url_key.timeZone.key;

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
                     localdate.toLocaleTimeString() +" "+ daysofweek[localdate.getDay()]
               
                }, 1000)
            }
        }
    }
    xhr.send(); 
}

module.exports = third;


