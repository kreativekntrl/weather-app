var apiKey = "8df1b4f50fc18065282d76ad07ce45c3"
var currentWeatherCon = $("#current-weather-container");
var cityName = $("#city-name");
var searchBtn = $("#search-btn");
var searchInput = $("#city-search");
var currentDate = moment().format("(ddd, MMM Do)");
var tempLi = $("#current-temp");
var windLi = $("#current-wind");
var humidityLi = $("#current-humidity");
var uviLi = $("#current-uvi");
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
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      lat = data[0].lat;
      lon = data[0].lon;
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

  fetch(requestUrl)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      currentTemp = data.current.temp;
      currentWind = data.current.wind_speed;
      currentHumidity = data.current.humidity;
      currentUVI = data.current.uvi;
      displayCurrent(currentTemp, currentWind, currentHumidity, currentUVI, search);

      for (i = 0; i < 5; i++) {
        dailyIcon = "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png";
        dailyTemp = data.daily[i].temp.max;
        dailyWind = data.daily[i].wind_speed;
        dailyHumidity = data.daily[i].humidity;
        displayForecast(dailyIcon, dailyTemp, dailyWind, dailyHumidity, search);
      }
    })
}

//appends the parsed data to the div container in a list 
function displayCurrent() {
  currentWeatherCon.append(cityName.text(search + " " + currentDate));
  currentWeatherCon.css("display", "block");
  tempLi.text("Temp: " + currentTemp + "°F");
  windLi.text("Wind: " + currentWind + "MPH");
  humidityLi.text("Humidity: " + currentHumidity + "%");
  uviLi.text("UVI: " + currentUVI);
}

function displayForecast() {
  var forecastDisplay = $("<div>");
  forecastDisplay.addClass("card col-sm-2 m-2 search-results");

  var date = $("<h6>");
  date.text(moment().add(i, "days").format("ddd MMM Do"));
  forecastDisplay.append(date);

  // var dailyIcon = "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png";
  var imgDisplay = $("<img>");
  imgDisplay.attr("src", dailyIcon);
  forecastDisplay.append(imgDisplay);

  var dailyTempP = $("<p>");
  dailyTempP.text("Temp: " + dailyTemp);
  forecastDisplay.append(dailyTempP);

  var dailyWindP = $("<p>");
  dailyWindP.text("Wind Speed: " + dailyWind);
  forecastDisplay.append(dailyWindP);

  var dailyHumidityP = $("<p>");
  dailyHumidityP.text("Humidity: " + dailyHumidity);
  forecastDisplay.append(dailyHumidityP);

  $("#forecast").append(forecastDisplay);
}

searchBtn.on("click", handleFormSubmit);
