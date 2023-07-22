function mostrarRutinas(evt, mostrarRutinas) {
    // Declare all variables
    var i, tabcontenido, tabmusculos;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontenido = document.getElementsByClassName("tabcontenido");
    for (i = 0; i < tabcontenido.length; i++) {
      tabcontenido[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabmusculos = document.getElementsByClassName("tabmusculos");
    for (i = 0; i < tabmusculos.length; i++) {
      tabmusculos[i].className = tabmusculos[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(mostrarRutinas).style.display = "block";
    evt.currentTarget.className += " active";
}

const divsEjercicios = document.querySelectorAll('.ejercicio');

divsEjercicios.forEach(div => {
  div.addEventListener('click', () => {
    const ejercicio = div.id;
    guardarInformacion(ejercicio);
  });
});

function guardarInformacion(ejercicio) {
  // Aquí puedes cargar la información detallada del ejercicio seleccionado
  // Puedes cambiar la imagen, título y texto según el ejercicio seleccionado
  let tituloDetalle = '';
  let videoDetalle = '';
  let textoDetalle = '';
  let listaDetalle = '';

  switch (ejercicio) {
    case 'flexiones':
        tituloDetalle = 'Flexiones';
        videoDetalle = '<iframe width="560" height="315" src="https://www.youtube.com/embed/R08gYyypGto" title="How to Do PUSH-UPS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        textoDetalle = 'Pasos del ejercicio';
        listaDetalle = ['Mantén una posición de tabla con las manos y pies en el suelo.', 'Baja el cuerpo hacia el suelo doblando los codos.', 'Vuelve a la posición inicial estirando los brazos.'];

    break;
    case 'sentadillas':
        tituloDetalle = 'Sentadillas';
        videoDetalle = '<iframe width="560" height="315" src="https://www.youtube.com/embed/xqvCmoLULNY" title="Exercise Tutorial - Squat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        textoDetalle = 'Pasos del ejercicio';
        listaDetalle = ['Colocar las piernas con una apertura un poco mayor que la de los hombros, puntas de los pies ligeramente hacia fuera, flexionar rodillas para bajar hasta los 90º y volver a subir. Mantener la espalda recta.'];

    break;
      case 'fondosEnElBanco':
        tituloDetalle = 'Fondos en el banco';
        videoDetalle = '<iframe width="560" height="315" src="https://www.youtube.com/embed/JhX1nBnirNw" title="How to Do:TRICEPS DIPS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        textoDetalle = 'Pasos del ejercicio';
        listaDetalle = ['En un banco que tenga una altura entre tus rodillas y tu cadera','Colócate de espaldas con las manos en el borde','Realiza fondos, hasta llegar o superar ligeramente los 90º','Un ejercicio muy sencillo de preparación para los fondos en paralelas'];

    break;
    case 'zancadas':
        tituloDetalle = 'Zancadas';
        videoDetalle = '<iframe width="560" height="315" src="https://www.youtube.com/embed/1J8mVmtyYpk" title="How to Do:LUNGES" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        textoDetalle = 'Pasos del ejercicio';
        listaDetalle = ['Adelantar una pierna, dejando la otra atrás y flexionar la rodilla hasta un ángulo de 90º', 'Volver a la posición inicial y cambiar de pierna', 'Intenta que el paso no sea muy corto para evitar movimientos de riesgo de las rodillas'];

    break;
    case 'isometricoFlexiones':
        tituloDetalle = 'Isométrico flexiones';
        videoDetalle = '<iframe width="560" height="315" src="https://www.youtube.com/embed/BAhvzNWDhLk" title="Push-Up Position Plank" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        textoDetalle = 'Pasos del ejercicio';
        listaDetalle = ['Colócate en posición de flexiones con los brazos estirados', 'Aguanta durante un tiempo determinado'];
        
    break;
    // Agrega más casos para otros ejercicios
    default:
    break;
  }

  // Almacenar información en localStorage
  localStorage.setItem('tituloDetalle', tituloDetalle);
  localStorage.setItem('videoDetalle', videoDetalle);
  localStorage.setItem('textoDetalle', textoDetalle);
  localStorage.setItem('listaDetalle', JSON.stringify(listaDetalle));

  // Redireccionar a la otra página
  window.location.href = 'ejercicios.html';
}   
