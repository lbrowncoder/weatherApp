let weather = {
 apiKey: "5183bb739ea5d9fbbc0c733b5c4aa9d6",
 fetchWeather: function (city) {
  fetch(
   "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    this.apiKey
  )
   .then(response => {
    if (!response.ok) {
     alert("No weather found.");
     throw new Error("No weather found.");
    }
    return response.json();
   })
   .then(data => this.displayWeather(data));
 },
 displayWeather: function (data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
   "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = `${Math.round(
   data.main.temp
  )}°c `;
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
  document.querySelector(".hi-low").innerText = `${Math.round(
   data.main.temp_min)}°c / ${Math.round(data.main.temp_max
  )}°c `;
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage = name;
 },
 search: function () {
  this.fetchWeather(document.querySelector(".search-bar").value);
 },
};

document.querySelector(".search button").addEventListener("click", function () {
 weather.search();
});

document
 .querySelector(".search-bar")
 .addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
   weather.search();
  }
 });

