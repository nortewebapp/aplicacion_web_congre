const contClima = document.getElementById("clima")


// Solicitud GET (Request).
fetch('https://api.tutiempo.net/json/?lan=es&apid=a5Gq4X4aazq7Wdc&lid=43214')
  .then(response => response.json())
  .then(data => console.log(data))


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
  
    contClima.innerHTML = result;
  };

