const API_KEY = '3d3b9b32aebc72e5e766753be6d6e4d5';

const btnSearch = document.getElementById('btn-search');
const txtSearch = document.getElementById('txt-search');
const btnClear = document.getElementById('btn-clear');
const resultContainer = document.getElementById('result');

btnSearch.addEventListener('click', (event) => {
  event.preventDefault();

  const region = txtSearch.value;
  getWeatherDataByRegion(region);
});

const clearSearch = (event) => {
  event.preventDefault();

  txtSearch.value = '';
  getUserPosition();
  txtSearch.focus();
};

btnClear.addEventListener('click', clearSearch);

const getWeatherData = (position) => {
  const { latitude, longitude } = position.coords;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showWeatherInfo([data]);
    });
};

const getWeatherDataByRegion = (region) => {
  const url = `https://api.openweathermap.org/data/2.5/find?q=${region}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showWeatherInfo(data.list);
    });
};

const showWeatherInfo = (data) => {
  console.log(data);
  let result = ``;

  for (item of data) {
    result += `<div class="row alert alert-light mx-2 my-4">
                    <div class="col-1">
                        <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" />
                    </div>
                    <ul>
                        <li>Región: ${item.name}</li>
                        <li>Temperatura: ${item.main.temp}</li>
                        <li>Sensación termica: ${item.main.feels_like}</li>
                        <li>Humedad: ${item.main.humidity}</li>
                        <li>Presión:  ${item.main.pressure}</li>
                        <li>Velocidad del viento:  ${item.wind.speed}</li>
                        <li>País: ${item.sys.country}</li>
                    </ul>
                </div>`;
  }

  resultContainer.innerHTML = result;
};

const handleGetPositionError = () => {
  console.log('No se ha podido geolocalizar al usuario...');
};

const getUserPosition = () => {
  navigator.geolocation.getCurrentPosition(
    getWeatherData,
    handleGetPositionError
  );
};

getUserPosition();
