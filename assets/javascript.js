// Create APIKey and store it in a variable
var APIKey = "237dc8df00ed324646bdf99ee09d2439";
// Activate #search-button using .on("click",)eventListener
$("#search-Btn").on("click", function () {
  var city = $("#search-input").val().trim();
  console.log(city);

  // var lat = $(".UV-Index").response.coord.lat;
  // var lon = $(".UV-Index").val().trim();
  // console.log(lat);
  // console.log(lon);

  weather(city);

  save();
});

function weather(city) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // callback fiveDayWeather function
    fiveDayWeather(city);
    // callback UV index function
    // uvIndex(lat, lon);
    // Transfer content to HTML
    var d = new Date(response.dt * 1000).toLocaleDateString();
    console.log(d);
    $(".city").html("<h4>" + response.name + " " + d + "</h4>");
    $(".humidity").text("Humidity: " + response.main.humidity + "%");
    $(".wind").text("Wind Speed: " + response.wind.speed + " " + "MPH");

    //Convert the temp to fahrenheit
    var tempF = (response.main.temp - 273.15) * 1.8 + 32;

    //   Add temp content to html
    $(".temp").text("Temperature: " + tempF.toFixed(2) + "F");
  });
}

function fiveDayWeather(city) {
  var foreCastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    APIKey;
  console.log(foreCastURL);

  $.ajax({
    url: foreCastURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    var listArr = [
      response.list[0],
      response.list[8],
      response.list[16],
      response.list[24],
      response.list[32],
    ];
    console.log(listArr);

    $("#fiveDayFore").html("<h6>" + "5-Day Forecast:</h6>");
    // Create vars for day2 forecast
    var fc1 = new Date(response.list[0].dt * 1000).toLocaleDateString();
    var forCas1F = (response.list[0].main.temp - 273.15) * 1.8 + 32;
    var Icon1 = response.list[0].weather[0].icon;
    // Add content to html for day1 forecast
    $(".card-body-1").text(fc1);
    $(".icon1").text(Icon1);
    $(".temp1").text("Temperature: " + forCas1F.toFixed(2) + "F");
    $(".hum1").text("Humidity: " + response.list[0].main.humidity + "%");
    // $(".card1").html("<div>" + forCas1F + "</div>");
    // Create vars for day2 forecast
    var forCas2F = (response.list[8].main.temp - 273.15) * 1.8 + 32;
    var Icon2 = response.list[8].weather[0].icon;
    var fc2 = new Date(response.list[8].dt * 1000).toLocaleDateString();
    // Add content to html for day2 forecast
    $(".card-body-2").text(fc2);
    $(".icon2").text(Icon2);
    $(".temp2").text("Temperature: " + forCas1F.toFixed(2) + "F");
    $(".hum2").text("Humidity: " + response.list[8].main.humidity + "%");
    // $(".card2").html("<div>" + forCas2F + "</div>");
    // Create vars for day3 forecast
    var fc3 = new Date(response.list[16].dt * 1000).toLocaleDateString();
    var forCas3F = (response.list[16].main.temp - 273.15) * 1.8 + 32;
    var Icon3 = response.list[16].weather[0].icon;
    // Add content to html for day3 forecast
    $(".card-body-3").text(fc3);
    $(".icon3").text(Icon3);
    $(".temp3").text("Temperature: " + forCas1F.toFixed(2) + "F");
    $(".hum3").text("Humidity: " + response.list[16].main.humidity + "%");
    // Create var for day4 forecast
    var fc4 = new Date(response.list[24].dt * 1000).toLocaleDateString();
    var forCas4F = (response.list[24].main.temp - 273.15) * 1.8 + 32;
    var Icon4 = response.list[24].weather[0].icon;
    // Add content to html for day4 forecast
    $(".card-body-4").text(fc4);
    $(".icon4").text(Icon4);
    $(".temp4").text("Temperature: " + forCas1F.toFixed(2) + "F");
    $(".hum4").text("Humidity: " + response.list[24].main.humidity + "%");
    // Create var for day5 forecast
    var fc5 = new Date(response.list[32].dt * 1000).toLocaleDateString();
    var forCas5F = (response.list[32].main.temp - 273.15) * 1.8 + 32;
    var Icon5 = response.list[32].weather[0].icon;
    // Add content to html for day5 forecast
    $(".card-body-5").text(fc5);
    $(".icon5").text(Icon5);
    $(".temp5").text("Temperature: " + forCas1F.toFixed(2) + "F");
    $(".hum5").text("Humidity: " + response.list[32].main.humidity + "%");
  });

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

//   function save() {
//     var saveCity = $(this).parent().data(city);
//     var text = $(this).siblings("#city-section").val();

//     localStorage.setItem(saveCity, text);
//   }

//   $("#city-section[data-store='cities'] text").val(
//     localStorage.getItem("cities")
//   );
}
