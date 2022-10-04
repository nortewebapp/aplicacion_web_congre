fetch("https://app.sheetlabs.com/CONO/reservaCarritos" , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      
  },
})
.then(response => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Something went wrong');
  }
})
.then(data => mostrarArreglos(data))
.catch((error) => {
    console.error(error);
});





function mostrarArreglos(arreglos) {
  let html = `
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSedhZJGoMBjA-qkcYj41FWSn-IMgDtl8KBCW1HQcY9_PHBVKQ/viewform?usp=sf_link" target="_blank"><button type="button" class="btn btn-primary btn-lg btn-block mb-1" target="_blank">Reservar un horario de carrito</button></a>
  <a href="https://api.whatsapp.com/send?phone=543435199134&text=Hola!%20quisiera%20avisar%20que%20faltan%20publicaciones%20en%20el%20carrito!%F0%9F%92%BC%F0%9F%93%96%F0%9F%93%97%F0%9F%93%98%F0%9F%93%9A" target="_blank"><button type="button" class="btn btn-primary btn-lg btn-block mb-1" target="_blank">Avisar falta de publicaciones</button></a>
  <a href="https://forms.gle/Wj29m5KWW1Z17HT78" target="_blank"><button type="button" class="btn btn-primary btn-lg btn-block mb-1" target="_blank">Queres contar una experiencia? hacelo aqui!</button></a>  
  <a href="https://walink.co/e6d76a" target="_blank"><button type="button" class="btn btn-primary btn-lg btn-block mb-1" target="_blank">Si necesitas ayuda para reservar el carrito hace click aca!</button></a>  

  <br>
  <h4>SEMANA DE 03/10/2022</h4>
  <table id="tabla" class="table table-responsive table-bordered table-striped ">
                  <thead>
                      <tr>
                          <th>Dia</th>
                          <th>Hermano asignado</th>
                          <th>Carrito</th>
                          <th>Horario de retiro</th>
                          <th>Horario de devolucion</th>
                          <th>Ubicacion</th>
                      </tr>
                  </thead>
                  <tbody>`;
  
  for (let i = 0; i < arreglos.length; i++){
  
      html += `<tr> 
                  <td>${arreglos[i].dia}</td>
                  <td>${arreglos[i].nombredelpublicador}</td>
                  <td>${arreglos[i].carritoqueseutilizara}</td>
                  <td>${arreglos[i].horarioderetiro}</td>
                  <td>${arreglos[i].horariodedevolucion2}</td>
                  <td>${arreglos[i].dondeestara}</td>
               </tr>`;
    }
  
    html += `   </tbody>
             </table>
              `
      
      ;
  
    const listadoDeArreglos = document.getElementById('listado-de-arreglos');
    listadoDeArreglos.innerHTML = html;
}


document.addEventListener('listado-de-arreglos', function () {
  let table = new DataTable('#example');
});

var busqueda = document.getElementById('buscar');
var table = document.getElementById("tabla").tBodies[0];

buscaTabla = function(){
  texto = busqueda.value.toLowerCase();
  var r=0;
  while(row = table.rows[r++])
  {
    if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
      row.style.display = null;
    else
      row.style.display = 'none';
  }
}

busqueda.addEventListener('keyup', buscaTabla);