import renderUI from './UI';
import getWeather from './Weather';
import './styles/style.css';

getWeather('vehari').then((data) => {
  renderUI(data);
  console.log(data);
});

const searchWeatherInput = document.getElementById('search-weather-input');
const searchWeatherButton = document.getElementById('search-weather-button');

searchWeatherButton.addEventListener('click', () => {
  const main = document.querySelector('main');
  const loadingImg = document.getElementById('loading-img');
  loadingImg.style.display = 'block';
  main.style.display = 'none';
  getWeather(searchWeatherInput.value).then((data) => {
    loadingImg.style.display = 'none';
    main.style.display = 'flex';
    if (data instanceof Error) console.log(data.message);
    else {
      renderUI(data);
      console.log(data);
    }
  });
});
