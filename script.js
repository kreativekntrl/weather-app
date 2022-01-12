var apiKey = "8df1b4f50fc18065282d76ad07ce45c3"
/*var apiWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8df1b4f50fc18065282d76ad07ce45c3"
var apiCoordsUrl = "https://api.openweathermap.org/geo/1.0/reverse?lat=51.5098&lon=-0.1180&limit=5&appid=8df1b4f50fc18065282d76ad07ce45c3"*/

/*function fecthWeather(lat, lon) {
    var requestWeatherUrl =  "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=minutely,hourly,alerts&appid=8df1b4f50fc18065282d76ad07ce45c3&units=imperial";
    console.log(requestWeatherUrl);

    fetch(requestWeatherUrl)
        .then(function (response) {
            if(response.ok) {
                return response.json();
            }
        })
        .then(function (data){
            console.log(data);
        })
}
fecthWeather();*/

function getCoords(search) {
    var requestCoordsUrl =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      search +
      "&limit=1&appid=8df1b4f50fc18065282d76ad07ce45c3";
  
    fetch(requestCoordsUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          console.log(data);
        /*fetchWeather(data[0].lat, data[0].lon);*/
      });
  }
  getCoords();
  
//Fetchers weather API and parses out temp, wind, humidity, iv index

        /*console.log("Temp: ", data[0].wind_speed);*/
        /*console.log("Wind: ", data.data[])
        console.log("Humidity: ", data.data[])
        console.log("UV Index: ", data.data[])*/
