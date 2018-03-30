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
    },
    
    news: {
        url: "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=",
        key: "d67171db742340cdaa9178186cb4875d"
    },
    
    guardian: {
        url: "https://content.guardianapis.com/search?api-key=",
        key: "0047d977-1377-4057-ae99-be354253b667"
    }
}

module.exports = config;