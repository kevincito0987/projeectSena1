console.log("Funciona bgImageContainer.js");

function cambiarImagenDeFondo(nuevaURL) {
    const contenedorImagen = document.querySelector('.image-container');
    if (contenedorImagen) {
      contenedorImagen.style.backgroundImage = `url('${nuevaURL}')`;
    } else {
      console.error('No se encontró ningún elemento con la clase "image-container".');
    }
  }
  
  // Ejemplo de cómo usar la función para cambiar la imagen:
  cambiarImagenDeFondo('../icons/icon5LogSingUpPage.svg');
