const API_KEY = '3d3b9b32aebc72e5e766753be6d6e4d5';

const resultContainer = document.getElementById('clima');




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
    result += `<div class="row alert-light mx-4 my-4 justify-content-center ">
                    <h3 >El clima en Parana</h3>
                    <ul class='clima col-12'>
                        <li>Región: ${item.name}</li>
                        <li>Temperatura: ${item.main.temp}</li>
                        <li>Sensación termica: ${item.main.feels_like}</li>
                        <li>Humedad: ${item.main.humidity}</li>
                        <li>Presión:  ${item.main.pressure}</li>
                        <li>Velocidad del viento:  ${item.wind.speed}</li>
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
