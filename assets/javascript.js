// Create APIKey and store it in a variable
var APIKey = "237dc8df00ed324646bdf99ee09d2439";
// Activate #search-button using .on("click",)eventListener
$("#search-Btn").on("click", function(){

    var city = $("#search-input").val().trim();
      console.log(city);
    

    // var lat = $(".UV-Index").response.coord.lat; 
    // var lon = $(".UV-Index").val().trim();
    // console.log(lat);
    // console.log(lon);

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
        // callback fiveDayWeather function
        fiveDayWeather(city);
        // callback UV index function
        // uvIndex(lat, lon);
        // Transfer content to HTML
        var d = new Date (response.dt * 1000).toLocaleDateString();
        console.log(d);
          $(".city").html("<h1>" + response.name + " " + d + "</h1>");
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
        
        var fc1 = new Date (response.list[0].dt * 1000).toLocaleDateString();
        var forCas1F = (response.list[0].main.temp - 273.15) * 1.80 + 32;
        $(".card-body-1").text(fc1);
        // $(".card1").html("<div>" + forCas1F + "</div>");
        var fc2 = new Date (response.list[8].dt * 1000).toLocaleDateString();
        $(".card-body-2").text(fc2);
        var fc3 = new Date (response.list[16].dt * 1000).toLocaleDateString();
        $(".card-body-3").text(fc3);
        var fc4 = new Date (response.list[24].dt * 1000).toLocaleDateString();
        $(".card-body-4").text(fc4);
        var fc5 = new Date (response.list[32].dt * 1000).toLocaleDateString();
        $(".card-body-5").text(fc5);
    })
    
    // function uvIndex(lat, lon){
    //     var UVIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=&lon=" + lat&lon + "&appid=" + APIKey;
    //     console.log(UVIndexURL);
    // }
    // $.ajax({
    //     url: UVIndexURL,
    //     method: "GET"

    // }).then(function(response){
    //     console.log(response);
    // })
}
  
