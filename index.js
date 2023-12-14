
let units = "metric";
let apiKey = "e165ab4o82t6774be34bfe406eaaafd2";

function getCurrentWeather(cityName) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=${units}`;

  axios
    .get(apiUrl)
    .then(response => {
      let temperatureElement = document.querySelector("#temperature-value");
      let temperature = Math.round(response.data.temperature.current);
      temperatureElement.innerHTML = `${temperature}`;
    })
    .catch(error => {
      console.error(`Error fetching current weather data for ${cityName}:`, error);
    });
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let cityName = searchInputElement.value;
  cityElement.innerHTML = cityName;
  getCurrentWeather(cityName);
}



function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
