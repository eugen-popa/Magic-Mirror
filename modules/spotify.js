var key = BQDTOhP6mBLkeQLXO6i-mJkO2tV1G4eVJVCOJr8NfcojniggfWVQjC53eEv36JfNQsSzTaH7NSTYrdbkwO2KARAewed-QNKggT_FdlzDqvK1jhJms48Dcr7i47CtuVE3GW1_CdsWfyrAEKOxML-j7aI7NMT74mU9KiGoZpkg;

function news(){

    var web_address = ;
    var xhr = new XMLHttpRequest() 
    xhr.open('GET', web_address) 
    xhr.onload = function(){
        if (xhr.status === 200){ 
            var data = JSON.parse(xhr.responseText)
            console.log(data);
//            if (data.status == 'OK'){ 
//            
//            }
        }
    }
    xhr.send()
}