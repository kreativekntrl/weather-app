var apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid={8df1b4f50fc18065282d76ad07ce45c3}"
fetch(apiUrl)
    .then(function (response) {
        console.log(response);
    });
    