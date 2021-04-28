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

//   weather.fetchWeather("Denver");

// const api = {
//  key: "5183bb739ea5d9fbbc0c733b5c4aa9d6",
//  base: "https://api.openweathermap.org/data/2.5/",
// };

// const searchbox = document.querySelector(".search-box");
// searchbox.addEventListener("keypress", setQuery);

// function setQuery(evt) {
//  if (evt.keyCode == 13) {
//   getResults(searchbox.value);
//  }
// }

// function getResults(query) {
//  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//   .then(weather => {
//    return weather.json();
//   })
//   .then((data) => displayResults(data));
// }

// function displayResults(weather) {
//  let city = document.querySelector(".location .city");
//  city.innerText = `${weather.name}, ${weather.sys.country}`;
//  console.log(weather)

//  let now = new Date();
//  let date = document.querySelector(".location .date");
//  date.innerText = dateBuilder(now);

//  let temp = document.querySelector(".current .temp");
//  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

//  let weather_el = document.querySelector(".current .weather");
//  weather_el.innerText = weather.weather[0].description;

//  const { icon } = data.weather[0];
// document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+ icon +"@2x.png";

// //  let icon = document.querySelector(".icon).src= "https://openweathermap.org/img/wn/"+ icon +"@2x.png";

//  let hilow = document.querySelector(".hi-low");
//  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
//   weather.main.temp_max
//  )}°c`;

//  if (id <250) {
//      tempIcon.src = './icons/thunder.svg'
//  }
//  else if (id<350) {
//     tempIcon.src = './icons/drizzle.svg'
//  }
//  else if (id<550) {
//     tempIcon.src = './icons/rain.svg'
//  }
//  else if (id<650) {
//     tempIcon.src = './icons/snowy-4.svg'
//  }
//  else if (id<800) {
//     tempIcon.src = './icons/cloudy.svg'
//  }
//  else if (id === 800) {
//     tempIcon.src = './icons/day.svg'
//  }
//  else if (id> 800) {
//     tempIcon.src = './icons/cloudy.svg'
//  }
// }

// function dateBuilder(d) {
//  let months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
//  ];
//  let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//  ];

//  let day = days[d.getDay()];
//  let date = d.getDate();
//  let month = months[d.getMonth()];
//  let year = d.getFullYear();

//  return `${day} ${date} ${month} ${year}`;
// }
