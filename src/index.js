import getWeather from './Weather';
import './styles/style.css';

getWeather('vehari').then((data) => {
  console.log(data);
});

const searchWeatherInput = document.getElementById('search-weather-input');
const searchWeatherButton = document.getElementById('search-weather-button');

searchWeatherButton.addEventListener('click', () => {
  getWeather(searchWeatherInput.value).then((data) => {
    if (data instanceof Error) console.log(data.message);
    else console.log(data);
  });
});
