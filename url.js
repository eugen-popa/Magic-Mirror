
var API_WeatherForcast = "61f94a9fa8130d49c23ed0f74d7e97af";
var API_TimeZone = "AIzaSyDxD31Mqfq7aQ6_bnK-ZpcbxsU075tDwog";

var url_Forcast = "http://api.openweathermap.org/data/2.5/forecast?"+
        "q="+cityy+
        "&APPID="+API_WeatherForcastForcast;

var url_Timezone = 'https://maps.googleapis.com/maps/api/timezone/json?location=' 
            + lock+ '&timestamp=' 
            + timestamp 
            + '&key=' 
            + API_TimeZone;

module.exports = API_WeatherForcast;