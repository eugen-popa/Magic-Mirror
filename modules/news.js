var url_key = require('./config/config');

function news(){

    var web_address = url_key.news.url+url_key.news.key;
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

function guardian(){

    var web_address = url_key.guardian.url+url_key.guardian.key;
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

//http://open-platform.theguardian.com/documentation/
//0047d977-1377-4057-ae99-be354253b667
//
//https://content.guardianapis.com/search?api-key=0047d977-1377-4057-ae99-be354253b667

//for news

//[ux_image id="425" image_size="original" height="146%" margin="29px 0px 0px 0px"]