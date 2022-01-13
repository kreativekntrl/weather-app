var apiKey = "8df1b4f50fc18065282d76ad07ce45c3"
var currentWeatherCon = $("#current-weather-container");
var cityName = $("#city-name");
var searchBtn = $("#search-btn");
var searchInput = $("#city-search");
var currentDate = moment().format("(ddd, MMM Do)");
var search;

//On click event for search button and stores text of searched city as a variable called search
function handleFormSubmit(event) {
  search = searchInput.val();
  event.preventDefault();
  fetchCoords();
}

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
  .then(function (data) {
    lat = data[0].lat;
    lon = data[0].lon;
    console.log("lat:", lat);
    console.log("lon: ", lon);
    fetchWeather(lat, lon, search);
  })
}

//Function that takes lat and long variables from Geo location response and passes them into the requestUrl for open Weather one call function request
//Function parses the data from response for WIND, TEMP, HUMIDITY, UVI, CITY NAME, and DATE (ICON?)
function fetchWeather() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  lat +
  "&lon=" +
  lon +
  "&exclude=minutely,hourly,alerts&appid=8df1b4f50fc18065282d76ad07ce45c3&units=imperial";
  console.log(requestUrl);
  
  fetch(requestUrl)
  .then(function (response){
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (data){
    currentTemp = data.current.temp;
    currentWind = data.current.wind_speed;
    currentHumidity = data.current.humidity;
    currentUVI = data.current.uvi;
    console.log(currentTemp);
    console.log(currentWind);
    console.log(currentHumidity);
    console.log(currentUVI);
    console.log(data);
    displayCurrent(currentTemp, currentWind, currentHumidity, currentUVI, search);
  })
}

function displayCurrent() {
  currentWeatherCon.append(cityName.text(search +  " " + currentDate));
  currentWeatherCon.css("display", "block");
  currentWeatherCon.append(currentTemp);
  currentWeatherCon.append(currentWind);
  currentWeatherCon.append(currentHumidity);
  currentWeatherCon.append(currentUVI);

}

searchBtn.on("click", handleFormSubmit);


//appends the parsed data to the div container in a list 

















