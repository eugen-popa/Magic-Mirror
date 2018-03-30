var url_key = require('../config/config');

function min(sec, loc, myelement){
    var targetDate = new Date(sec * 1000) 
    var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60
    var apicall = url_key.timeZone.url 
            + loc+ '&timestamp=' 
            + timestamp + '&key=' 
            + url_key.timeZone.key;
    
    var xhr = new XMLHttpRequest() 
    xhr.open('GET', apicall) 
    xhr.onload = function(){
        if (xhr.status === 200){ 
            var output = JSON.parse(xhr.responseText) 

            if (output.status == 'OK'){ 
                var offsets = output.dstOffset * 1000 + output.rawOffset * 1000;
                var time = new Date(timestamp * 1000 + offsets);
                var time2 = time.toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
                elem = document.getElementById(myelement);
                elem.innerHTML = time2;
            }
        }
    }
    xhr.send()
}

module.exports = min;

