// 🖼️ Mensaje en consola para verificar carga del script  
console.log("✅ Funciona bgImageContainer.js");

// 🎨 Función para cambiar la imagen de fondo dinámicamente  
function cambiarImagenDeFondo(nuevaURL) {  
    // 🔍 Seleccionamos el contenedor de la imagen  
    const contenedorImagen = document.querySelector('.image-container');  

    // ⚡ Verificamos si el contenedor existe antes de aplicar cambios  
    if (contenedorImagen) {  
        contenedorImagen.style.backgroundImage = `url('${nuevaURL}')`;  // 🎯 Aplicamos la nueva imagen de fondo  
    } else {  
        console.error('🚫 No se encontró ningún elemento con la clase "image-container".');  // ⚠️ Mostramos error si no existe  
    }  
}  

// 🏗️ Ejemplo de uso: Cambiar la imagen de fondo a un icono específico  
cambiarImagenDeFondo('../icons/icon5LogSingUpPage.svg');  
