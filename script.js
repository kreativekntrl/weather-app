var apiKey = "8df1b4f50fc18065282d76ad07ce45c3"
var searchBtn = $("#search-btn");
var searchInput = $("#city-search");
var search;
var lat;
var lon;


//On click event for search button and stores text of searched city as a variable called search
function handleFormSubmit(event) {
  search = searchInput.val();
  event.preventDefault();
  fetchCoords();
}

searchBtn.on("click", handleFormSubmit);

//Function that fetches lat and lon from geo location API and stores it in variables lat and long
function fetchCoords(search) {
  search = searchInput.val();
  var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?limit=1&q=" + search + "&appid=8df1b4f50fc18065282d76ad07ce45c3";
  
  fetch(requestUrl)
  .then(function (response){
    if (response.ok){
      return response.json();
    }
  })
  .then(function (data){
      var lat = data[0].lat;
      var lon = data[0].lon;
      console.log("lat:", lat);
      console.log("lon: ", lon);
    })
}

//Function that takes lat and long variables from Geo location response and passes them into the requestUrl for open Weather one call function request
function fetchWeather(lat, lon) {
  var lat = data[0].lat;
  var lon = data[0].lon;

  var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  lat +
  "&lon=" +
  lon +
  "&exclude=minutely,hourly,alerts&appid=8df1b4f50fc18065282d76ad07ce45c3&units=imperial";
  console.log(requestUrl);

}

//Function parses the data from response for WIND, TEMP, HUMIDITY, UVI, CITY NAME, and DATE (ICON?)


//appends the parsed data to the div container in a list 
















/*function fecthWeather(lat, lon) {
    var requestUrl =  "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=minutely,hourly,alerts&appid=8df1b4f50fc18065282d76ad07ce45c3&units=imperial";
    console.log(requestUrl);

    fetch(requestUrl)
        .then(function (response) {
            if(response.ok) {
                return response.json();
            }
        })
        .then(function (data){
            console.log(data);
        })
}
fecthWeather();

function getCoords(search) {
    var requestUrl =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      search +
      "&limit=1&appid=8df1b4f50fc18065282d76ad07ce45c3";
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          console.log(data);
        /*fetchWeather(data[0].lat, data[0].lon);*/
   
  
//Fetchers weather API and parses out temp, wind, humidity, iv index

        /*console.log("Temp: ", data[0].wind_speed);*/
        /*console.log("Wind: ", data.data[])
        console.log("Humidity: ", data.data[])
        console.log("UV Index: ", data.data[])*/
