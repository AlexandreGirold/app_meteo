

const APIkey = "0066293670bca9338e82e9b29fee2be2"
let resultsAPI;

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {

        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        AppelAPI(lon,lat);

    }, () => {
        alert("Geolocation is not available (turn it on ! )")
    })
}
function AppelAPI(lon, lat) {

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&lang=en&appid=${APIkey}`)
    .then(answer => {
        return answer.json();
    })
    .then((data) =>{
        console.log(data);
    })
}

