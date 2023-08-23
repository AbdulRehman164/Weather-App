import getWeather from './Weather';

getWeather('vehari').then((data) => {
  console.log(data);
});

const searchWeatherInput = document.getElementById('search-weather-input');
const searchWeatherButton = document.getElementById('search-weather-button');

searchWeatherButton.addEventListener('click', () => {
  getWeather(searchWeatherInput.value).then((data) => {
    console.log(data);
  });
});