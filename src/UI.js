export default function renderUI(data) {
  const { current } = data;
  const { forecast } = data;
  const { location } = data;

  renderTempIn(current);

  const cityNamePara = document.getElementById('city-name');
  const dataTimePara = document.getElementById('date-time');

  cityNamePara.textContent = `${location.name},${location.country}`;
  dataTimePara.textContent = current.last_updated;

  const iconSpan = document.getElementById('icon');

  iconSpan.innerHTML = `<img src='${current.condition.icon}'></img>`;

  const weatherInTextPara = document.getElementById('weather-in-text');

  weatherInTextPara.textContent = current.condition.text;

  const windValue = document.getElementById('wind-value');
  windValue.textContent = `${current.wind_mph}m/h`;

  const humidityValue = document.getElementById('humidity-value');
  humidityValue.textContent = `${current.humidity}%`;

  const uvIndexValue = document.getElementById('uv-index-value');
  uvIndexValue.textContent = current.uv;

  const visibilityValue = document.getElementById('visibility-value');
  visibilityValue.textContent = `${current.vis_km}km`;

  const cloudiness = document.getElementById('cloudiness-value');
  cloudiness.textContent = `${current.cloud}%`;

  const chanceOfRain = document.getElementById('chance-of-rain-value');
  chanceOfRain.textContent = `${forecast.forecastday[0].day.daily_chance_of_rain}%`;

  const sunrise = document.getElementById('sunrise-value');
  sunrise.textContent = forecast.forecastday[0].astro.sunrise;

  const sunset = document.getElementById('sunset-value');
  sunset.textContent = forecast.forecastday[0].astro.sunset;

  const moonState = document.getElementById('moon-state-value');
  moonState.textContent = forecast.forecastday[0].astro.moon_phase;
}

function renderTempIn(current) {
  let selected = document.querySelector('input[name="temp-in"]:checked');
  const temperatureSpan = document.getElementById('temperature');
  const temperatureFeelsLikePara = document.getElementById(
    'temperature-feelslike'
  );

  // initial rendering

  temperatureSpan.textContent = `${current[selected.dataset.temp]}${
    selected.value
  }`;
  temperatureFeelsLikePara.textContent = `Feels like ${
    current[selected.dataset.feelslike]
  }${selected.value}`;

  const tempIns = document.querySelectorAll('input[name="temp-in"]');

  tempIns.forEach((tempIn) => {
    tempIn.addEventListener('input', () => {
      selected = document.querySelector('input[name="temp-in"]:checked');
      temperatureSpan.textContent = `${current[selected.dataset.temp]}${
        selected.value
      }`;
      temperatureFeelsLikePara.textContent = `Feels like ${
        current[selected.dataset.feelslike]
      }${selected.value}`;
    });
  });
}
