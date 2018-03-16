function min(sec, loc, myelement){
    var targetDate = new Date(sec * 1000) 
    var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60
    var apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' 
            + loc+ '&timestamp=' 
            + timestamp + '&key=' 
            + API_TIME;
    
    var xhr = new XMLHttpRequest() 
    xhr.open('GET', apicall) 
    xhr.onload = function(){
        if (xhr.status === 200){ 
            var output = JSON.parse(xhr.responseText) 
            console.log('sunset')
            if (output.status == 'OK'){ 
                var offsets = output.dstOffset * 1000 + output.rawOffset * 1000;
                var time = new Date(timestamp * 1000 + offsets);
                var time2 = time.toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
                elem = document.getElementById(myelement);
                elem.innerHTML = time2;
            }
        }
        else{
            alert('Request failed. :(( Returned status of ' + xhr.status)
        }
    }
    xhr.send()
}

module.exports = min;

