document.addEventListener('DOMContentLoaded', () => {
    // Obtener información almacenada en localStorage
    const tituloDetalle = localStorage.getItem('tituloDetalle');
    const videoDetalle = localStorage.getItem('videoDetalle');
    const textoDetalle = localStorage.getItem('textoDetalle');
    const listaDetalle = JSON.parse(localStorage.getItem('listaDetalle'));

  
    // Mostrar la información en la página
    document.getElementById('tituloDetalle').textContent = tituloDetalle;
    document.getElementById('videoDetalle').innerHTML = videoDetalle;
    document.getElementById('textoDetalle').textContent = textoDetalle;
    mostrarLista(listaDetalle);

  
    // Limpiar localStorage después de utilizar la información
    localStorage.removeItem('tituloDetalle');
    localStorage.removeItem('videoDetalle');
    localStorage.removeItem('textoDetalle');
    localStorage.removeItem('listaDetalle');

});

function mostrarLista(listaDetalle) {
  const listaElement = document.getElementById('listaDetalle');

  if (listaDetalle && Array.isArray(listaDetalle)) {
    listaDetalle.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      listaElement.appendChild(li);
    });
  }
}

  