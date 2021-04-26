window.addEventListener('load', () => {
let long;
let lat;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        const api =`'https://api.tomorrow.io/v4/timelines?location=${lat}.${long}&fields=temperature&timesteps=1h&units=metric&apikey=tuHJ7rFWz5N6CGroXJj8TAddMnY1tdWD'`
        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
    });

}
});

