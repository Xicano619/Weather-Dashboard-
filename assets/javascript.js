
var APIKey = "237dc8df00ed324646bdf99ee09d2439";

$("#search-Btn").on("click", function(){

    var city = $("#search-input").val().trim();
      console.log(city);

      weather(city);
});

function weather(city){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then (function(response){
        console.log(response);
        // callback fivedayweather function
        fiveDayWeather(city);
        // callback UV index function
        // Transfer content to HTML
        var d = new Date (response.dt * 1000).toLocaleDateString();
        console.log(d);
          $("#city-name-date").text(response.name + " " + d);
          $(".humidity").text("Humidity: " + response.main.humidity);
          $(".wind").text("Wind Speed: " + response.wind.speed);
          
         
        //Convert the temp to fahrenheit
          var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        //   Add temp content to html
        $(".temp").text("Temperature (F) " + tempF.toFixed(2));
    })
}

function fiveDayWeather(city){
    var foreCastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    console.log(foreCastURL);

    $.ajax({
        url: foreCastURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        var listArr = [response.list[0],response.list[8],response.list[16],response.list[24],response.list[32]];
        console.log(listArr);
    })
  
}