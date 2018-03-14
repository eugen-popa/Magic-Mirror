//var wheather = requite('wheater');

function min(sec){

    var data = new Date(sec * 1000);
    var time = data.toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
return time;
    
}

module.exports = min;

