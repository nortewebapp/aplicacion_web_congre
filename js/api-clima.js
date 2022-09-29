fetch("https://api.tutiempo.net/json/?lan=es&apid=a5Gq4X4aazq7Wdc&lid=43214" , {
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

