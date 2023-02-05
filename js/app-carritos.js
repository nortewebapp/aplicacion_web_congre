fetch("https://app.sheetlabs.com/CONO/reservaCarritosseg" , {
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
 

  <br>
  <div class="container">
        <h4 class="text-center">Semana del 06/02/2023</h4>
        <table class="table">
            
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
                  <td data-label="Dia">${arreglos[i].dia}</td>
                  <td data-label="Hermano asignado">${arreglos[i].nombredelpublicador}</td>
                  <td data-label="Carrito">${arreglos[i].carritoqueseutilizara}</td>
                  <td data-label="Horario de Retiro">${arreglos[i].horarioderetiro}</td>
                  <td data-label="Horario de devolucion">${arreglos[i].horariodedevolucion2}</td>
                  <td data-label="Ubicacion">${arreglos[i].dondeestara}</td>
                </tr>`;
    }
  
    html += `   </tbody>
             </table>
              `
      
      ;
  
    const listadoDeArreglos = document.getElementById('carritosFetch');
    listadoDeArreglos.innerHTML = html;
}


// document.addEventListener('listado-de-arreglos', function () {
//   let table = new DataTable('#example');
// });

// var busqueda = document.getElementById('buscar');
// var table = document.getElementById("tabla").tBodies[0];

// buscaTabla = function(){
//   texto = busqueda.value.toLowerCase();
//   var r=0;
//   while(row = table.rows[r++])
//   {
//     if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
//       row.style.display = null;
//     else
//       row.style.display = 'none';
//   }
// }

// busqueda.addEventListener('keyup', buscaTabla);
