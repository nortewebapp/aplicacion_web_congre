// Solicitud GET (Request).
fetch('https://api.tutiempo.net/json/?lan=es&apid=a5Gq4X4aazq7Wdc&lid=43214')
  .then(response => response.json())
  .then(data => console.log(data))


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
      result += `<div class="row alert alert-light mx-2 my-4 ">
                      <ul class="ul-clima">
                          <li style="list-style:none" class="lista-clim"><img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" /></li>
                          <li style="list-style:none"><h3>${item.name}</h3></li>
                          <li style="list-style:none">Temperatura: ${item.main.temp}&#176;</li>
                          <li style="list-style:none">Humedad: ${item.main.humidity}&#37;</li>
                          <li style="list-style:none">Presión:  ${item.main.pressure}</li>
                          <li style="list-style:none">Velocidad del viento:  ${item.wind.speed}km/h</li>
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
  