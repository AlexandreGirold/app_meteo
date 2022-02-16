

const APIkey = "0066293670bca9338e82e9b29fee2be2"
let resultsAPI;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const location = document.querySelector('.localisation');
const hours = document.querySelectorAll('.heure-nom-prevision')
const tempforH = document.querySelectorAll('.heure-prevision-valeur')


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
        
        resultsAPI = data;
        temps.innerText = resultsAPI.current.weather[0].description;
        temperature.innerText = `${Math.round(resultsAPI.current.temp)}°C`;
        location.innerText = resultsAPI.timezone;

        // weather every 3 hours

        let timenow = new Date().getHours();

        for (let i = 0; i< hours.length; i++){

            let increHours = (timenow + i * 3)%24;
            hours[i].innerText = `${increHours} h`;
        }
        for (let j = 0; j < tempforH.length; j++) {
            tempforH[j].innerText = `${Math.round(resultsAPI.hourly[j * 3].temp)}°C`
        }
    })
}

