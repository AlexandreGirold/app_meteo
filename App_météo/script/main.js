

const KeyApi = "0066293670bca9338e82e9b29fee2be2"
let resultsAPI;

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {

        console.log(position);

    }, () => {
        alert("Geolocation is not available (turn it on ! )")
    })
}
