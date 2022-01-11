var apiKey = "8df1b4f50fc18065282d76ad07ce45c3"
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=san diego&appid=8df1b4f50fc18065282d76ad07ce45c3"
fetch(apiUrl)
    .then(function (response){
        if(response.ok){
            return response.json();
        }
    })
    .then(function (data){
        console.log(data);
    })