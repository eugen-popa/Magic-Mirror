var config = {
    
    weather: {
        url: "http://api.openweathermap.org/data/2.5/weather?",
        key: "61f94a9fa8130d49c23ed0f74d7e97af"
    },
    
    forcast: {
        url: "http://api.openweathermap.org/data/2.5/forecast?",
        key: "61f94a9fa8130d49c23ed0f74d7e97af"
    },
    
    timeZone: {
        url: "https://maps.googleapis.com/maps/api/timezone/json?location=",
        key: "AIzaSyDxD31Mqfq7aQ6_bnK-ZpcbxsU075tDwog"
    },
    
    moon: {
        url: "http://www.icalendar37.net/lunar/api/?"
    }
}

module.exports = config;