var cityNameSearchEl = $("#city-name");
var cityFormSearchEl = $("#city-form");
var citySearchHistoryEl = $("#city-search-history");

//Handles form submission for City Search
function sendCityNameRequest(event) {
    //Prevent the default behavior
    event.preventDefault();

    //Select form element by the name attribute and get its value
    var cityName = $("input[id= city-name]").val();

    //if there is nothing in the form entered, don't print to the page
    if (!cityName) {
        console.log("No city name filled out in form!");
        return;
    }

    //print to the page
    citySearchHistoryEl.append("<li>" + cityName + "</li>");

    //clear the form input element
    $("input[name= city-name]").val("");

    var apiKey = "347b927f936256c8ed77f0381cc6d59a";
    var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

//Create a submit event listener on the form element
cityFormSearchEl.on("submit", sendCityNameRequest);