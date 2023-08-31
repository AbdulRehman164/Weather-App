import renderUI from './UI';
import getWeather from './Weather';
import './styles/style.css';

const searchWeatherInput = document.getElementById('search-weather-input');
const searchWeatherButton = document.getElementById('search-weather-button');

function renderWeather(event) {
  if (event.type === 'keydown') {
    if (event.key !== 'Enter') return;
  }
  const errorPara = document.getElementById('error');
  const main = document.querySelector('main');
  const loadingImg = document.getElementById('loading-img');
  loadingImg.style.display = 'block';
  main.style.display = 'none';

  getWeather(searchWeatherInput.value).then((data) => {
    loadingImg.style.display = 'none';
    main.style.display = 'flex';
    errorPara.style.display = 'none';
    if (data instanceof Error) {
      errorPara.textContent = data.message;
      errorPara.style.display = 'block';
      main.style.display = 'none';
    } else {
      renderUI(data);
    }
  });
}

searchWeatherButton.addEventListener('click', renderWeather);
searchWeatherInput.addEventListener('keydown', renderWeather);
