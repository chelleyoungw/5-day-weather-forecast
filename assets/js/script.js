var requestURL = "http://api.openweathermap.org/data/2.5/forecast?lat=29.699877315364983&lon=-98.15306328187403&appid=347b927f936256c8ed77f0381cc6d59a"

fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function(data){
    console.log(data);
})